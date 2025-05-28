import { UseFormRegister } from 'react-hook-form';

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<any>;
  error?: string;
}

export const FormInput = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  register,
  error,
}: FormInputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-200 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...register(name, { required: required && `${label} is required` })}
        type={type}
        id={name}
        placeholder={placeholder}
        className="w-full px-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
