import {
  forwardRef,
  type DetailedHTMLProps,
  type FC,
  type InputHTMLAttributes,
} from 'react';
import { cn } from '../../utils/helpers/ui.helper';

type InputSize = 'small' | 'medium' | 'large';
export type InputVariant = 'normal' | 'warning' | 'disabled';

export const inputBaseClasses =
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

export type RHFInputProps = {
  id: string;
  name: string;
  label?: string;
  requirement?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  variant?: InputVariant;
  size?: InputSize;
  className?: string;
  labelClass?: string;
  valueType?: 'currency' | 'normal';
  isEmpty?: boolean;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size' | 'ref'
>;

export const RHFInput: FC<RHFInputProps> = forwardRef<
  HTMLInputElement,
  RHFInputProps
>(
  (
    {
      id,
      name,
      label,
      requirement = false,
      variant = 'normal',
      size = 'medium',
      hasError = false,
      errorMessage,
      className = '',
      placeholder,
      valueType = 'normal',
      isEmpty = false,
      type,
      labelClass,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      // <div className={`input-field w-full`}>
      <div className={`input-field relative overflow-x-clip`}>
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
        <div
          className={`relative  ${
            valueType === 'currency' && !isEmpty ? 'inline-flex flex-wrap' : ''
          }`}
        >
          {valueType === 'currency' && !isEmpty ? (
            <span
              className={`absolute -translate-y-1/2 top-1/2 pl-4 left-0 mt-[1px] ${
                props['aria-disabled'] ? 'text-neutral-300' : 'text-neutral-500'
              } text-[14px] flex items-center pointer-events-none z-10 `}
            >
              $
            </span>
          ) : (
            ''
          )}
          <input
            id={id}
            ref={ref}
            name={name}
            type={type}
            aria-label={label}
            disabled={disabled}
            aria-disabled={props['aria-disabled']} //aria-disabled prop is used to show/hide the disabled input UI 📌
            placeholder={placeholder}
            className={cn(
              inputBaseClasses,
              inputSizeClasses[size],
              inputVariantClasses[variant],
              className,
              hasError && 'border-danger-500 border-2',
              valueType === 'currency' ? 'left-0' : '',
            )}
            {...props}
          />
        </div>
        {hasError && errorMessage && (
          <p className="error-message mt-2 text-danger-500 before:inline before:text-danger-500 before:content-['⚠']">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);
