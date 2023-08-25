'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormMessage, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Checkbox } from './ui/checkbox';

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Ім'я повинно мати не менше 2 символів.",
  }),
  email: z.string().email({
    message: 'Введіть коректну адресу електронної пошти.',
  }),
  phoneNumber: z.string().regex(/^\+?\d{9,15}$/, {
    message: 'Введіть коректний номер телефону.',
  }),
  message: z.string(),
  agree: z.boolean().refine((value) => value, {
    message: 'Потрібно погодитися з умовами.',
  }),
});

const InputForm = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      agree: false,
    },
  });

  const onSubmit = (data) => {
    toast({
      title: 'Збережено наступні дані:',
      description: (
        <div className="mt-2 w-[340px] rounded-md">
          <p className="text-black text-base">
            Ім'я: {data.username}, email: {data.email}, номер телефону: {data.phoneNumber},
            повідомлення: {data.message}, {data.personal}
          </p>
        </div>
      ),
    });
    form.reset({ username: '', email: '', phoneNumber: '', message: '' });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <Input placeholder="Ім'я" {...field} className="px-4 py-3" />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Input {...field} type="email" id="email" placeholder="Введіть email" />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Input {...field} type="tel" id="phoneNumber" placeholder="Введіть номер телефону" />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <textarea
                {...field}
                id="message"
                placeholder="Введіть повідомлення"
                className="border rounded p-2"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="agree"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <div className="flex space-x-2 items-center">
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                <FormLabel>Згода на обробку персональних даних</FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full text-lg">
          Залишити заявку
        </Button>
      </form>
    </Form>
  );
};

export default InputForm;
