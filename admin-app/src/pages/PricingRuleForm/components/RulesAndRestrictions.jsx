import { useEffect, useState } from 'react';

const DEFAULT_GROUP = {
    discount_type: 'fixed',
    condition_type: 'equal_to',
    value: '',
};

const RulesAndRestrictions = () => {
    const [rulesAndRestrictions, setRulesAndRestrictions] = useState([]);

    // Add Group
    const handleAddGroup = () => {
        setRulesAndRestrictions((prev) => [
            ...prev,
            { ...DEFAULT_GROUP },
        ]);
    };

    // Delete Group
    const handleDeleteGroup = (index) => {
        setRulesAndRestrictions((prev) =>
            prev.filter((_, i) => i !== index)
        );
    };

    // Update Group Field
    const handleGroupChange = (index, field, value) => {
        setRulesAndRestrictions((prev) =>
            prev.map((group, i) =>
                i === index
                    ? { ...group, [field]: value }
                    : group
            )
        );
    };

    useEffect(() => {
        console.log(rulesAndRestrictions);
    }, [rulesAndRestrictions]);

    return (
        <div className="acowdp-pricing-rule-form-card acowdp-rules-and-restrictions">
            <h2>Rules and Restrictions</h2>

            <div className="acowdp-pricing-rule-form-card-content acowdp-rules-and-restrictions-content">

                <div className="acowdp-pricing-rule-form-item">
                    <label>
                        Apply discount for specific user roles
                    </label>

                    <input type="checkbox" />
                </div>

                <div className="acowdp-pricing-rule-form-item">
                    <label>Supported User Roles</label>

                    <select className="acowdp-pricing-rule-form-select">
                        <option value="all">All Users</option>
                        <option value="registered">Registered Users</option>
                        <option value="unregistered">Unregistered Users</option>
                        <option value="guest">Guest Users</option>
                        <option value="admin">Admin Users</option>
                    </select>
                </div>

                <div className="acowdp-pricing-rule-form-item">
                    <label>Rules and Restrictions</label>

                    <div className="acowdp-rules-and-restrictions-container">

                        {rulesAndRestrictions.map((group, index) => (
                            <div
                                key={index}
                                className="acowdp-rules-and-restrictions-group"
                            >
                                <div className="acowdp-rules-and-restrictions-group-header">

                                    <h3>Group {index + 1}</h3>

                                    <select
                                        className="acowdp-pricing-rule-form-select"
                                        value={group.discount_type}
                                        onChange={(e) =>
                                            handleGroupChange(
                                                index,
                                                'discount_type',
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="fixed">Fixed</option>
                                        <option value="percentage">Percentage</option>
                                    </select>

                                    <select
                                        className="acowdp-pricing-rule-form-select"
                                        value={group.condition_type}
                                        onChange={(e) =>
                                            handleGroupChange(
                                                index,
                                                'condition_type',
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="equal_to">Equal To</option>
                                        <option value="not_equal_to">Not Equal To</option>
                                        <option value="greater_than">Greater Than</option>
                                        <option value="less_than">Less Than</option>
                                    </select>

                                    <input
                                        type="number"
                                        className="acowdp-pricing-rule-form-input"
                                        value={group.value}
                                        onChange={(e) =>
                                            handleGroupChange(
                                                index,
                                                'value',
                                                e.target.value
                                            )
                                        }
                                    />

                                    <button
                                        type="button"
                                        className="btn btn-delete"
                                        onClick={() =>
                                            handleDeleteGroup(index)
                                        }
                                    >
                                        Delete Group
                                    </button>

                                </div>
                            </div>
                        ))}

                    </div>

                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleAddGroup}
                    >
                        Add Group
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RulesAndRestrictions;