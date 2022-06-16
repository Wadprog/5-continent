import { z, object, string } from 'zod';

export const CountryTemplateSchema = object({
  id: z.string(),
  name: string(),
  initials: string(),
});

export const createCountryTemplateSchema = object({
  body: object({
    name: z.string({
      required_error: 'Please provide a name for the template',
    }),
    subject: z.string({
      required_error: 'Please provide a title for the template',
    }),
    content: z
      .string({
        required_error: 'Please provide a a content for the Country',
      })
      .min(20),
  }),
});
export const getCountryTemplateSchema = object({
  params: object({
    id: string(),
  }),
});

export type CountryTemplateInterface = z.infer<typeof CountryTemplateSchema>;

export type CreateCountryTemplateInput = z.infer<
  typeof createCountryTemplateSchema
>['body'];
