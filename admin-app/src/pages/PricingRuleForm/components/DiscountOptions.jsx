const DiscountOptions = ({
    discountValue, setDiscountValue,
    multipleDiscounts, setMultipleDiscounts,
  }) => (
    <div className="acowdp-card">
      <div className="acowdp-card-header"><h2>Discount Options</h2></div>
      <div className="acowdp-card-body">
  
        <div className="acowdp-field">
          <label htmlFor="acowdp-discount-value">Discount Value</label>
          <input
            className="acowdp-input"
            id="acowdp-discount-value"
            type="number"
            min="0"
            placeholder="Amount or percentage value"
            value={discountValue}
            onChange={evt => setDiscountValue(evt.target.value)}
          />
        </div>
  
        <div className="acowdp-check-row">
          <input
            type="checkbox"
            id="acowdp-multiple-discounts"
            checked={multipleDiscounts}
            onChange={evt => setMultipleDiscounts(evt.target.checked)}
          />
          <label htmlFor="acowdp-multiple-discounts">Set multiple discount values</label>
        </div>
  
      </div>
    </div>
  );
  
  export default DiscountOptions;