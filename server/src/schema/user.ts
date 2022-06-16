import { z, object, string, TypeOf, number, boolean, date } from 'zod';

export const createUserSchema = object({
  body: object({
    firstName: string({
      required_error: 'Please provide a first name',
    }),
    lastName: string({
      required_error: 'Please provide a last name',
    }),
    email: string({
      required_error: 'You must provide a valid email address',
    }).email('The email address you provided is not a valid email'),
    password: string({
      required_error: 'You must provide a valid password',
    }).min(6, 'Password is too short - should be min 6 characters'),
    passwordConfirmation: string({
      required_error: 'Password confirmation is required',
    }),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation'],
  }),
});

export const UserSchema = z.object({
  id: string(),

  about: string(),

  admin: boolean(),

  active: boolean(),

  avatar: string(),

  birthday: string(),
  
  activationKey: string(),

  backgroundImage: string(),

  backgroundImageStatus: boolean(),

  coverPicture: string(),

  firstName: string(),

  gender: string(),

  lastSeen: date(),

  lastName: string(),

  loginAttempts: number(),

  lastSeenPrivacy: boolean(),

  online: boolean(),

  password: string(),

  profilePicture: string(),

  resetExpires: date(),

  resetAttempts: number(),

  resetPasswordKey: string(),

  resetShortPasswordKey: string(),

  search_vector: string(),

  username: string(),
});

export const verifyUserSchema = object({
  params: object({
    id: string(),
    activationKey: string(),
  }),
});

export const forgotPasswordSchema = object({
  body: object({
    email: string({
      required_error: 'Email is required',
    }).email('Not a valid email'),
  }),
});

export const resetPasswordSchema = object({
  params: object({
    id: string(),
    resetPasswordKey: string(),
  }),
  body: object({
    password: string({
      required_error: 'Password is required',
    }).min(6, 'Password is too short - should be min 6 chars'),
    passwordConfirmation: string({
      required_error: 'Password confirmation is required',
    }),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation'],
  }),
});
export type UserInterface = z.infer<typeof UserSchema>;
export type ResetPasswordInput = TypeOf<typeof resetPasswordSchema>;
export type CreateUserInput = TypeOf<typeof createUserSchema>;
export type VerifyUserInput = TypeOf<typeof verifyUserSchema>['params'];
export type ForgotPasswordInput = TypeOf<typeof forgotPasswordSchema>['body'];
