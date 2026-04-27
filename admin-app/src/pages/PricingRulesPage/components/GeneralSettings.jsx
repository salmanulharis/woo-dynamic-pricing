import { useState } from "react";
import "../styles/GeneralSettings.css";
import ArrowUpIcon from "../../../assets/icons/ArrowUpIcon";
import ArrowDownIcon from "../../../assets/icons/ArrowDownIcon";

const GeneralSettings = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isRuleActive, setIsRuleActive] = useState(true);

    return (
        <div className="acowdp-rules-form-card">
            <div className="acowdp-rules-form-card-header" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="acowdp-rules-form-card-header-left">
                    <h2>General Settings</h2>
                    <p>Name, priority and status of the rule</p>
                </div>
                <div className="acowdp-rules-form-card-header-right">
                    <button className="acowdp-rules-form-card-header-right-button" >{isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}</button>
                </div>
            </div>
            {isExpanded && (
                <div className="acowdp-rules-form-card-body">
                    <div className="acowdp-rules-form-card-body-content">
                        <div className="acowdp-form-item acowdp-form-item-half">
                            <label htmlFor="rule-name" className="acowdp-form-label">Rule Name</label>
                            <input type="text" id="rule-name" placeholder="Enter rule name" className="acowdp-form-input" />
                        </div>
                        <div className="acowdp-form-item acowdp-form-item-half">
                            <label htmlFor="rule-name" className="acowdp-form-label">Priority</label>
                            <input type="number" id="rule-name" placeholder="Enter priority" className="acowdp-form-input" />
                        </div>
                        <div className="acowdp-form-item acowdp-form-item-half">
                            <label className="acowdp-form-label">Status</label>
                            <div className="acowdp-rule-status-row">
                                <label className="acowdp-rule-status-switch" htmlFor="acowdp-rule-status-toggle">
                                    <input
                                        id="acowdp-rule-status-toggle"
                                        type="checkbox"
                                        checked={isRuleActive}
                                        onChange={(event) => setIsRuleActive(event.target.checked)}
                                    />
                                    <span className="acowdp-rule-status-slider" />
                                </label>
                                <span className="acowdp-rule-status-label">Rule Status</span>
                                <span
                                    className={`acowdp-rule-status-pill ${isRuleActive ? "is-active" : "is-inactive"}`}
                                >
                                    {isRuleActive ? "Active" : "Inactive"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GeneralSettings;