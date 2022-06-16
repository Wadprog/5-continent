import { z, object, string } from 'zod';

export const PhoneTemplateSchema = object({
  id: z.string(),
  number: string(),
  areaCode: string(),
  isPreferred: z.boolean(),
});

export const createPhoneTemplateSchema = object({
  body: object({
    name: z.string({
      required_error: 'Please provide a name for the template',
    }),
    subject: z.string({
      required_error: 'Please provide a title for the template',
    }),
    content: z
      .string({ required_error: 'Please provide a a content for the Phone' })
      .min(20),
  }),
});
export const getPhoneTemplateSchema = object({
  params: object({
    id: string(),
  }),
});

export type PhoneTemplateInterface = z.infer<typeof PhoneTemplateSchema>;

export type CreatePhoneTemplateInput = z.infer<
  typeof createPhoneTemplateSchema
>['body'];
