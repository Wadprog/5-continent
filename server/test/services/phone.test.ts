import app from '../../src/app';

describe('\'phone\' service', () => {
  it('registered the service', () => {
    const service = app.service('phone');
    expect(service).toBeTruthy();
  });
});
