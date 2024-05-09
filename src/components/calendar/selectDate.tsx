import {
  forwardRef,
  type DetailedHTMLProps,
  type FC,
  type InputHTMLAttributes,
} from "react";
// import { Select } from "@headlessui/react";
import { cn } from "@/utils/helpers/ui.helper";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { CalendarIcon } from "lucide-react";
type InputSize = "small" | "medium" | "large";
export type InputVariant = "normal" | "warning" | "disabled";

export const inputBaseClasses =
  "relative inline-flex w-full rounded-lg leading-none ease-in-out focus:text-neutral-900 placeholder-neutral-300 border min-h-[48px]";

const inputSizeClasses: Record<InputSize, string> = {
  small: "py-1 px-2 text-sm",
  medium: "py-2 px-4 text-base",
  large: "py-3 px-6 text-lg",
};

const inputVariantClasses: Record<InputVariant, string> = {
  normal: "border-neutral-100 bg-white-50 w-full",
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

export const DateInput: FC<SELECTInputProps> = forwardRef<
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
    className = "bg-red-500",
    placeholder,
    labelClass,
  }) => {
    const [date, setDate] = React.useState<Date>();

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
        <Popover>
          <PopoverTrigger 
          className={cn(
              inputBaseClasses,
              inputSizeClasses[size],
              inputVariantClasses[variant],
              className,
              hasError && "border-danger-500 border-2"
            )} 
            asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className={cn(inputVariantClasses[variant], className)} align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              
            />
          </PopoverContent>
        </Popover>

        {/* </div> */}
      </div>
    );
  }
);
