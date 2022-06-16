import { z, object, string, number } from 'zod';

export const DepartmentTemplateSchema = object({
  id: z.string(),
  startingSalary: number(),
  topSalary: number(),
  name: string(),
});

export const createDepartmentTemplateSchema = object({
  body: object({
    name: z.string({
      required_error: 'Please provide a name for the template',
    }),
    subject: z.string({
      required_error: 'Please provide a title for the template',
    }),
    content: z
      .string({ required_error: 'Please provide a a content for the Department' })
      .min(20),
  }),
});
export const getDepartmentTemplateSchema = object({
  params: object({
    id: string(),
  }),
});

export type DepartmentTemplateInterface = z.infer<typeof DepartmentTemplateSchema>;

export type CreateDepartmentTemplateInput = z.infer<
  typeof createDepartmentTemplateSchema
>['body'];
