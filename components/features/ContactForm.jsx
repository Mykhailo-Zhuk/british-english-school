import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

const FormSchema = z.object({
  phoneNumber: z.string().min(9, {
    message: 'Невірний формат. Використайте зразок +380 (44) 580 33 00',
  }),
  email: z
    .string()
    .email({
      message: 'Невірний формат. Використайте зразок example@gmail.com',
    })
    .optional(),
});

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data) => {
    toast({
      title: 'Ваші дані збережено',
      description: "Ми найближчим часом зв'яжемось з Вами",
    });
    console.log(data);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="text-lg text-white bg-[#A14669] h-16 w-52 float-left">
          Підібрати групу
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Залиште свої контакти</AlertDialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Телефон</FormLabel>
                    <FormControl>
                      <Input placeholder="+380 (44) 580 33 00" {...field} />
                    </FormControl>
                    <FormDescription>або</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center">
                <AlertDialogCancel className="mx-2">Скасувати</AlertDialogCancel>
                <AlertDialogAction className="mx-2" type="submit">
                  Надіслати
                </AlertDialogAction>
              </div>
            </form>
          </Form>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default ContactForm;
