import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InvoiceMainPage } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InvoiceMainPage />}>
          <Route index element={<InvoiceMainPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
