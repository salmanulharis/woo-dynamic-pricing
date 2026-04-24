import { useState } from "react";
import "../styles/RulesForm.css";

export default function RulesFrom({ onCancel }) {
  const [activeTab, setActiveTab] = useState("discount");

  const [ruleName, setRuleName] = useState("Sample name");
  const [priority, setPriority] = useState("1");
  const [discountType, setDiscountType] = useState("fixed");
  const [discountStatus, setDiscountStatus] = useState(false);
  const [productList, setProductList] = useState("all-products");
  const [customProductFilter, setCustomProductFilter] = useState(false);
  const [disableDiscountIfProductIsOnSale, setDisableDiscountIfProductIsOnSale] = useState(false);
  const [discountValue, setDiscountValue] = useState("");
  const [multipleDiscountValues, setMultipleDiscountValues] = useState(true);
  const [minQty, setMinQty] = useState("1");
  const [maxQty, setMaxQty] = useState("10");
  const [tierDiscountValue, setTierDiscountValue] = useState("0");
  const [roleRestrictionEnabled, setRoleRestrictionEnabled] = useState(false);
  const [conditionGroups, setConditionGroups] = useState(1);
  const [fromDate, setFromDate] = useState("21-04-2026");
  const [startTime, setStartTime] = useState("--:--");
  const [toDate, setToDate] = useState("");
  const [endTime, setEndTime] = useState("00:00");


  return (
    <div className="acowdp-rule-form-page">
      <div className="acowdp-rule-form-breadcrumb">Pricing Rules / New Rule</div>

      <div className="acowdp-rule-form-tabs">
        <button
          type="button"
          className={activeTab === "discount" ? "is-active" : ""}
          onClick={() => setActiveTab("discount")}
        >
          Discount Settings
        </button>
        <button
          type="button"
          className={activeTab === "schedule" ? "is-active" : ""}
          onClick={() => setActiveTab("schedule")}
        >
          Schedule
        </button>
      </div>

      <div className="acowdp-rule-form-layout">
        <div className="acowdp-rule-main">
          {activeTab === "discount" ? (
            <>
              <section className="acowdp-rule-card">
            <header className="acowdp-rule-card-head">
              <h3>General Settings</h3>
              <p>Basic rule configuration</p>
            </header>
            <div className="acowdp-rule-card-body">
            <div className="acowdp-grid-two">
                <label className="acowdp-field">
                    <span className="acowdp-field-label">Rule Name</span>
                    <input
                      type="text"
                      placeholder="Enter rule name"
                      value={ruleName}
                      onChange={(e) => setRuleName(e.target.value)}
                    />
                </label>
                <label className="acowdp-field">
                    <span className="acowdp-field-label">Priority</span>
                    <input
                      type="number"
                      placeholder="1"
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                    />
                </label>
                <label className="acowdp-field">
                    <span className="acowdp-field-label">Discount Type</span>
                    <select value={discountType} onChange={(e) => setDiscountType(e.target.value)}>
                  <option value="fixed">Fixed price of product price</option>
                  <option value="percent">Percentage discount</option>
                    </select>
                </label>
                <div className="acowdp-toggle-group">
                    <span className="acowdp-field-label">Discount Status</span>
                    <div className="acowdp-switch-group">
                        <label className="acowdp-switch">
                            <input
                            type="checkbox"
                            checked={discountStatus}
                            onChange={(e) => setDiscountStatus(e.target.checked)}
                            />
                            <span className="acowdp-slider" />
                        </label>
                        <span className="acowdp-toggle-text">Active</span>
                    </div>
                </div>
            </div>
            </div>
        </section>

          <section className="acowdp-rule-card">
            <header className="acowdp-rule-card-head">
              <h3>Product Filter</h3>
              <p>Choose which products this rule applies to</p>
            </header>
            <div className="acowdp-rule-card-body">
            <div className="acowdp-grid-two">
                <label className="acowdp-field">
                  <span className="acowdp-field-label">Product Lists</span>
                <select
                  value={productList}
                  onChange={(e) => setProductList(e.target.value)}
                >
                  <option value="all-products">All Products</option>
                  <option value="selected-products">Selected Products</option>
                </select>
                  <span className="acowdp-field-hint">
                    Use Product Lists to apply discount to selected products or categories.
                  </span>
                </label>
              <div className="acowdp-inline-toggle">
                <div className="acowdp-switch-group">
                    <label className="acowdp-switch">
                    <input
                        type="checkbox"
                        checked={customProductFilter}
                        onChange={(e) => setCustomProductFilter(e.target.checked)}
                    />
                    <span className="acowdp-slider" />
                    </label>
                    <span>Use custom product filter</span>
                </div>
              </div>
            </div>

            <div className="acowdp-inline-toggle">
                <div className="acowdp-switch-group">
                    <label className="acowdp-switch">
                        <input
                        type="checkbox"
                        checked={disableDiscountIfProductIsOnSale}
                        onChange={(e) => setDisableDiscountIfProductIsOnSale(e.target.checked)}
                        />
                        <span className="acowdp-slider" />
                    </label>
                    <span>Disable discount if product is on sale</span>
                </div>
            </div>
            </div>
          </section>

          <section className="acowdp-rule-card">
            <header className="acowdp-rule-card-head">
              <h3>Discount Options</h3>
              <p>Configure discount values and conditions</p>
            </header>
            <div className="acowdp-rule-card-body">
              <label className="acowdp-field">
                <span className="acowdp-field-label">Discount Value</span>
              <input
                type="text"
                placeholder="Discount percentage / amount"
                value={discountValue}
                onChange={(e) => setDiscountValue(e.target.value)}
              />
              </label>

            <div className="acowdp-inline-toggle">
                <div className="acowdp-switch-group">
                    <label className="acowdp-switch">
                        <input
                        type="checkbox"
                        checked={multipleDiscountValues}
                        onChange={(e) => setMultipleDiscountValues(e.target.checked)}
                        />
                        <span className="acowdp-slider" />
                    </label>
                    <span>Set Multiple Discount Values</span>
                </div>
            </div>

            <div className="acowdp-grid-three">
                <label className="acowdp-field">
                  <span className="acowdp-field-label">Min Qty</span>
                <input
                  type="number"
                  value={minQty}
                  onChange={(e) => setMinQty(e.target.value)}
                />
                </label>
                <label className="acowdp-field">
                  <span className="acowdp-field-label">Max Qty</span>
                <input
                  type="number"
                  value={maxQty}
                  onChange={(e) => setMaxQty(e.target.value)}
                />
                </label>
                <label className="acowdp-field">
                  <span className="acowdp-field-label">Discount Value</span>
                <input
                  type="number"
                  value={tierDiscountValue}
                  onChange={(e) => setTierDiscountValue(e.target.value)}
                />
                </label>
            </div>

            <button
              type="button"
              className="acowdp-link-btn"
              onClick={() => setConditionGroups((prev) => prev + 1)}
            >
              + Add tier
            </button>
            </div>
          </section>

          <section className="acowdp-rule-card">
            <header className="acowdp-rule-card-head">
              <h3>Rules & Restrictions</h3>
              <p>Limit who can use this discount</p>
            </header>
            <div className="acowdp-rule-card-body">
            <div className="acowdp-inline-toggle">
                <div className="acowdp-switch-group">
                    <label className="acowdp-switch">
                        <input
                        type="checkbox"
                        checked={roleRestrictionEnabled}
                        onChange={(e) => setRoleRestrictionEnabled(e.target.checked)}
                        />
                        <span className="acowdp-slider" />
                    </label>
                    <span>Apply for specific user roles only</span>
                </div>
            </div>

            <div className="acowdp-divider" />

            <div className="acowdp-condition-row">
              <span className="acowdp-field-label">Condition Groups</span>
              <button
                type="button"
                className="acowdp-ghost-btn"
                onClick={() => setConditionGroups((prev) => prev + 1)}
              >
                + Add Group
              </button>
            </div>
            <span className="acowdp-field-hint">
              Total groups: {conditionGroups}
            </span>
            </div>
          </section>
            </>
          ) : (
            <section className="acowdp-rule-card">
              <header className="acowdp-rule-card-head">
                <h3>Schedule Options</h3>
                <p>Schedule discounts for upcoming dates</p>
              </header>

              <div className="acowdp-rule-card-body">
                <div className="acowdp-grid-two">
                  <label className="acowdp-field">
                    <span className="acowdp-field-label">From Date / Time</span>
                    <input
                      type="text"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                    />
                  </label>

                  <label className="acowdp-field">
                    <span className="acowdp-field-label">Start Time</span>
                    <input
                      type="text"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                    />
                  </label>

                  <label className="acowdp-field">
                    <span className="acowdp-field-label">To Date / Time</span>
                    <input
                      type="text"
                      placeholder="dd-mm-yyyy"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                    />
                  </label>

                  <label className="acowdp-field">
                    <span className="acowdp-field-label">End Time</span>
                    <input
                      type="text"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                    />
                  </label>
                </div>

                <button type="button" className="acowdp-link-btn">
                  + Add another date range
                </button>

                <p className="acowdp-schedule-note">
                  Please set date / time based on your server / WordPress timezone.
                  Enable the option in Settings {" > "} Timezone to use your WordPress
                  timezone.
                </p>
              </div>
            </section>
          )}
        </div>

        <aside className="acowdp-rule-side">
          <section className="acowdp-rule-card">
            <header className="acowdp-rule-card-head">
              <h3>Publish</h3>
              <p>Save and activate this rule</p>
            </header>
            <div className="acowdp-rule-card-body">
            <button type="button" className="acowdp-primary-btn">
              Publish Rule
            </button>
            <button type="button" className="acowdp-ghost-wide-btn" onClick={onCancel}>
              Cancel
            </button>
            </div>
          </section>

          <section className="acowdp-rule-card">
            <header className="acowdp-rule-card-head">
              <h3>Rule Summary</h3>
            </header>
            <div className="acowdp-rule-card-body">
            <div className="acowdp-summary-row">
              <span>Type</span>
              <strong>{discountType === "percent" ? "Percentage" : "Fixed product"}</strong>
            </div>
            <div className="acowdp-summary-row">
              <span>Applies to</span>
              <strong>{productList === "selected-products" ? "Selected Products" : "All Products"}</strong>
            </div>
            <div className="acowdp-summary-row">
              <span>Priority</span>
              <strong>{priority || "1"}</strong>
            </div>
            </div>
          </section>

          <section className="acowdp-rule-card">
            <header className="acowdp-rule-card-head">
              <h3>Quick Tips</h3>
            </header>
            <div className="acowdp-rule-card-body">
            <ul className="acowdp-tips">
              <li>Higher priority numbers run first.</li>
              <li>Use Product Lists to target specific categories.</li>
              <li>Quantity tiers allow bulk pricing breaks.</li>
            </ul>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
