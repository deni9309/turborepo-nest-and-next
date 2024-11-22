'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CreateProductSchema } from '@/schemas'

const CreateProductForm = () => {
  const form = useForm<z.infer<typeof CreateProductSchema>>({
    resolver: zodResolver(CreateProductSchema),
    defaultValues: {
      name: '',
      description: '',
      price: '',
    },
  })

  function onSubmit(values: z.infer<typeof CreateProductSchema>) {
    console.log(values)
  }

  return (
    <div className='px-4 flex flex-col mx-auto items-center w-full lg:max-w-[600px] sm:max-w-[500px] max-sm:max-w-[400px] bg-blue-50/40 rounded-xl shadow-md'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 py-6 w-full'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='required-field'>Product Name</FormLabel>
                <FormControl>
                  <Input placeholder='eg. V-neck T-Shirt' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='price'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='required-field'>Price</FormLabel>
                <FormControl>
                  <Input type='number' placeholder='0' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Description <span className='text-muted-foreground'>(optional)</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Tell us about your product...'
                    className='resize-y'
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  You can descripbe your product here. It will be visible to other users.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant={'outline'} type='submit'>
            Save
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default CreateProductForm
