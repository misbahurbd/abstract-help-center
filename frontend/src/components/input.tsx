/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormReturn } from "react-hook-form"

interface InputProps {
  label: string
  name: string
  placeholder: string
  form: UseFormReturn<any>
  disabled: boolean
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  form,
  placeholder,
  disabled,
}) => {
  return (
    <div className="space-y-1">
      <label
        htmlFor={name}
        className="font-medium"
      >
        {label}
      </label>
      <input
        disabled={disabled}
        id={name}
        placeholder={placeholder}
        className="w-full px-2 py-1 rounded outline-none border border-gray-300"
        {...form.register(name)}
      />
      {form.formState.errors[name] && (
        <p className="text-xs text-red-500">
          {form.formState.errors[name].message?.toString()}
        </p>
      )}
    </div>
  )
}
