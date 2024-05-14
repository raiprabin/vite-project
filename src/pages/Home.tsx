import { ListingFiltersCtxProvider } from "@/utils/contexts/listing-filter";
import HUITabs from "../components/tabs/SimpleTabs";
import { useSearchParamsState } from "../hooks/util/useSearchParamsState";
import { TTicketsStatus } from "../schemas/base";
import InvoicedTickets, { Invoices } from "./invoiced-tickets";
import Breadcrumbs from "@/components/breadcum";
import { generatePathForBreadcrumb } from "@/utils/helpers/ui.helper";
import Button from "@/components/button/Button";
import { HomeSvg } from "@/assets/svgIcon";
import { AddInvoiceInformation } from "./add-invoice-information";
import { FormProvider, useForm } from "react-hook-form";
import { CreateAInvoiceValidationSchema, TCreateAInvoiceValidation } from "@/schemas/invoices";
import { zodResolver } from '@hookform/resolvers/zod';
import { ComboboxDemo } from "@/components/MultiBox/comboBox";
import Invoice, { InvoiceItem } from "./invoice-detail";
import { useState } from "react";
import InvoiceForm from "./invoice-form";

export const InvoiceMainPage = () => {
  return (
    <>
      <Breadcrumbs
        path={generatePathForBreadcrumb(
          ["/", "/invoices"],
          ["Operations", "Invoices"]
        )}
        title="Invoices"
        icon={<HomeSvg />}

      >
        <Button
          size="small"
          type="button"
          variant="warning"
          //   onClick={() => navigate(ROUTES.Tickets.SelectACustomer)}
        >
          Create New Invoices
        </Button>
      </Breadcrumbs>
      <InvoicesTableComponent />
    </>
  );
};

const InvoicesTableComponent = () => {
  const [activeTicketsTab, setActiveTicketsTab] =
    useSearchParamsState<TTicketsStatus>("type", "invoiced");
  const invoices: Invoices[] = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];
  const methods = useForm<TCreateAInvoiceValidation>({
    mode: 'onChange',
    resolver: zodResolver(CreateAInvoiceValidationSchema),
    shouldUnregister: false,
  });
  const [invoiceItems, setInvoiceItems] = useState<InvoiceItem[]>([]);
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [date, setDate] = useState('');
  const [customerName, setCustomerName] = useState('');

  const handleAddItem = (item: InvoiceItem) => {
    setInvoiceItems([...invoiceItems, item]);
  };

  const handleUpdateDetails = (invoiceNumber: string, date: string, customerName: string) => {
    setInvoiceNumber(invoiceNumber);
    setDate(date);
    setCustomerName(customerName);
  };
  return (
    <FormProvider {...methods}>

    <HUITabs
      selectedTab={(() => {
        switch (activeTicketsTab) {
          case "invoiced":
            return 0;
          case "draft":
            return 1;

          default:
            return 0;
        }
      })()}
      setSelectedTab={(e) => {
        switch (e) {
          case 0:
            setActiveTicketsTab("invoiced");
            break;
          case 1:
            setActiveTicketsTab("draft");
            break;
          default:
            setActiveTicketsTab("invoiced");
            break;
        }
      }}
      tabs={[
        {
          id: 0,
          title: "Invoiced",
          panel: (
            <ListingFiltersCtxProvider>
              <InvoicedTickets invoices={invoices} />
            </ListingFiltersCtxProvider>
          ),
        },
        {
          id: 1,
          title: "Draft",
          panel: <div className="min-h-screen bg-gray-100 p-4">
          <InvoiceForm onAddItem={handleAddItem} onUpdateDetails={handleUpdateDetails} />
          <Invoice
            items={invoiceItems}
            invoiceNumber={invoiceNumber}
            date={date}
            customerName={customerName}
            invoices={invoices} 
          />
        </div>,
        },
      ]}
    />
    </FormProvider>
    
  );
};
