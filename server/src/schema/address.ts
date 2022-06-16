import { z, object, string } from 'zod';

export const AddressTemplateSchema = object({
  id: z.string(),
  
});

export const createAddressTemplateSchema = object({
  body: object({
    name: z.string({
      required_error: 'Please provide a name for the template',
    }),
    subject: z.string({
      required_error: 'Please provide a title for the template',
    }),
    content: z
      .string({
        required_error: 'Please provide a a content for the Address',
      })
      .min(20),
  }),
});
export const getAddressTemplateSchema = object({
  params: object({
    id: string(),
  }),
});

export type AddressTemplateInterface = z.infer<typeof AddressTemplateSchema>;

export type CreateAddressTemplateInput = z.infer<
  typeof createAddressTemplateSchema
>['body'];
