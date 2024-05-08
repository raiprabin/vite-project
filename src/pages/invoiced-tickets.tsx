import React, { startTransition } from "react";
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
import { SearchIcon } from "@/components/icon/Search";
import Input from "@/components/input/Input";
import { useListingFilters } from "@/hooks/context/useListingFilters";
import {
  setSearchKeyword,
  goToPageOneFilter,
} from "@/store/slices/listing-filters";
import MultiBox from "@/components/MultiBox/MultiBox";
import { FilterIcon } from "@/components/icon/Filter";
export interface Invoices {
  invoice: string;
  paymentStatus: string;
  totalAmount: string;
  paymentMethod: string;
}

interface InvoicedTicketsProps {
  invoices: Invoices[];
}

const InvoicedTickets: React.FC<InvoicedTicketsProps> = ({ invoices }) => {
  const { listingFiltersCtx, setListingFiltersCtx } = useListingFilters();

  return (
    <>
      <div className="filters-wrap flex items-center justify-between flex-wrap mb-6">
        <Input
          name="Search"
          type="search"
          icon={
            <SearchIcon className="absolute top-[10.86px] left-[17.86px]" />
          }
          placeHolder="Search Invoices"
          className="w-full md:min-w-[360px] font-normal"
          onChange={(e) => {
            startTransition(() => {
              setListingFiltersCtx(
                setSearchKeyword(encodeURIComponent(e.target.value))
              );
            });
            setListingFiltersCtx(goToPageOneFilter());
          }}
          onCancel={() => setListingFiltersCtx(setSearchKeyword(""))}
        />
        {/* Filter Multibox Begins Here */}
        <MultiBox
          buttonTitle="Show Filter"
          // handleButtonTitleClick={() => {
          //   datePickerRef?.current?.closeCalendar();
          // }}
          iconStyles="-translate-x-1"
          icon={<FilterIcon />}
          panelWidth={272}
          closeIcon={true}
          isDisabled={false}
        >
          <h2 className="text-neutral-500 font-sem3bold text-base pb-3">
            Filter
          </h2>
          <div className="content-wrapper flex flex-col gap-3">
          </div>
        </MultiBox>
        {/* Filter Multibox Ends Here */}
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
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
    </>
  );
};

export default InvoicedTickets;
