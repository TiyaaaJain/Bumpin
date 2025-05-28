'use client';

import { useForm } from 'react-hook-form';
import { FormInput } from '@/components/forms/FormInput';

interface WorkerFormData {
  name: string;
  email: string;
  phone: string;
  role: string;
  experience: string;
  linkedinProfile: string;
  portfolio: string;
}

export default function WorkersPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WorkerFormData>();

  const onSubmit = async (data: WorkerFormData) => {
    try {
      const response = await fetch('/api/register-worker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      // Handle success
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Application submission failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center">
          <span className="gradient-text">Join Our Team</span>
        </h1>
        
        <div className="bg-black/30 p-8 rounded-xl shadow-lg">
          <p className="text-gray-300 mb-8 text-center">
            Help shape the future of local digital marketing. We're looking for talented professionals.
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
              label="Desired Role"
              name="role"
              placeholder="e.g., Content Creator, Sales Manager"
              register={register}
              required
              error={errors.role?.message}
            />

            <FormInput
              label="Years of Experience"
              name="experience"
              type="number"
              register={register}
              required
              error={errors.experience?.message}
            />

            <FormInput
              label="LinkedIn Profile"
              name="linkedinProfile"
              type="url"
              placeholder="https://linkedin.com/in/..."
              register={register}
              required
              error={errors.linkedinProfile?.message}
            />

            <FormInput
              label="Portfolio URL"
              name="portfolio"
              type="url"
              placeholder="https://"
              register={register}
              error={errors.portfolio?.message}
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
