import { z, object, string, number } from 'zod';

export const RoleTemplateSchema = object({
  id: z.string(),
  startingSalary: number(),
  topSalary: number(),
  name: string(),
});

export const createRoleTemplateSchema = object({
  body: object({
    name: z.string({
      required_error: 'Please provide a name for the template',
    }),
    subject: z.string({
      required_error: 'Please provide a title for the template',
    }),
    content: z
      .string({ required_error: 'Please provide a a content for the Role' })
      .min(20),
  }),
});
export const getRoleTemplateSchema = object({
  params: object({
    id: string(),
  }),
});

export type RoleTemplateInterface = z.infer<typeof RoleTemplateSchema>;

export type CreateRoleTemplateInput = z.infer<
  typeof createRoleTemplateSchema
>['body'];
