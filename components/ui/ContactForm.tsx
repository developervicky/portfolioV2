"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./textarea";
import { useState } from "react";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Enter your name please.",
  }),
  email: z
    .string()
    .min(1, { message: "Email required." })
    .email({ message: "Invalid Email." }),

  message: z.string().min(1, { message: "Type out your message." }),
});

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const data = await axios.post("/api/sendemail", values);
      form.resetField("email");
      form.resetField("message");
      form.resetField("name");
      if (data.status === 200) {
        toast.success(data.data);
      } else {
        toast(data.data);
      }
    } catch (error) {
      console.log(error);
      // @ts-ignore
      toast.error(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="pointer-events-auto mt-8 w-full space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">Name</FormLabel>
              <FormControl className="w-full text-xl">
                <Input disabled={loading} placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">Email</FormLabel>
              <FormControl className="w-full text-xl">
                <Input disabled={loading} placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">Message</FormLabel>
              <FormControl className="w-full text-xl">
                <Textarea
                  disabled={loading}
                  placeholder="Type out your message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={loading}
          className="border-[2px] border-slate-400 bg-[#F4F3DE] px-8  text-xl text-slate-900 hover:bg-ownbg"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
