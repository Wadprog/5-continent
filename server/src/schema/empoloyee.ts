import { z, object, string } from 'zod';

export const EmployeeTemplateSchema = object({
  id: z.string(),
});

export const createEmployeeTemplateSchema = object({
  body: object({
    name: z.string({
      required_error: 'Please provide a name for the template',
    }),
    subject: z.string({
      required_error: 'Please provide a title for the template',
    }),
    content: z
      .string({ required_error: 'Please provide a a content for the Employee' })
      .min(20),
  }),
});
export const getEmployeeTemplateSchema = object({
  params: object({
    id: string(),
  }),
});
export const getEmployeeTemplateSchemaByName = object({
  params: object({
    name: string(),
  }),
});

export type getEmployeeTemplateInput = z.infer<
  typeof getEmployeeTemplateSchema
>['params'];

export type EmployeeTemplateInterface = z.infer<typeof EmployeeTemplateSchema>;

export type CreateEmployeeTemplateInput = z.infer<
  typeof createEmployeeTemplateSchema
>['body'];
