import { z, object, string } from 'zod';

export const StreetTemplateSchema = object({
  id: string(),

  zipCode: string(),

  type: string(),

  name: string(),
});

export const createStreetTemplateSchema = object({
  body: object({
    name: z.string({
      required_error: 'Please provide a name for the template',
    }),
    subject: z.string({
      required_error: 'Please provide a title for the template',
    }),
    content: z
      .string({ required_error: 'Please provide a a content for the Street' })
      .min(20),
  }),
});
export const getStreetTemplateSchema = object({
  params: object({
    id: string(),
  }),
});
export const getStreetTemplateSchemaByName = object({
  params: object({
    name: string(),
  }),
});

export type getStreetTemplateInput = z.infer<
  typeof getStreetTemplateSchema
>['params'];

export type StreetTemplateInterface = z.infer<typeof StreetTemplateSchema>;

export type CreateStreetTemplateInput = z.infer<
  typeof createStreetTemplateSchema
>['body'];
