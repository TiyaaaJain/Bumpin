'use client';

import { useForm } from 'react-hook-form';
import { FormInput } from '@/components/forms/FormInput';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // In a real application, you would send this to your API
    console.log('Contact form data:', data);
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center">
          <span className="gradient-text">Contact Us</span>
        </h1>
        
        <div className="bg-black/30 p-8 rounded-xl shadow-lg">
          <p className="text-gray-300 mb-8 text-center">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormInput
              label="Name"
              name="name"
              register={register}
              required
              error={errors.name?.message}
            />

            <FormInput
              label="Email"
              name="email"
              type="email"
              register={register}
              required
              error={errors.email?.message}
            />

            <FormInput
              label="Subject"
              name="subject"
              register={register}
              required
              error={errors.subject?.message}
            />

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-200 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                id="message"
                rows={5}
                className="w-full px-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full primary-button mt-8"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
