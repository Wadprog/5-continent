/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import { StatusCodes } from 'http-status-codes';
import request from 'supertest';
import app from '../../src/app';

import { getRandUsers } from '../MOC_DATA/generateFakeUser';

const endpoint = '/users';
/* #region  Global variables Main */

const modify = { lastName: 'fullano', gender: 'f' };
let createdTestUsers = [];

const expectedUser = {
  id: expect.any(String),
  gender: expect.any(String),
  admin: expect.any(Boolean),
  online: expect.any(Boolean),
  active: expect.any(Boolean),
  lastName: expect.any(String),
  lastSeen: expect.any(String),
  verified: expect.any(Boolean),
  firstName: expect.any(String),
  createdAt: expect.any(String),
  updatedAt: expect.any(String),
  lastSeenPrivacy: expect.any(Boolean),
};
/* #endregion */

describe('/users service', () => {
  let testServer;
  beforeAll(async () => {
    app.get('sequelizeClient').options.logging = false;
    await app.get('sequelizeClient').sync({ force: true, logged: false });
    testServer = request(app);
  }, 20000);

  afterAll(async () => {
    await Promise.all(
      createdTestUsers.map((requester) =>
        testServer
          .delete(`${endpoint}/${requester?.user.id}`)
          .set('authorization', requester.token)
      )
    );
  });
  it('The user service is running', async () => {
    const service = app.service('users');
    expect(service).toBeDefined();
  });
  it('Should not create user', async () => {
    const responses = await Promise.all(
      [
        { password: 'goodPassword' },
        { email: 'goodPassword' },
        { email: 'notEmail', password: 'goodPassword' },
        { password: 'badPassword', email: 'rt@example.com' },
      ].map((user) => testServer.post(endpoint).send(user))
    );

    // responses = responses.map((response) => response.body);
    responses.forEach((response) => {
      expect(response.statusCode).toBe(StatusCodes.BAD_REQUEST);
    });
  }, 10000);

  it('Should create and autoLog 4 users', async () => {
    const responses = await Promise.all(
      getRandUsers(4).map((user) => testServer.post(endpoint).send(user))
    );
    createdTestUsers = responses.map((response) => ({
      user: response.body,
      token: response.body.accessToken,
    }));

    responses.forEach(({ body }) => {
      expect(body).toMatchObject(expectedUser);
      expect(body.id).toBeDefined();
      expect(body.password).toBeUndefined();
    });
  }, 20000);

  it('should return all users', async () => {
    const users = await testServer
      .get(`${endpoint}?$select['id']`)
      .set('authorization', `Bearer ${createdTestUsers[0].token}`);
    expect(users.body.total).toEqual(createdTestUsers.length);
  }, 1000);

  it('should get a user by id ', async () => {
    const requester = createdTestUsers[0];
    const profileRequesting = createdTestUsers[1]?.user;

    const userR = await testServer
      .get(`${endpoint}/${profileRequesting.id}`)
      .set('authorization', requester.token);

    expect(userR.body.id).toEqual(profileRequesting.id);
  });

  it('should not update sensitive information', async () => {
    const requester = createdTestUsers[0];
    [
      { password: 'password' },
      { activationKey: 'activationKey' },
      { resetPasswordKey: 'resetPasswordKey' },
    ].forEach(async (unacceptable) => {
      const res = await testServer
        .patch(`${endpoint}/${requester?.user.id}`)
        .send(unacceptable)
        .set('authorization', requester.token);
      expect(res.statusCode).toEqual(400);
    });
  });

  it('should not modify a different user', async () => {
    const requester = createdTestUsers[0];
    const res = await testServer
      .patch(`${endpoint}/${createdTestUsers[1]?.user.id}`)
      .send(modify)
      .set('authorization', requester.token);
    expect(res.statusCode).toEqual(400);
  });

  it('should update the user details', async () => {
    const requester = createdTestUsers[0];
    const res = await testServer
      .patch(`${endpoint}/${requester?.user.id}`)
      .send(modify)
      .set('authorization', requester.token);
    expect(res.body.birthday).toBeDefined();
    expect(res.body).toEqual(expect.objectContaining(modify));
  });

  it('The user should now be updated with the fields above ', async () => {
    const userR = await testServer
      .get(`${endpoint}/${createdTestUsers[0].user.id}`)
      .set('authorization', createdTestUsers[0].token);
    expect(userR.body).toEqual(expect.objectContaining(modify));
  });

  it('should not delete another user profile', async () => {
    const response = await testServer
      .delete(`${endpoint}/${createdTestUsers[0]?.user.id}`)
      .set('authorization', createdTestUsers[1].token);
    expect(response.statusCode).toEqual(400);
  });

  it('should delete his own profile', async () => {
    const requester = createdTestUsers[0];
    const deletedUser = await testServer
      .delete(`${endpoint}/${requester?.user.id}`)
      .set('authorization', requester.token);
    expect(requester?.user.id).toEqual(deletedUser.body.id);
    expect(deletedUser.statusCode).toEqual(200);
  });
});
