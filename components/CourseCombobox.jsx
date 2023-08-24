'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { useForm } from 'react-hook-form';
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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToast } from '@/components/ui/use-toast';

const groups = [
  { label: 'Англійська для дорослих', value: 'old' },
  { label: 'Англійська для юнаків', value: 'young' },
  { label: 'Англійська для дітей', value: 'child' },
];

const FormSchema = z.object({
  group: z.string({
    required_error: 'Будь ласка виберіть групу',
  }),
});

const CourseCombobox = () => {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data) {
    const selectedGroup = groups.find((group) => group.value === data.group);
    if (selectedGroup) {
      toast({
        title: 'Ви вибрали наступну групу:',
        description: (
          <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <p className="text-white">{selectedGroup.label}</p>
          </div>
        ),
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-x-6 flex">
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
                        'w-[318px] h-[60px] justify-between',
                        !field.value && 'text-muted-foreground',
                      )}>
                      {field.value
                        ? groups.find((group) => group.value === field.value)?.label
                        : 'Оберіть групу'}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[318px] p-0">
                  <Command>
                    <CommandInput placeholder="Пошук групи..." className="h-9" />
                    <CommandEmpty>Жодної групи не знайдено.</CommandEmpty>
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
        <Button type="submit" className="w-[200px] h-[60px] flex-shrink-0 text-base">
          Підібрати групу
        </Button>
      </form>
    </Form>
  );
};

export default CourseCombobox;
