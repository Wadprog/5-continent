import { z, object, string } from 'zod';

export const StateTemplateSchema = object({
  id: z.string(),
  name: string(),
  initials: string(),
});

export const createStateTemplateSchema = object({
  body: object({
    name: z.string({
      required_error: 'Please provide a name for the template',
    }),
    subject: z.string({
      required_error: 'Please provide a title for the template',
    }),
    content: z
      .string({
        required_error: 'Please provide a a content for the State',
      })
      .min(20),
  }),
});
export const getStateTemplateSchema = object({
  params: object({
    id: string(),
  }),
});

export type StateTemplateInterface = z.infer<typeof StateTemplateSchema>;

export type CreateStateTemplateInput = z.infer<
  typeof createStateTemplateSchema
>['body'];
