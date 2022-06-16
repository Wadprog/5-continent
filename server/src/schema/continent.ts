import { z, object, string } from 'zod';

export const ContinentTemplateSchema = object({
  id: z.string(),
  name: string(),
  initials: string(),
});

export const createContinentTemplateSchema = object({
  body: object({
    name: z.string({
      required_error: 'Please provide a name for the template',
    }),
    subject: z.string({
      required_error: 'Please provide a title for the template',
    }),
    content: z
      .string({
        required_error: 'Please provide a a content for the Continent',
      })
      .min(20),
  }),
});
export const getContinentTemplateSchema = object({
  params: object({
    id: string(),
  }),
});

export type ContinentTemplateInterface = z.infer<typeof ContinentTemplateSchema>;

export type CreateContinentTemplateInput = z.infer<
  typeof createContinentTemplateSchema
>['body'];
