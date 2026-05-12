import { DISCOUNT_TYPE_GROUPS } from '../constants';

const GeneralSettings = ({
  ruleName, priority, discountType, discountStatus,
  setRuleName, setPriority, setDiscountType, setDiscountStatus,
}) => (
  <div className="acowdp-card">
    <div className="acowdp-card-header"><h2>General Settings</h2></div>
    <div className="acowdp-card-body">

      <div className="acowdp-grid-2">
        <div className="acowdp-field">
          <label htmlFor="acowdp-rule-name">Rule Name</label>
          <input
            className="acowdp-input"
            id="acowdp-rule-name"
            type="text"
            placeholder="e.g. Summer Sale 20%"
            value={ruleName}
            onChange={evt => setRuleName(evt.target.value)}
          />
        </div>
        <div className="acowdp-field">
          <label htmlFor="acowdp-priority">Priority</label>
          <input
            className="acowdp-input"
            id="acowdp-priority"
            type="number"
            min="0"
            placeholder="0"
            value={priority}
            onChange={evt => setPriority(evt.target.value)}
          />
        </div>
      </div>

      <div className="acowdp-field">
        <label htmlFor="acowdp-discount-type">Discount Type</label>
        <select
          className="acowdp-select"
          id="acowdp-discount-type"
          value={discountType}
          onChange={evt => setDiscountType(evt.target.value)}
        >
          <option value="">— Select type —</option>
          {DISCOUNT_TYPE_GROUPS.map(group => (
            <optgroup key={group.label} label={group.label}>
              {group.options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <div className="acowdp-check-row">
        <input
          type="checkbox"
          id="acowdp-discount-status"
          checked={discountStatus}
          onChange={evt => setDiscountStatus(evt.target.checked)}
        />
        <label htmlFor="acowdp-discount-status">Rule is active</label>
        <span className="acowdp-status">
          <span className={`acowdp-status-dot ${discountStatus ? 'acowdp-active' : ''}`} />
          {discountStatus ? 'Active' : 'Inactive'}
        </span>
      </div>

    </div>
  </div>
);

export default GeneralSettings;