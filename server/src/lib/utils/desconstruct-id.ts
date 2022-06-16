const { BadRequest } = require('@feathersjs/errors');

export default function deconstructId(token) {
  if (!token.includes('___')) {
    throw new BadRequest('Token is not in the correct format.', {
      errors: { $className: 'badParams' },
    });
  }

  return token.slice(0, token.indexOf('___'));
}
