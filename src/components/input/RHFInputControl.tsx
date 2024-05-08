import {
  forwardRef,
  type DetailedHTMLProps,
  type FC,
  type InputHTMLAttributes,
} from 'react';
import { cn } from '../../utils/helpers/ui.helper';

type InputSize = 'small' | 'medium' | 'large';
export type InputVariant = 'normal' | 'warning' | 'disabled';

const inputBaseClasses =
  'relative inline-flex w-full rounded leading-none transition-colors ease-in-out placeholder-gray-500 text-gray-700 border hover:border-blue-400 focus:outline-none  min-h-[48px]';

const inputSizeClasses: Record<InputSize, string> = {
  small: 'py-1 px-2 text-sm',
  medium: 'py-2 px-4 text-base',
  large: 'py-3 px-6 text-lg',
};

const inputVariantClasses: Record<InputVariant, string> = {
  normal: 'border-neutral-100',
  disabled: 'border-gray-300 bg-gray-50 text-gray-500',
  warning: 'border-danger-400 bg-yellow-50 text-yellow-400',
};

interface RHFInputProps extends React.ComponentPropsWithRef<'input'> {
  id: string;
  name: string;
  label?: string;
  requirement?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  variant?: InputVariant;
  body?: InputSize;
  className?: string;
  labelClass?: string;
}

export const RHFInputControl = forwardRef<HTMLInputElement, RHFInputProps>(
  (
    {
      id,
      name,
      label,
      requirement = false,
      variant = 'normal',
      body = 'medium',
      hasError = false,
      errorMessage,
      className = '',
      placeholder,
      type,
      labelClass,
      ...props
    },
    ref,
  ) => {
    return (
      // <div className={`input-field w-full`}>
      <div className={`input-field`}>
        {label && (
          <label
            className={`block text-xs font-semibold mb-2 capitalize ${
              labelClass ? labelClass : ''
            }`}
          >
            {label}{' '}
            {requirement && (
              <span className="requirement text-[#FF4A3D] mb-1 font-light">
                *
              </span>
            )}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          name={name}
          type={type}
          aria-label={label}
          placeholder={placeholder}
          className={cn(
            inputBaseClasses,
            inputSizeClasses[body],
            inputVariantClasses[variant],
            className,
            hasError && 'border-danger-500 border-2',
          )}
          {...props}
        />
        {hasError && errorMessage && (
          <p className="error-message mt-2 text-danger-500 before:inline before:text-danger-500 before:content-['⚠']">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);
