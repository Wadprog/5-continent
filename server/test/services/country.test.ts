import app from '../../src/app';

describe('\'country\' service', () => {
  it('registered the service', () => {
    const service = app.service('pais');
    expect(service).toBeTruthy();
  });
});
