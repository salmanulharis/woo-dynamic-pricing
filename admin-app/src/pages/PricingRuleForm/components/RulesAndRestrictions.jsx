import { USER_ROLE_OPTIONS, CONDITION_TYPE_OPTIONS, DEFAULT_RULE_GROUP } from '../constants';

const RulesAndRestrictions = ({
  specificRolesOnly, setSpecificRolesOnly,
  specificUserRoles, setSpecificUserRoles,
  ruleGroups, setRuleGroups,
}) => {
  const addRuleGroup = () =>
    setRuleGroups(prev => [...prev, { ...DEFAULT_RULE_GROUP }]);

  const removeRuleGroup = (groupIndex) =>
    setRuleGroups(prev => prev.filter((_, idx) => idx !== groupIndex));

  const updateRuleGroup = (groupIndex, field, value) =>
    setRuleGroups(prev =>
      prev.map((group, idx) => idx === groupIndex ? { ...group, [field]: value } : group)
    );

  const toggleUserRole = (roleValue) =>
    setSpecificUserRoles(prev =>
      prev.includes(roleValue)
        ? prev.filter(role => role !== roleValue)
        : [...prev, roleValue]
    );

  return (
    <div className="acowdp-card">
      <div className="acowdp-card-header"><h2>Rules &amp; Restrictions</h2></div>
      <div className="acowdp-card-body">

        <div className="acowdp-check-row">
          <input
            type="checkbox"
            id="acowdp-specific-roles"
            checked={specificRolesOnly}
            onChange={evt => setSpecificRolesOnly(evt.target.checked)}
          />
          <label htmlFor="acowdp-specific-roles">Apply discount for specific user roles only</label>
        </div>

        {specificRolesOnly && (
          <div className="acowdp-field acowdp-roles-expanded">
            <label>User Roles</label>
            <div className="acowdp-role-pills">
              {USER_ROLE_OPTIONS.map(role => (
                <button
                  key={role.value}
                  type="button"
                  className={`acowdp-role-pill ${specificUserRoles.includes(role.value) ? 'acowdp-selected' : ''}`}
                  onClick={() => toggleUserRole(role.value)}
                >
                  {role.label}
                </button>
              ))}
            </div>
            {specificUserRoles.length > 0 && (
              <div className="acowdp-tag-list">
                {specificUserRoles.map(roleValue => {
                  const matched = USER_ROLE_OPTIONS.find(opt => opt.value === roleValue);
                  return (
                    <span key={roleValue} className="acowdp-tag">
                      {matched?.label ?? roleValue}
                      <button
                        type="button"
                        className="acowdp-tag-remove"
                        onClick={() => toggleUserRole(roleValue)}
                      >
                        ×
                      </button>
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        )}

        <div className="acowdp-field">
          <label>Quantity / Price Rules</label>
          <div className="acowdp-group-list">
            {ruleGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="acowdp-group">
                <div className="acowdp-group-header">
                  <span className="acowdp-group-label">Rule {groupIndex + 1}</span>
                  <button
                    type="button"
                    className="acowdp-btn acowdp-btn-remove"
                    onClick={() => removeRuleGroup(groupIndex)}
                  >
                    Remove
                  </button>
                </div>
                <div className="acowdp-group-body">
                  <select
                    className="acowdp-select"
                    value={group.discount_type}
                    onChange={evt => updateRuleGroup(groupIndex, 'discount_type', evt.target.value)}
                  >
                    <option value="fixed">Fixed</option>
                    <option value="percentage">Percentage</option>
                  </select>
                  <select
                    className="acowdp-select"
                    value={group.condition_type}
                    onChange={evt => updateRuleGroup(groupIndex, 'condition_type', evt.target.value)}
                  >
                    {CONDITION_TYPE_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <input
                    className="acowdp-input"
                    type="number"
                    min="0"
                    placeholder="Value"
                    value={group.value}
                    onChange={evt => updateRuleGroup(groupIndex, 'value', evt.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>
          <button type="button" className="acowdp-btn acowdp-btn-add" onClick={addRuleGroup}>
            + Add Rule
          </button>
        </div>

      </div>
    </div>
  );
};

export default RulesAndRestrictions;