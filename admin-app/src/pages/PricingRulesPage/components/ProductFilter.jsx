import { useState } from "react";
import "../styles/ProductFilter.css";
import ArrowUpIcon from "../../../assets/icons/ArrowUpIcon";
import ArrowDownIcon from "../../../assets/icons/ArrowDownIcon";

const createFilterRow = () => ({
    id: `row-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    field: "category",
    operator: "in",
    value: "tshirts",
});

const ProductFilter = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [useCustomProductFilter, setUseCustomProductFilter] = useState(false);
    const [disableDiscountOnSale, setDisableDiscountOnSale] = useState(false);
    const [productList, setProductList] = useState("all_products");
    const [filterRows, setFilterRows] = useState([createFilterRow()]);

    const updateFilterRow = (id, key, nextValue) => {
        setFilterRows((currentRows) =>
            currentRows.map((row) =>
                row.id === id ? { ...row, [key]: nextValue } : row
            )
        );
    };

    const addFilterRow = () => {
        setFilterRows((currentRows) => [...currentRows, createFilterRow()]);
    };

    return (
        <div className="acowdp-rules-form-card">
            <div className="acowdp-rules-form-card-header" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="acowdp-rules-form-card-header-left">
                    <h2>Product Filter</h2>
                    <p>Filter products based on various criteria</p>
                </div>
                <div className="acowdp-rules-form-card-header-right">
                    <button type="button" className="acowdp-rules-form-card-header-right-button" >{isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}</button>
                </div>
            </div>
            {isExpanded && (
                <div className="acowdp-rules-form-card-body">
                    <div className="acowdp-rules-form-card-body-content">
                        <div className="acowdp-form-item acowdp-form-item-half">
                            <label className="acowdp-form-label">Product Scope</label>
                            <div className="acowdp-product-filter-box">
                                <label className="acowdp-product-filter-switch" htmlFor="acowdp-custom-product-filter-toggle">
                                    <input
                                        id="acowdp-custom-product-filter-toggle"
                                        type="checkbox"
                                        checked={useCustomProductFilter}
                                        onChange={(event) => setUseCustomProductFilter(event.target.checked)}
                                    />
                                    <span className="acowdp-product-filter-slider" />
                                </label>
                                <div className="acowdp-product-filter-box-content">
                                    <span className="acowdp-product-filter-box-title">Use custom product filter</span>
                                    <span className="acowdp-product-filter-box-description">
                                        Apply to specific products only
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="acowdp-form-item acowdp-form-item-half">
                            <label htmlFor="acowdp-product-list" className="acowdp-form-label">Product List</label>
                            <select
                                id="acowdp-product-list"
                                className="acowdp-form-select acowdp-ui-control acowdp-ui-select"
                                value={productList}
                                onChange={(event) => setProductList(event.target.value)}
                                disabled={useCustomProductFilter}
                            >
                                <option value="all_products">All Products</option>
                                <option value="specific_products">Specific Products</option>
                                <option value="specific_categories">Specific Categories</option>
                            </select>
                            <p className="acowdp-product-filter-helper">
                                Use product lists to target specific products or categories.
                            </p>
                        </div>
                        {useCustomProductFilter && (
                            <div className="acowdp-form-item acowdp-form-item-full acowdp-product-filter-advanced">
                                <label className="acowdp-form-label">Product Filter</label>
                                {filterRows.map((row) => (
                                    <div key={row.id} className="acowdp-product-filter-row">
                                        <select
                                            className="acowdp-form-select acowdp-ui-control acowdp-ui-select acowdp-product-filter-small-select"
                                            value={row.field}
                                            onChange={(event) =>
                                                updateFilterRow(row.id, "field", event.target.value)
                                            }
                                        >
                                            <option value="category">Category</option>
                                            <option value="product">Product</option>
                                            <option value="tag">Tag</option>
                                            <option value="sku">SKU</option>
                                        </select>
                                        <select
                                            className="acowdp-form-select acowdp-ui-control acowdp-ui-select acowdp-product-filter-small-select"
                                            value={row.operator}
                                            onChange={(event) =>
                                                updateFilterRow(row.id, "operator", event.target.value)
                                            }
                                        >
                                            <option value="in">IN</option>
                                            <option value="not_in">NOT IN</option>
                                        </select>
                                        <div className="acowdp-product-filter-value-wrap">
                                            <select
                                                className="acowdp-form-select acowdp-ui-control acowdp-ui-select acowdp-product-filter-value-select"
                                                value={row.value}
                                                onChange={(event) =>
                                                    updateFilterRow(row.id, "value", event.target.value)
                                                }
                                            >
                                                <option value="tshirts">Tshirts</option>
                                                <option value="hoodies">Hoodies</option>
                                                <option value="accessories">Accessories</option>
                                            </select>
                                            <span className="acowdp-product-filter-chip">
                                                {row.value === "tshirts"
                                                    ? "Tshirts"
                                                    : row.value === "hoodies"
                                                      ? "Hoodies"
                                                      : "Accessories"} ×
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                <button type="button" className="acowdp-product-filter-add-new" onClick={addFilterRow}>
                                    + Add New
                                </button>
                            </div>
                        )}
                        <div className="acowdp-form-item acowdp-form-item-full">
                            <div className="acowdp-product-filter-box acowdp-product-filter-box-footer">
                                <label className="acowdp-product-filter-switch" htmlFor="acowdp-disable-discount-sale-toggle">
                                    <input
                                        id="acowdp-disable-discount-sale-toggle"
                                        type="checkbox"
                                        checked={disableDiscountOnSale}
                                        onChange={(event) => setDisableDiscountOnSale(event.target.checked)}
                                    />
                                    <span className="acowdp-product-filter-slider" />
                                </label>
                                <div className="acowdp-product-filter-box-content">
                                    <span className="acowdp-product-filter-box-title">
                                        Disable discount if product is on sale
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductFilter;