'use client';

import { useForm } from 'react-hook-form';
import { FormInput } from '@/components/forms/FormInput';

interface InfluencerFormData {
  name: string;
  email: string;
  phone: string;
  instagramHandle: string;
  followers: string;
}

export default function InfluencersPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InfluencerFormData>();

  const onSubmit = async (data: InfluencerFormData) => {
    try {
      const response = await fetch('/api/register-influencer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      // Handle success (you can add toast notifications later)
      alert('Registration successful!');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center">
          <span className="gradient-text">Join as an Influencer</span>
        </h1>
        
        <div className="bg-black/30 p-8 rounded-xl shadow-lg">
          <p className="text-gray-300 mb-8 text-center">
            Connect with local businesses and monetize your influence. Minimum 500 followers required.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormInput
              label="Full Name"
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
              label="Phone Number"
              name="phone"
              type="tel"
              register={register}
              required
              error={errors.phone?.message}
            />

            <FormInput
              label="Instagram Handle"
              name="instagramHandle"
              placeholder="@yourusername"
              register={register}
              required
              error={errors.instagramHandle?.message}
            />

            <FormInput
              label="Number of Followers"
              name="followers"
              type="number"
              register={register}
              required
              error={errors.followers?.message}
            />

            <button
              type="submit"
              className="w-full primary-button mt-8"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
