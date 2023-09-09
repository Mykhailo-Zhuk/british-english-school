'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import useHttp from '@/hooks/useHttp';
import { useEffect, useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Skeleton } from '../ui/skeleton';

const filter = z.object({
  type: z.enum([
    'level',
    'speaking',
    'intensive',
    'grammar',
    'exams_ielts',
    'exams_toefl',
    'business',
    'law',
  ]),
  format: z.array(z.string()),
  programs: z.array(z.string()),
  time: z.array(z.string()),
  teacher: z.array(z.string()),
});

const FormSchema = filter.partial();

const RadioFormItem = ({ filter }) => {
  const { label, value } = filter;
  return (
    <FormItem className="flex items-center space-x-3 space-y-0">
      <FormControl>
        <RadioGroupItem value={value} />
      </FormControl>
      <FormLabel className="font-normal">{label}</FormLabel>
    </FormItem>
  );
};
const FilterForm = () => {
  const [isOpenType, setIsOpenType] = useState(true);
  const [isOpenProgram, setIsOpenProgram] = useState(true);
  const [isOpenFormat, setIsOpenFormat] = useState(true);
  const [isOpenTime, setIsOpenTime] = useState(true);
  const [isOpenTeacher, setIsOpenTeacher] = useState(true);
  const [adultList, setAdultList] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();

  useEffect(() => {
    sendRequest({ url: 'courses/adult' }, setAdultList.bind(null));
  }, []);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      programs: [],
      format: [],
      time: [],
      teacher: [],
    },
  });

  const onSubmit = (data) => {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  if (error) return <p className="w-[350px] text-base text-center">{error}</p>;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Types */}
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <Collapsible
                open={isOpenType}
                onOpenChange={setIsOpenType}
                className="w-[350px] space-y-2">
                <div className="flex items-center justify-between space-x-4 px-1">
                  <FormLabel>Тип курса</FormLabel>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <CaretSortIcon className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1">
                      {isLoading
                        ? Array.from({ length: 8 }, (_, i) => i + 1).map((_, id) => {
                            return <Skeleton key={id} className="h-4 w-3/5"></Skeleton>;
                          })
                        : adultList?.filter?.type?.map((filter, index) => {
                            return <RadioFormItem key={index} filter={filter} />;
                          })}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </CollapsibleContent>
              </Collapsible>
            </FormItem>
          )}
        />
        {/* Programs */}
        <FormField
          control={form.control}
          name="programs"
          render={() => (
            <FormItem>
              <Collapsible
                open={isOpenProgram}
                onOpenChange={setIsOpenProgram}
                className="w-[350px] space-y-2">
                <div className="flex items-center justify-between space-x-4 px-1 mb-4">
                  <FormLabel className="text-base">Програма курсу</FormLabel>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <CaretSortIcon className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2">
                  {isLoading
                    ? Array.from({ length: 7 }, (_, i) => i + 1).map((_, id) => {
                        return <Skeleton key={id} className="h-4 w-3/5"></Skeleton>;
                      })
                    : adultList?.filter?.program?.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="programs"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, item.id])
                                        : field.onChange(
                                            field.value?.filter((value) => value !== item.id),
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">{item.label}</FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}

                  <FormMessage />
                </CollapsibleContent>
              </Collapsible>
            </FormItem>
          )}
        />
        {/* Format */}
        <FormField
          control={form.control}
          name="format"
          render={() => (
            <FormItem>
              <Collapsible
                open={isOpenFormat}
                onOpenChange={setIsOpenFormat}
                className="w-[350px] space-y-2">
                <div className="flex items-center justify-between space-x-4 px-1 mb-4">
                  <FormLabel className="text-base">Місце проведення</FormLabel>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <CaretSortIcon className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2">
                  {isLoading
                    ? Array.from({ length: 2 }, (_, i) => i + 1).map((_, id) => {
                        return <Skeleton key={id} className="h-4 w-1/4"></Skeleton>;
                      })
                    : adultList?.filter?.format?.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="format"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, item.id])
                                        : field.onChange(
                                            field.value?.filter((value) => value !== item.id),
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">{item.label}</FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}

                  <FormMessage />
                </CollapsibleContent>
              </Collapsible>
            </FormItem>
          )}
        />
        {/* Time of the lesson */}
        <FormField
          control={form.control}
          name="time"
          render={() => (
            <FormItem>
              <Collapsible
                open={isOpenTime}
                onOpenChange={setIsOpenTime}
                className="w-[350px] space-y-2">
                <div className="flex items-center justify-between space-x-4 px-1 mb-4">
                  <FormLabel className="text-base">Час занять</FormLabel>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <CaretSortIcon className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2">
                  {isLoading
                    ? Array.from({ length: 2 }, (_, i) => i + 1).map((_, id) => {
                        return <Skeleton key={id} className="h-4 w-1/3"></Skeleton>;
                      })
                    : adultList?.filter?.time?.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="time"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, item.id])
                                        : field.onChange(
                                            field.value?.filter((value) => value !== item.id),
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">{item.label}</FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                  <FormMessage />
                </CollapsibleContent>
              </Collapsible>
            </FormItem>
          )}
        />
        {/* Time of the lesson */}
        <FormField
          control={form.control}
          name="teacher"
          render={() => (
            <FormItem>
              <Collapsible
                open={isOpenTeacher}
                onOpenChange={setIsOpenTeacher}
                className="w-[350px] space-y-2">
                <div className="flex items-center justify-between space-x-4 px-1 mb-4">
                  <FormLabel className="text-base">Викладач</FormLabel>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <CaretSortIcon className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2">
                  {isLoading
                    ? Array.from({ length: 6 }, (_, i) => i + 1).map((_, id) => {
                        return <Skeleton key={id} className="h-4 w-1/3"></Skeleton>;
                      })
                    : adultList?.filter?.teacher?.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="teacher"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, item.id])
                                        : field.onChange(
                                            field.value?.filter((value) => value !== item.id),
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">{item.label}</FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                  <FormMessage />
                </CollapsibleContent>
              </Collapsible>
            </FormItem>
          )}
        />
        <Button type="submit">Пошук</Button>
        <Button variant="link" onClick={() => form.reset()}>
          Скинути фільтри
        </Button>
      </form>
    </Form>
  );
};

export default FilterForm;
