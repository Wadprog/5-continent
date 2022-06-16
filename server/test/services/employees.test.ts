import app from '../../src/app';

describe('\'employees \' service', () => {
  it('registered the service', () => {
    const service = app.service('employees');
    expect(service).toBeTruthy();
  });
});
