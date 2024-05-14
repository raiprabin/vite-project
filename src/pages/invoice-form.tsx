// InvoiceForm.tsx
import React, { useState } from 'react';
import { InvoiceItem } from './invoice-detail';

interface InvoiceFormProps {
  onAddItem: (item: InvoiceItem) => void;
  onUpdateDetails: (invoiceNumber: string, date: string, customerName: string) => void;
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({ onAddItem, onUpdateDetails }) => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0.0);
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [date, setDate] = useState('');
  const [customerName, setCustomerName] = useState('');

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    const total = quantity * price;
    onAddItem({ description, quantity, price, total });
    setDescription('');
    setQuantity(1);
    setPrice(0.0);
  };

  const handleUpdateDetails = () => {
    onUpdateDetails(invoiceNumber, date, customerName);
  };

  return (
    <div className="p-8 border border-gray-300 w-full max-w-2xl mx-auto bg-white shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Invoice Details</h2>
      <div className="mb-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Invoice Number</label>
          <input
            type="text"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            className="mt-1 block w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Customer Name</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 p-2"
          />
        </div>
        <button
          onClick={handleUpdateDetails}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Details
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-4">Add Invoice Item</h2>
      <form onSubmit={handleAddItem}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="mt-1 block w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-1 block w-full border border-gray-300 p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default InvoiceForm;
