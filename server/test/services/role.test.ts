import app from '../../src/app';

describe('\'role\' service', () => {
  it('registered the service', () => {
    const service = app.service('role');
    expect(service).toBeTruthy();
  });
});
