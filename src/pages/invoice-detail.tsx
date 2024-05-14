// Invoice.tsx
import Button from "@/components/button/Button";
import React from "react";
import { Invoices } from "./invoiced-tickets";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
  total: number;
}

export interface InvoiceProps {
  items: InvoiceItem[];
  invoiceNumber: string;
  date: string;
  customerName: string;
  invoices: Invoices[];
}

const Invoice: React.FC<InvoiceProps> = ({
  items,
  invoiceNumber,
  date,
  customerName,
  invoices,
}) => {
  const calculateGrandTotal = () => {
    return items.reduce(
      (sum: any, item: { total: any }) => sum + item.total,
      0
    );
  };

  return (
    <div className="p-8 border border-gray-300 w-full max-w-2xl mx-auto">
      <div className="flex justify-between">
        <Button className="text-xl">Invoice Logo</Button>
        <h2 className="text-2xl font-bold mb-4">Invoice</h2>
        
      </div>
      <div className=" mt-20">
        <strong className="text-sm">Teddy Wholeseller</strong>
      </div>
      <div className="flex justify-between">
        <div className="mb-6">
          <p>1245545654</p>
          <p>4140 Lords Way, Humboldt</p>
          <p>Tennessee,USA</p>
        </div>
        <div className="">
          <p>Invoice ID {invoiceNumber}</p>
          <p>Invoice Date {date}</p>
          <p>Status{customerName}</p>
        </div>
      </div>

      <div className="grid mt-6 mb-4">
        <p>Name {customerName}</p>
        <p>Address {customerName}</p>
        <p>PAN {invoiceNumber}</p>
      </div>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div className="grid text-right mt-6">
        <strong className="text-lg">
          Grand Total: ${calculateGrandTotal().toFixed(2)}
        </strong>
      </div>
    </div>
  );
};

export default Invoice;
