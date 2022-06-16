import app from '../../src/app';

describe('\'store\' service', () => {
  it('registered the service', () => {
    const service = app.service('store');
    expect(service).toBeTruthy();
  });
});
