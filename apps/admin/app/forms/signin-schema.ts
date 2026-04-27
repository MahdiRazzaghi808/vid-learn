import { z } from 'zod';

export const getSigninSchema = () => {
  return z.object({
    email: z
      .string()
      .email({ message: 'لطفاً یک آدرس ایمیل معتبر وارد کنید.' })
      .min(1, { message: 'ایمیل الزامی است.' }),
    password: z
      .string()
      .min(6, { message: 'رمز عبور باید حداقل ۶ کاراکتر باشد.' })
      .min(1, { message: 'رمز عبور الزامی است.' }),
    rememberMe: z.boolean().optional(),
  });
};

export type SigninSchemaType = z.infer<ReturnType<typeof getSigninSchema>>;