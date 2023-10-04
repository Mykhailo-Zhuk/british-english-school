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
import { useTranslations } from 'next-intl';

const ContactForm = () => {
  const t = useTranslations('choose_kids_group');

  const FormSchema = z.object({
    phoneNumber: z.string().min(9, {
      message: t('error.phoneNumber'),
    }),
    email: z
      .string()
      .email({
        message: t('error.email'),
      })
      .optional(),
  });
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data) => {
    toast({
      title: t('save'),
      description: t('callback'),
    });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="text-lg text-white bg-[#A14669] dark:bg-slate-500 dark:text-slate-400 h-16 w-52 float-left">
          {t('choose_group')}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t('leave_contacts')}</AlertDialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('phone')}</FormLabel>
                    <FormControl>
                      <Input placeholder="+380 (44) 580 33 00" {...field} />
                    </FormControl>
                    <FormDescription>{t('or')}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('email')}</FormLabel>
                    <FormControl>
                      <Input placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center">
                <AlertDialogCancel className="mx-2">{t('cancel')}</AlertDialogCancel>
                <AlertDialogAction className="mx-2" type="submit">
                  {t('send')}
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
