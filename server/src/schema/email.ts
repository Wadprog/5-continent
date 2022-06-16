import { z, object, string } from 'zod';

export const EmailTemplateSchema = object({
  id: z.string(),
  value: string(),
  isPreferred: z.boolean(),
});

export const createEmailTemplateSchema = object({
  body: object({
    name: z.string({
      required_error: 'Please provide a name for the template',
    }),
    subject: z.string({
      required_error: 'Please provide a title for the template',
    }),
    content: z
      .string({ required_error: 'Please provide a a content for the Email' })
      .min(20),
  }),
});
export const getEmailTemplateSchema = object({
  params: object({
    id: string(),
  }),
});
export const getEmailTemplateSchemaByName = object({
  params: object({
    name: string(),
  }),
});

export type getEmailTemplateInput = z.infer<
  typeof getEmailTemplateSchema
>['params'];

export type EmailTemplateInterface = z.infer<typeof EmailTemplateSchema>;

export type CreateEmailTemplateInput = z.infer<
  typeof createEmailTemplateSchema
>['body'];
