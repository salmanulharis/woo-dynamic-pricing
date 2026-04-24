import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import PricingRulesPage from "../pages/PricingRulesPage";
import "./App.css";

export default function App() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/pricing-rules" replace />} />
        <Route path="/pricing-rules" element={<PricingRulesPage />} />
        {/* <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </AdminLayout>
  );
}
