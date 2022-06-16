import { z, object, string } from 'zod';

export const CustomerTemplateSchema = object({
  id: z.string(),
});

export const createCustomerTemplateSchema = object({
  body: object({
    name: z.string({
      required_error: 'Please provide a name for the template',
    }),
    subject: z.string({
      required_error: 'Please provide a title for the template',
    }),
    content: z
      .string({ required_error: 'Please provide a a content for the Customer' })
      .min(20),
  }),
});
export const getCustomerTemplateSchema = object({
  params: object({
    id: string(),
  }),
});
export const getCustomerTemplateSchemaByName = object({
  params: object({
    name: string(),
  }),
});

export type getCustomerTemplateInput = z.infer<
  typeof getCustomerTemplateSchema
>['params'];

export type CustomerTemplateInterface = z.infer<typeof CustomerTemplateSchema>;

export type CreateCustomerTemplateInput = z.infer<
  typeof createCustomerTemplateSchema
>['body'];
