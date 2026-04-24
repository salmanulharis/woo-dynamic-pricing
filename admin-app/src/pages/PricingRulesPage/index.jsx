import { useState } from "react";
import "./style.css";
import SearchIcon from "../../assets/icons/SearchIcon";
import PriceRulesListTable from "./components/PriceRulesListTable";
import RulesFrom from "./components/RulesForm";


export default function PricingRulesPage() {
  const [isAddNewRuleModalOpen, setIsAddNewRuleModalOpen] = useState(false);

  const handleAddNewRule = () => {
    setIsAddNewRuleModalOpen(true);
  };

  return (
    <div className="acowdp-pricing-rules-container">
      {isAddNewRuleModalOpen ? (
        <RulesFrom onCancel={() => setIsAddNewRuleModalOpen(false)} />
      ) : (
      <div className="acowdp-pricing-rules">
        <div className="acowdp-pricing-header">
          <div className="acowdp-filters" role="search" aria-label="Filter pricing rules">
            <div className="acowdp-search-wrap">
              <span className="acowdp-search-icon" aria-hidden="true">
                <SearchIcon />
              </span>
              <input
                className="acowdp-filter-control acowdp-search-input"
                type="search"
                id="rules-search"
                placeholder="Search rules..."
              />
            </div>

            <select
              className="acowdp-filter-control acowdp-select"
              id="rule-types"
              defaultValue="all"
            >
              <option value="all">All Types</option>
              <option value="bulk">Bulk Discount</option>
              <option value="tiered">Tiered Pricing</option>
              <option value="bogo">Buy X Get Y</option>
            </select>

            <select
              className="acowdp-filter-control acowdp-select"
              id="bulk-actions"
              defaultValue=""
            >
              <option value="" disabled>
                Bulk action
              </option>
              <option value="activate">Activate</option>
              <option value="deactivate">Deactivate</option>
              <option value="delete">Delete</option>
            </select>

            <button type="button" className="acowdp-apply-button">
              Apply
            </button>
          </div>
          <div className="acowdp-pricing-header-actions">
            <button type="button" className="acowdp-apply-button acowdp-btn-primary acowdp-btn-sm" onClick={handleAddNewRule}>
              Add New Rule
            </button>
          </div>
        </div>
        
        <PriceRulesListTable />
      </div>
      )}
    </div>
  );
}
