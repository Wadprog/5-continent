export default async (context) => {
  const { app, data } = context;

  const loginDetails = await app.service('authentication').create({
    strategy: 'local',
    username: data.username,
    password: data.passwordConfirmation,
  });

  Object.keys(loginDetails).forEach((key) => {
    if (key !== 'User') context.result[key] = loginDetails[key];
  });

  return context;
};
