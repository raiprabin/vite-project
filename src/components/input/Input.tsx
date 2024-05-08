import type { ReactNode } from 'react';
import React, { useRef } from 'react';
import { CancelIcon } from '../icon'
import { cn } from '../../utils/helpers/ui.helper';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  name: string;
  label?: string;
  icon?: ReactNode;
  className?: string;
  placeHolder?: string;
  onCancel: () => void;
  labelStyles?: string;
  type?: string;
}

const Input = ({
  name,
  label,
  icon,
  className,
  placeHolder,
  onCancel,
  labelStyles,
  type,
  ...props
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      className={`${labelStyles} block text-xs font-semibold capitalize relative`}
    >
      {label && <span className="block">{label}</span>}
      {icon && icon}
      <input
        name={name}
        ref={inputRef}
        type={type}
        placeholder={placeHolder}
        className={`rounded border border-neutral-100 py-2 w-full leading-none text-base font-medium h-[40px] outline-none ${cn(
          name?.toLowerCase()?.includes('search')
            ? `${
                placeHolder?.toLowerCase()?.includes('copy')
                  ? 'pl-[32px]'
                  : 'px-[45px]'
              }`
            : 'px-4',
        )}
        ${className ? className : ''}
        `}
        {...props}
      />
      {inputRef.current?.value && (
        <span
          onClick={() => {
            onCancel();
            if (inputRef.current) {
              inputRef.current.value = '';
            }
            inputRef.current?.focus();
          }}
          className="cursor-pointer absolute top-[10px] right-5"
        >
          <CancelIcon className="pointer-events-none" />
        </span>
      )}
    </div>
  );
};

export default Input;
