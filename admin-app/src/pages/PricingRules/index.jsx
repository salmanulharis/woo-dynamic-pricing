import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './styles.css';
import { FILTER_BY, SAMPLE_DATA, BULK_ACTIONS } from './constants';

const PricingRules = () => {
    const navigate = useNavigate();
    const [selectedRules, setSelectedRules] = useState([]);

    const handleAddNewRule = () => {
        navigate('/pricing-rules/add');
    };

    const handleEditRule = (id) => {
        navigate(`/pricing-rules/edit/${id}`);
    };

    const handleDeleteRule = (id) => {
        console.log(id);
    };

    return (
        <div className="main-content acowdp-pricing-rules">
            <h1>Pricing Rules</h1>
            <div className="acowdp-pricing-rules-actions">
                <div className="acowdp-pricing-rules-filters">
                    <div className="acowdp-pricing-rules-filter-bulk-actions">
                        <select className="acowdp-pricing-rules-filter-bulk-actions-select acowdp-select-box">
                            {BULK_ACTIONS.map((action) => (
                                <option key={action.value} value={action.value}>
                                    {action.label}
                                </option>
                            ))}
                        </select>
                        <button className="btn btn-primary">
                            <span>Apply</span>
                        </button>
                    </div>
                    <div className="acowdp-pricing-rules-filter-by">
                        <select
                            className="acowdp-pricing-rules-filter-by-select acowdp-select-box acowdp-ui-select"
                        >
                            {FILTER_BY.map((filter) => (
                                <option key={filter.value} value={filter.value}>
                                    {filter.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="acowdp-pricing-rules-add-new-rule">
                    <button className="btn btn-primary" onClick={handleAddNewRule}>
                        Add New Rule
                    </button>
                </div>

            </div>

            <div className="acowdp-pricing-rules-table">
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" className="acowdp-table-checkbox acowdp-table-checkbox-header" /></th>
                            <th>Title</th>
                            <th>Discount Type</th>
                            <th>Value</th>
                            <th>Priority</th>
                            <th>Schedule</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {SAMPLE_DATA.map((rule) => (
                            <tr key={rule.title}>
                                <td><input type="checkbox" className="acowdp-table-checkbox acowdp-table-checkbox-row" /></td>
                                <td>{rule.title}</td>

                                <td>
                                    <span className="acowdp-discount-badge">
                                        {rule.discountType}
                                    </span>
                                </td>

                                <td>{rule.value}</td>

                                <td>{rule.priority}</td>

                                <td>{rule.schedule}</td>

                                <td>
                                    <div className="acowdp-status-toggle active"></div>
                                </td>

                                <td>
                                    <div className="acowdp-table-actions">
                                        <button className="btn btn-primary" onClick={() => handleEditRule(rule.id)}>
                                            Edit
                                        </button>

                                        <button className="btn btn-delete" onClick={() => handleDeleteRule(rule.id)}>
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PricingRules;