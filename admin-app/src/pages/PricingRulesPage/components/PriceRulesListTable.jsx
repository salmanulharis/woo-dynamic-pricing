import "../styles/PriceRulesListTable.css";
import EditIcon from "../../../assets/icons/EditIcon";
import CopyIcon from "../../../assets/icons/CopyIcon";
import DeleteIcon from "../../../assets/icons/DeleteIcon";


const sampleRules = [
  {
    id: "rule-1",
    name: "Sample name",
    discountType: "Fixed product price",
    value: "—",
    priority: "1",
    schedule: "Starts 21 Apr 2026",
    enabled: true,
  },
  {
    id: "rule-2",
    name: "Sample name 2",
    discountType: "Fixed product price",
    value: "—",
    priority: "2",
    schedule: "Starts 22 Apr 2026",
    enabled: false,
  },
  {
    id: "rule-3",
    name: "Sample name 3",
    discountType: "Fixed product price",
    value: "—",
    priority: "3",
    schedule: "Starts 23 Apr 2026",
    enabled: true,
  },
];

export default function PriceRulesListTable() {
  return (
    <div className="acowdp-rules-table-wrap">
      <table className="acowdp-rules-table">
        <thead>
          <tr>
            <th className="acowdp-col-checkbox">
              <input type="checkbox" aria-label="Select all rules" />
            </th>
            <th>Rule Name</th>
            <th>Discount Type</th>
            <th>Value</th>
            <th>Priority</th>
            <th>Schedule</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {sampleRules.map((rule) => (
            <tr key={rule.id}>
              <td className="acowdp-col-checkbox">
                <input type="checkbox" aria-label={`Select ${rule.name}`} />
              </td>
              <td className="acowdp-rule-name">{rule.name}</td>
              <td>
                <span className="acowdp-type-pill">{rule.discountType}</span>
              </td>
              <td>{rule.value}</td>
              <td>{rule.priority}</td>
              <td className="acowdp-schedule">{rule.schedule}</td>
              <td>
                <label className="acowdp-switch" aria-label={`Toggle ${rule.name}`}>
                  <input type="checkbox" defaultChecked={rule.enabled} />
                  <span className="acowdp-slider" />
                </label>
              </td>
              <td>
                <div className="acowdp-actions">
                  <button type="button" className="acowdp-action-btn" aria-label="Edit rule">
                    <EditIcon />
                  </button>
                  <button type="button" className="acowdp-action-btn" aria-label="Duplicate rule">
                    <CopyIcon />
                  </button>
                  <button type="button" className="acowdp-action-btn" aria-label="Delete rule">
                    <DeleteIcon />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
