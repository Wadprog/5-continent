import { z, object, string } from 'zod';

export const StoreTemplateSchema = object({
  id: z.string(),
  name: string(),
});

export const createStoreTemplateSchema = object({
  body: object({
    name: z.string({
      required_error: 'Please provide a name for the template',
    }),

    content: z
      .string({
        required_error: 'Please provide a a content for the Store',
      })
      .min(20),
  }),
});

export type StoreTemplateInterface = z.infer<typeof StoreTemplateSchema>;

export type CreateStoreTemplateInput = z.infer<
  typeof createStoreTemplateSchema
>['body'];
