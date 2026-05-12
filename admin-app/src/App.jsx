import { Navigate, Route, Routes } from "react-router-dom";
import PricingRules from "./pages/PricingRules";
import PricingRuleForm from "./pages/PricingRuleForm/PricingRuleForm";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pricing-rules" replace />} />
      <Route path="/pricing-rules" element={<PricingRules />} />
      <Route path="/pricing-rules/add" element={<PricingRuleForm />} />
      <Route path="/pricing-rules/edit/:id" element={<PricingRuleForm />} />
      {/* <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}
