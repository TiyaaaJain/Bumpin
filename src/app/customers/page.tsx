'use client';

import { useForm } from 'react-hook-form';
import { FormInput } from '@/components/forms/FormInput';

interface CustomerFormData {
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  businessType: string;
  location: string;
  website: string;
}

export default function CustomersPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerFormData>();

  const onSubmit = async (data: CustomerFormData) => {
    try {
      const response = await fetch('/api/register-customer', {
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
          <span className="gradient-text">Register Your Business</span>
        </h1>
        
        <div className="bg-black/30 p-8 rounded-xl shadow-lg">
          <p className="text-gray-300 mb-8 text-center">
            Connect with local influencers to promote your business and reach new customers.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormInput
              label="Business Name"
              name="businessName"
              register={register}
              required
              error={errors.businessName?.message}
            />

            <FormInput
              label="Owner Name"
              name="ownerName"
              register={register}
              required
              error={errors.ownerName?.message}
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
              label="Business Type"
              name="businessType"
              placeholder="e.g., Café, Shop, Restaurant"
              register={register}
              required
              error={errors.businessType?.message}
            />

            <FormInput
              label="Location"
              name="location"
              placeholder="City, State"
              register={register}
              required
              error={errors.location?.message}
            />

            <FormInput
              label="Website"
              name="website"
              type="url"
              placeholder="https://"
              register={register}
              error={errors.website?.message}
            />

            <button
              type="submit"
              className="w-full primary-button mt-8"
            >
              Register Business
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
