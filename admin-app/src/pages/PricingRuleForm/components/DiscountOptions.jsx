

const DiscountOptions = () => {
    return (
        <div className="acowdp-pricing-rule-form-card acowdp-discount-options">
            <h2>Discount Options</h2>
            <div className="acowdp-pricing-rule-form-card-content acowdp-discount-options-content">
                <div className="acowdp-pricing-rule-form-item">
                    <label htmlFor="discount-value">Discount Value</label>
                    <input type="number" id="discount-value" name="discount-value" placeholder='Discount amount / percentage value' />
                </div>
                <div className="acowdp-pricing-rule-form-item">
                    <label htmlFor="set-multiple-discount-values">Set Multiple Discount Values</label>
                    <input type="checkbox" id="set-multiple-discount-values" name="set-multiple-discount-values" />
                </div>
            </div>
        </div>
    );
};

export default DiscountOptions;