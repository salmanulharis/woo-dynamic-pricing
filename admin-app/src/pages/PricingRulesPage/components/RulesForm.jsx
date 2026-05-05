import { useState } from "react";
import "../styles/RulesForm.css";
import GeneralSettings from "./GeneralSettings";
import ProductFilter from "./ProductFilter";
import DiscountType from "./DiscountType";

export default function RulesFrom({ onCancel }) {
  const [activeTab, setActiveTab] = useState("discount");
  const [isEditMode, setIsEditMode] = useState(false);

  const [ruleName, setRuleName] = useState("Sample name");
  const [priority, setPriority] = useState("1");
  const [discountStatus, setDiscountStatus] = useState(false);


  return (
    <div className="acowdp-rules-form-container">
      {/* Header */}
      <div className="acowdp-rules-form-header">
        <div className="acowdp-rules-form-header-left">
          <h1>{isEditMode ? "Edit Discount Rule" : "Add New Discount Rule"}</h1>
          <p>Define the conditions and discounts for your pricing rules</p>
        </div>
        <div className="acowdp-rules-form-header-right">
          <button className="acowdp-rules-form-header-right-button acowdp-btn acowdp-btn-ghost">Save Draft</button>
          <button className="acowdp-rules-form-header-right-button acowdp-btn acowdp-btn-primary">Publish Rule</button>
        </div>
      </div>

      {/* Body */}
      <div className="acowdp-rules-form-body">
        <GeneralSettings />
        <DiscountType />
        <ProductFilter />
      </div>

      {/* Footer */}
      <div className="acowdp-rules-form-footer">
        <button className="acowdp-rules-form-footer-button acowdp-btn acowdp-btn-ghost">Save Draft</button>
        <button className="acowdp-rules-form-footer-button acowdp-btn acowdp-btn-primary">Publish Rule</button>
      </div>
    </div>
 
  );
}
