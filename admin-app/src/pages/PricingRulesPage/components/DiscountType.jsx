import { useId, useState } from "react";
import "../styles/DiscountType.css";
import ArrowUpIcon from "../../../assets/icons/ArrowUpIcon";
import ArrowDownIcon from "../../../assets/icons/ArrowDownIcon";

const DISCOUNT_GROUPS = [
    {
        id: "product_rules",
        title: "Product Rules",
        options: [
            {
                value: "product_fixed_price",
                label: "Fixed price of the product price",
                description:
                    "Apply a fixed sale price per product unit. The catalog price becomes this amount when the rule matches.",
            },
            {
                value: "product_percentage",
                label: "Percentage of the product price",
                description:
                    "Discount each matching product by a percentage of its regular price (e.g. 10% off the item).",
            },
        ],
    },
    {
        id: "cart_rules",
        title: "Cart Rules",
        options: [
            {
                value: "cart_fixed_total",
                label: "Fixed price of cart total amount",
                description:
                    "Adjust the cart so the payable total resolves to a fixed amount when eligible (cart-level fixed adjustment).",
            },
            {
                value: "cart_percentage_total",
                label: "Percentage of cart total amount",
                description:
                    "Take a percentage off the cart subtotal or total amount for qualifying carts.",
            },
        ],
    },
    {
        id: "quantity_rules",
        title: "Quantity Rules",
        options: [
            {
                value: "quantity_based",
                label: "Quantity based discount",
                description:
                    "Change the discount as the customer buys more units (tiered pricing by quantity in the cart).",
            },
        ],
    },
];

const DiscountType = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [discountType, setDiscountType] = useState("cart_percentage_total");
    const groupLabelId = useId();

    return (
        <div className="acowdp-rules-form-card">
            <div
                className="acowdp-rules-form-card-header"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="acowdp-rules-form-card-header-left">
                    <h2>Discount Type</h2>
                    <p>Select the type of discount you want to apply</p>
                </div>
                <div className="acowdp-rules-form-card-header-right">
                    <button
                        type="button"
                        className="acowdp-rules-form-card-header-right-button"
                    >
                        {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    </button>
                </div>
            </div>
            {isExpanded && (
                <div className="acowdp-rules-form-card-body">
                    <div className="acowdp-rules-form-card-body-content">
                        <div className="acowdp-form-item acowdp-form-item-half acowdp-discount-type-field">
                            <input
                                type="hidden"
                                name="discount-type"
                                value={discountType}
                            />
                            <div
                                className="acowdp-discount-type-groups"
                                role="radiogroup"
                                aria-labelledby={groupLabelId}
                            >
                                {DISCOUNT_GROUPS.map((grp) => (
                                    <section
                                        key={grp.id}
                                        className="acowdp-discount-type-group"
                                        aria-label={grp.title}
                                    >
                                        <h3 className="acowdp-discount-type-group-title">
                                            {grp.title}
                                        </h3>
                                        <div className="acowdp-discount-type-cards">
                                            {grp.options.map((opt) => (
                                                <div
                                                    key={opt.value}
                                                    className="acowdp-discount-type-card-wrap"
                                                >
                                                    <button
                                                        type="button"
                                                        role="radio"
                                                        aria-checked={
                                                            discountType ===
                                                            opt.value
                                                        }
                                                        className={`acowdp-discount-type-card${
                                                            discountType ===
                                                            opt.value
                                                                ? " acowdp-discount-type-card--selected"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            setDiscountType(
                                                                opt.value
                                                            )
                                                        }
                                                    >
                                                        <span className="acowdp-discount-type-card-label">
                                                            {opt.label}
                                                        </span>
                                                    </button>
                                                    <div
                                                        className="acowdp-discount-type-tooltip"
                                                        role="tooltip"
                                                    >
                                                        {opt.description}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DiscountType;
