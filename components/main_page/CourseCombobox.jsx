'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToast } from '@/components/ui/use-toast';
import { useTranslations } from 'next-intl';

const CourseCombobox = () => {
  const { toast } = useToast();
  const router = useRouter();
  const t = useTranslations('top_choose_group');

  const groups = [
    { label: t('english_for_adult'), value: 'adult' },
    { label: t('english_for_teenagers'), value: 'teenagers' },
    { label: t('english_for_kids'), value: 'kids' },
  ];

  const FormSchema = z.object({
    group: z.string({
      required_error: t('choose_group'),
    }),
  });

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data) {
    const selectedGroup = groups.find((group) => group.value === data.group);
    if (selectedGroup) {
      toast({
        title: t('notification'),
        description: (
          <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <p className="text-white">{selectedGroup.label}</p>
          </div>
        ),
      });

      router.push(`${selectedGroup.value}`);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="lg:space-x-6 space-y-6 lg:space-y-0 flex flex-col p-5 lg:flex-row">
        <FormField
          control={form.control}
          name="group"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        'w-full md:w-[318px] p-2 h-[60px] justify-between',
                        !field.value && 'text-muted-foreground',
                      )}>
                      {field.value
                        ? groups.find((group) => group.value === field.value)?.label
                        : t('choose_group')}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-9/12 md:w-[318px] p-1">
                  <Command>
                    <CommandInput placeholder={t('search_group')} className="h-9" />
                    <CommandEmpty>{t('no_group')}</CommandEmpty>
                    <CommandGroup>
                      {groups.map((group) => (
                        <CommandItem
                          value={group.label}
                          key={group.value}
                          onSelect={() => {
                            form.setValue('group', group.value);
                          }}>
                          {group.label}
                          <CheckIcon
                            className={cn(
                              'ml-auto h-4 w-4',
                              group.value === field.value ? 'opacity-100' : 'opacity-0',
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full min-w-[175px] dark:bg-slate-800 max-w-[318px] py-3 h-[60px] text-base dark:text-slate-400">
          {t('pick_group')}
        </Button>
      </form>
    </Form>
  );
};

export default CourseCombobox;
