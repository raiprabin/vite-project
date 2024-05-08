import type { ForwardRefRenderFunction, ReactNode } from 'react';
import React from 'react';

interface InputCustomProps {
  name: string;
  label?: string;
  icon?: ReactNode;
  className?: string;
  placeHolder?: string;
}

interface InputProps extends React.ComponentPropsWithRef<'input'> {
  props: InputCustomProps;
  ref: React.MutableRefObject<HTMLInputElement>;
}

const InputWithRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { props: { name, label, icon, className, placeHolder } },
  ref,
) => {
  return (
    <label className="block text-xs font-semibold mb-2 capitalize relative">
      {label}
      {icon}
      <input
        name={name}
        ref={ref}
        placeholder={placeHolder}
        className={`rounded border border-neutral-100 py-3 w-full leading-none text-base font-normal h-[40px] ${
          name?.toLowerCase()?.includes('search') ? 'pl-[46px] pr-4' : 'px-4'
        }
        ${className}
        `}
      />
    </label>
  );
};

const FormInput = React.forwardRef(InputWithRef);

export default FormInput;
