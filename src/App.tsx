import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InvoiceMainPage } from "./pages/Home";
import { AddInvoiceInformation } from "./pages/add-invoice-information";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InvoiceMainPage />}>
          <Route index element={<InvoiceMainPage />} />
          <Route path="/add-invoice" element={<AddInvoiceInformation />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
