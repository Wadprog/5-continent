import { z, object, string } from 'zod';

export const DistrictTemplateSchema = object({
  id: z.string(),

  name: string(),
});

export const createDistrictTemplateSchema = object({
  body: object({
    name: z.string({
      required_error: 'Please provide a name for the template',
    }),
    subject: z.string({
      required_error: 'Please provide a title for the template',
    }),
    content: z
      .string({
        required_error: 'Please provide a a content for the District',
      })
      .min(20),
  }),
});
export const getDistrictTemplateSchema = object({
  params: object({
    id: string(),
  }),
});

export type DistrictTemplateInterface = z.infer<typeof DistrictTemplateSchema>;

export type CreateDistrictTemplateInput = z.infer<
  typeof createDistrictTemplateSchema
>['body'];
