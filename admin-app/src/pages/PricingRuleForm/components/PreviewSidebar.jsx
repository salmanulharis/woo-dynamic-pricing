import { DISCOUNT_TYPE_GROUPS, USER_ROLE_OPTIONS } from '../constants';

const resolveDiscountLabel = (typeValue) => {
  for (const group of DISCOUNT_TYPE_GROUPS) {
    const match = group.options.find(opt => opt.value === typeValue);
    if (match) return match.label;
  }
  return typeValue || null;
};

const PreviewRow = ({ label, value }) => (
  <div className="acowdp-preview-row">
    <span className="acowdp-preview-label">{label}</span>
    <span className={`acowdp-preview-value ${!value ? 'acowdp-empty' : ''}`}>
      {value || '—'}
    </span>
  </div>
);

const PreviewSidebar = ({ isEditMode, onSubmit, formData }) => {
  const {
    ruleName, priority, discountType, discountStatus,
    discountValue, productFilters, ruleGroups,
    specificUserRoles,
  } = formData;

  const selectedRoleLabels = specificUserRoles.length
    ? specificUserRoles
        .map(roleValue => USER_ROLE_OPTIONS.find(opt => opt.value === roleValue)?.label ?? roleValue)
        .join(', ')
    : null;

  return (
    <aside className="acowdp-sidebar">

      <div className="acowdp-sidebar-card">
        <h3>Actions</h3>
        <div className="acowdp-sidebar-body">
          <div className="acowdp-preview-row">
            <span className="acowdp-preview-label">Status</span>
            <span className="acowdp-status">
              <span className={`acowdp-status-dot ${discountStatus ? 'acowdp-active' : ''}`} />
              {discountStatus ? 'Active' : 'Inactive'}
            </span>
          </div>
          <button type="button" className="acowdp-publish-btn" onClick={onSubmit}>
            {isEditMode ? 'Update Rule' : 'Publish Rule'}
          </button>
        </div>
      </div>

      <div className="acowdp-sidebar-card">
        <h3>Summary</h3>
        <div className="acowdp-sidebar-body">
          <PreviewRow label="Rule Name" value={ruleName} />
          <PreviewRow label="Priority" value={priority} />
          <hr className="acowdp-preview-divider" />
          <PreviewRow label="Discount Type" value={resolveDiscountLabel(discountType)} />
          <PreviewRow label="Discount Value" value={discountValue || null} />
          <hr className="acowdp-preview-divider" />
          <PreviewRow
            label="Product Filters"
            value={productFilters.length ? `${productFilters.length} filter(s)` : null}
          />
          <PreviewRow
            label="Rules"
            value={ruleGroups.length ? `${ruleGroups.length} rule(s)` : null}
          />
          {selectedRoleLabels && (
            <PreviewRow label="User Roles" value={selectedRoleLabels} />
          )}
        </div>
      </div>

    </aside>
  );
};

export default PreviewSidebar;