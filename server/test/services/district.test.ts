import app from '../../src/app';

describe('\'district\' service', () => {
  it('registered the service', () => {
    const service = app.service('district');
    expect(service).toBeTruthy();
  });
});
