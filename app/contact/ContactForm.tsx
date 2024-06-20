'use client'
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import { MessageCircle } from 'lucide-react';
import Animateslide from '@/components/animation/Animateslide';

type Props = {};

const ContactForm = (props: Props) => {
  const messageTypes = [
    { id: 1, name: 'General Info' },
    { id: 2, name: 'Project Inquiry' },
    { id: 3, name: 'Investment Opportunities' },
    { id: 4, name: 'Job Opportunities' },
  ];

  const [selectedId, setSelectedId] = useState<number | null>(1);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState<string | null>('General Info');
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !message) {
      toast.error("Please fill the form before submitting.");
      return;
    }

    toast.success("Your Message has been Received!");

    const data = {
      name: name,
      email: email,
      messageType: category,
      message: message,
    };

    console.log(data);

    setName("");
    setEmail("");
    setMessage("");
    setCategory('General Info');
  };

  const handleBadgeClick = (id: number) => {
    const selectedCategory = messageTypes.find(type => type.id === id)?.name || 'General Info';
    setCategory(selectedCategory);
    setSelectedId(id);
  };

  return (
    <div className='h-full w-full lg:px-24 flex justify-center items-center'>
      <Animateslide delay={0.5} side='left'>
        <Card className='w-full h-fit p-4 lg:p-6 bg-black/5 dark:bg-white/10'>
          <form action='https://getform.io/f/lajkpdrb' method='POST' className='flex flex-col gap-6'>
            <h2 className='text-sm'>Fill in the Form</h2>
            <div className='flex flex-col gap-3'>
              <Animateslide delay={0.4} side='up'>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-sm font-semibold'>Full name</h2>
                  <Input
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </Animateslide>
              <Animateslide delay={0.6} side='up'>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-sm font-semibold'>Email Address</h2>
                  <Input
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </Animateslide>
            </div>
            <h2 className='text-sm font-semibold'>Message Type</h2>
            <Input type="hidden" name="messageType" value={category || ''} />

            <div className='flex gap-1 w-full flex-wrap'>
              {messageTypes.map((type) => (
                <Animateslide key={type.id} delay={0.1 * type.id} side='up'>
                  <div
                    onClick={() => handleBadgeClick(type.id)}
                    className={`cursor-pointer p-2 rounded-md text-sm border-2 border-transparent hover:border-primary dark:hover:border-white
                      ${selectedId === type.id ? 'text-white font-semibold dark:text-white bg-primary dark:bg-transparent border-black/40 dark:border-white' : 'text-black/50 dark:text-white/50'}  
                    `}>
                    {type.name}
                  </div>
                </Animateslide>
              ))}
            </div>
            <div className='flex flex-col gap-3'>
              <Animateslide delay={1} side='up'>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-semibold'>Message</h2>
                  <Textarea
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </Animateslide>
              <div>
                <Button type='submit' className="flex gap-4 p-3 cursor-pointer w-fit dark:hover:bg-primary dark:hover:text-white duration-300 ease-in-out hover:bg-black dark:bg-white/80 dark:text-primary bg-primary text-white items-center">
                  Send Message
                </Button>
              </div>
            </div>
          </form>
        </Card>
      </Animateslide>
    </div>
  );
};

export default ContactForm;
