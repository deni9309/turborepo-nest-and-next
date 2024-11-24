'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useToast } from '@/hooks/use-toast'
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
import { CreateProductType } from '@repo/types'
import { createProduct } from '@/actions/product.actions'
import { useRouter } from 'next/navigation'

const CreateProductForm = () => {
  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<z.infer<typeof CreateProductSchema>>({
    resolver: zodResolver(CreateProductSchema),
    defaultValues: {
      name: '',
      description: '',
      price: '',
    },
  })

  async function onSubmit(values: z.infer<typeof CreateProductSchema>) {
    const validated = CreateProductSchema.safeParse(values)
    if (!validated.success) {
      return toast({
        variant: 'destructive',
        description: 'Please fill in both the product name and price.',
      })
    }

    const data: CreateProductType = {
      name: validated.data.name,
      description: validated.data?.description || '',
      price: Number(validated.data.price),
    }

    try {
      const response = await createProduct(data)
      if ('message' in response) {
        toast({ variant: 'destructive', title: response.message })
      }

      form.reset()
      toast({ title: 'Product created successfully' })
      router.push('/')
    } catch (error) {
      form.reset()
      toast({ variant: 'destructive', title: 'Error creating product' })
    }
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
