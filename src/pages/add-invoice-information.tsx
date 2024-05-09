import { DateInput } from "@/components/calendar/selectDate";
import { RHFInput } from "@/components/input/RHFInput";
import  { SELECTInput } from "@/components/selectbox/selectBox";
import { TCreateAInvoiceValidation } from "@/schemas/invoices";
import { useFormContext } from "react-hook-form";

export const AddInvoiceInformation = ({
  isDisabled = false,
}: {
  isDisabled?: boolean;
}) => {
  const {
    register,
    formState: { errors },
    control,
    getValues,
    trigger,
    clearErrors,
    setValue,
  } = useFormContext<TCreateAInvoiceValidation>();
  return (
    <div className="bg-danger-0 rounded">
      <div className="p-6 border-b border-neutral-100">
        <section className="grid grid-cols-2 gap-y-4 gap-x-8">
          <div className={`input-field w-full col-span-2`}>
            <RHFInput
              id="invoice_id"
              label="Invoice Id"
              requirement={isDisabled ? false : true}
              placeholder="Invoice Id"
              className="capitalize"
              type="text"
              disabled={isDisabled}
              aria-disabled={isDisabled}
              hasError={!!errors.invoiceId}
              errorMessage={errors.invoiceId?.message}
              {...register('invoiceId')}
            />
          </div>
          <div className={`input-field w-full`}>
            <RHFInput
              id="pan_number"
              label="Pan Number"
              requirement={isDisabled ? false : true}
              className="capitalize"
              disabled={isDisabled}
              aria-disabled={isDisabled}
              placeholder="Enter Pan Number"
              type="number"
              hasError={!!errors.panNumber}
              errorMessage={errors.panNumber?.message}
              {...register('panNumber')}
            />
          </div>
          <div className={`input-field w-full`}>
            <RHFInput
              id="order_number"
              placeholder="Enter Order Number"
              label="Order Number"
              requirement={isDisabled ? false : true}
              type="number"
              disabled={isDisabled}
              aria-disabled={isDisabled}
              hasError={!!errors.orderNumber}
              errorMessage={errors.orderNumber?.message}
              {...register('orderNumber')}
            />
          </div>
          
          <div className={`input-field w-full col-span-2`}>
            <SELECTInput
              id="customer"
              label="Customer"
              placeholder="Select A Customer"
              requirement={isDisabled ? false : true}
              disabled={isDisabled}
              aria-disabled={isDisabled}
              hasError={!!errors.customer}
              errorMessage={errors.customer?.message}
              {...register('customer')}
            />
          </div>
          
          <div className={`input-field w-full`}>
            <DateInput
              id="invoiceDate"
              label="invoiceDate"
              placeholder="Choose Invoice Date"
              requirement={isDisabled ? false : true}
              disabled={isDisabled}
              aria-disabled={isDisabled}
              hasError={!!errors.invoiceDate}
              errorMessage={errors.invoiceDate?.message}
              {...register('invoiceDate')}
            />
          </div>
          
          </section>
          </div>
    </div>
  );
};
