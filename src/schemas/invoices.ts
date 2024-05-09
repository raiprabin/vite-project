import { SpecialCharsRegex } from "@/utils/constants/regex";
import { z } from "zod";

export const CreateAInvoiceValidationSchema = z.object({
    invoiceId:  z
    .string()
    .trim()
    .min(1, { message: ' Invoice Id is required *' }),
    customer: z.string().trim().min(1, { message: 'Customer is required *' }),
    panNumber: z.string().min(1, { message: 'Pan number is required' }).regex(SpecialCharsRegex, {
        message: " Username can't contain any special characters",
      }),
    orderNumber:z.string().min(1, { message: 'Order number is required' }).regex(SpecialCharsRegex, {
        message: " Username can't contain any special characters",
      }),
    invoiceDate: z.date({
        required_error: "Please select a invoice date",
        invalid_type_error: "That's not a date!",
      }),
    dueDate:z.date({
        required_error: "Please select a due date",
        invalid_type_error: "That's not a date!",
      }),
    paymentTerm: z.string().trim().min(1, { message: 'Please select a payment term' }),

  });
  export type TCreateAInvoiceValidation = z.infer<
    typeof CreateAInvoiceValidationSchema
  >;