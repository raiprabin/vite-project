import { cn } from '../../utils/helpers/ui.helper';

type ButtonSize = 'small' | 'medium' | 'large' | 'xlarge';
export type ButtonVariant =
  | 'solid'
  | 'outline'
  | 'warning'
  | 'disabled'
  | 'green'
  | 'danger'
  | 'border'
  | 'white'
  | 'hidden';

const buttonBaseClasses =
  'gap-x-2 inline-flex items-center font-semibold transition-colors ease-in-out delay-150 duration-300 focus-visible:outline-none';

const buttonSizeClasses: Record<ButtonSize, string> = {
  small: 'px-4 py-2 text-sm rounded min-h-[38px] small leading-none',
  large: 'px-4 py-4 text-sm rounded min-h-[56px] large leading-none',
  xlarge: 'px-14 py-4 text-sm rounded min-h-[56px] large leading-none',
  medium: 'px-3 py-3 text-base rounded medium leading-none',
};

const buttonVariantClasses: Record<ButtonVariant, string> = {
  solid: 'bg-primary-700 text-danger-0 hover:bg-primary-600',
  green: 'bg-success-500 text-danger-0 hover:bg-success-600',
  danger: 'bg-danger-500 text-danger-0 hover:bg-danger-600',
  border:
    'bg-danger-0 text-primary-700 hover:bg-primary-300 border border-primary-700',
  white: 'bg-danger-0 text-black hover:bg-accent-300',
  disabled:
    'bg-neutral-100 text-neutral-200 pointer-not-allowed hover:cursor-not-allowed pointer-events-none',
  outline:
    'border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-danger-0',
  warning: 'bg-danger-500 text-danger-0 hover:bg-danger-600 ',
  hidden: 'visibility: hidden',
};

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  iconStyles?: string;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'small',
  variant = 'solid',
  icon,
  iconStyles,
  isDisabled = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        buttonBaseClasses,
        buttonSizeClasses[size],
        buttonVariantClasses[variant],
        props.className,
      )}
    >
      {icon && <i className={iconStyles}>{icon}</i>}
      {children}
    </button>
  );
};

export default Button;
