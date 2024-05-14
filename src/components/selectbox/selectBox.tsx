import {
  forwardRef,
  type DetailedHTMLProps,
  type FC,
  type InputHTMLAttributes,
} from "react";
// import { Select } from "@headlessui/react";
import { cn } from "@/utils/helpers/ui.helper";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type InputSize = "small" | "medium" | "large";
export type InputVariant = "normal" | "warning" | "disabled";

export const inputBaseClasses =
  "relative inline-flex w-full rounded-lg leading-none ease-in-out focus:ring-0 border min-h-[48px] ";

const inputSizeClasses: Record<InputSize, string> = {
  small: "py-1 px-2 text-sm",
  medium: "py-2 px-4 text-base",
  large: "py-3 px-6 text-lg",
};

const inputVariantClasses: Record<InputVariant, string> = {
  normal: "border-neutral-100 bg-white-50",
  disabled: "border-gray-300 bg-gray-50 text-gray-500",
  warning: "border-danger-400 bg-yellow-50 text-yellow-400",
};

export type SELECTInputProps = {
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
  isEmpty?: boolean;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "ref"
>;

export const SELECTInput: FC<SELECTInputProps> = forwardRef<
  HTMLInputElement,
  SELECTInputProps
>(
  ({
    id,
    name,
    label,
    requirement = false,
    variant = "normal",
    size = "medium",
    hasError = false,
    className = "",
    placeholder,
    labelClass,
    
  }) => {
    return (
      <div className={`input-field relative overflow-x-clip`}>
        {label && (
          <label
            className={`block text-xs font-semibold mb-2 capitalize ${
              labelClass ? labelClass : ""
            }`}
          >
            {label}{" "}
            {requirement && (
              <span className="requirement text-[#FF4A3D] mb-1 font-light">
                *
              </span>
            )}
          </label>
        )}
        <Select>
          <SelectTrigger
            className={cn(
              inputBaseClasses,
              inputSizeClasses[size],
              inputVariantClasses[variant],
              className,
              hasError && "border-danger-500 border-2"
            )}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent
            className={cn(inputVariantClasses[variant], className)}
          >
            <SelectGroup>
              {/* <SelectLabel>Fruits</SelectLabel> */}
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* </div> */}
      </div>
    );
  }
);
