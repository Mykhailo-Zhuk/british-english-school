'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

const FormSchema = z.object({
  email: z.string().email({
    message: 'Введіть коректну адресу електронної пошти.',
  }),
});

const SubscribeInput = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data) => {
    toast({
      title: 'Ви підписалися на оновлення.',
      description: (
        <div className="mt-2 w-[340px] rounded-md">
          <p className="text-black text-base">Ваш email: {data.email}.</p>
        </div>
      ),
    });
    form.reset({ email: '' });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col md:flex-row space-y-4 md:space-x-4 items-center">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full sm:w-2/3">
              <Input
                {...field}
                type="email"
                id="email"
                placeholder="Введіть свій email"
                className="h-16 border-t-0 border-x-0 border-b-2 border-b-gray-400 hover:border-transparent focus-visible:outline-none focus:ring-transparent focus-visible:ring-transparent rounded-none text-white placeholder:text-gray-400"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="lg"
          className="text-sm text-white subscribe-action-btn sm:h-16 w-full sm:w-auto">
          Підписатися
        </Button>
      </form>
    </Form>
  );
};

export default SubscribeInput;
