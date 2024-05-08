import { z } from "zod";

export const TicketsStatusEnumSchema = z.enum([
    'invoiced',
    'draft',
  ]);
  export type TTicketsStatus = z.infer<typeof TicketsStatusEnumSchema>;