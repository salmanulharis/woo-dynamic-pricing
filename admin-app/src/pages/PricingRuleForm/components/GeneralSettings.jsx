import { DISCOUNT_TYPES } from '../constants';
const GeneralSettings = () => {
    return (
        <div className="acowdp-pricing-rule-form-card acowdp-general-settings">
            <h2>General Settings</h2>
            <div className="acowdp-pricing-rule-form-card-content acowdp-general-settings-content">
                <div className="acowdp-pricing-rule-form-item">
                    <label htmlFor="rule-name">Rule Name</label>
                    <input type="text" id="rule-name" name="rule-name" />
                </div>
                <div className="acowdp-pricing-rule-form-item">
                    <label htmlFor="priority">Priority</label>
                    <input type="number" id="priority" name="priority" />
                </div>
                <div className="acowdp-pricing-rule-form-item">
                    <label htmlFor="discount-type">Discount Type</label>
                    <select
                        id="discount-type"
                        name="discount-type"
                        className="acowdp-pricing-rule-form-select"
                    >
                        {DISCOUNT_TYPES.map((group) => (
                            <optgroup key={group.label} label={group.label}>
                                {group.options.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </optgroup>
                        ))}
                    </select>
                </div>
                <div className="acowdp-pricing-rule-form-item">
                    <label htmlFor="discount-value">Discount Status</label>
                    <input type="checkbox" id="discount-status" name="discount-status" checked />
                </div>
            </div>
        </div>
    );
};

export default GeneralSettings;