import { z, object, string } from 'zod';

export const CityTemplateSchema = object({
  id: z.string(),

  name: string(),
});

export const createCityTemplateSchema = object({
  body: object({
    name: z.string({
      required_error: 'Please provide a name for the template',
    }),
    subject: z.string({
      required_error: 'Please provide a title for the template',
    }),
    content: z
      .string({
        required_error: 'Please provide a a content for the City',
      })
      .min(20),
  }),
});
export const getCityTemplateSchema = object({
  params: object({
    id: string(),
  }),
});

export type CityTemplateInterface = z.infer<typeof CityTemplateSchema>;

export type CreateCityTemplateInput = z.infer<
  typeof createCityTemplateSchema
>['body'];
