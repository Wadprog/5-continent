import app from '../../src/app';

describe('\'customers\' service', () => {
  it('registered the service', () => {
    const service = app.service('customers');
    expect(service).toBeTruthy();
  });
});
