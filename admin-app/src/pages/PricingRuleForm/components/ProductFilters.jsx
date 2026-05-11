import { useState } from 'react';

const DEFAULT_PRODUCT_FILTER = {
    product_selection_type: 'product_selection',
    product_selection_value: [],
};

const ProductFilters = () => {
    const [productFilters, setProductFilters] = useState([]);

    // Add Product Filter
    const handleAddProductFilter = () => {
        setProductFilters((prev) => [
            ...prev,
            { ...DEFAULT_PRODUCT_FILTER },
        ]);
    };

    // Delete Product Filter
    const handleDeleteProductFilter = (index) => {
        setProductFilters((prev) =>
            prev.filter((_, i) => i !== index)
        );
    };

    // Update Product Filter
    const handleProductFilterChange = (index, field, value) => {
        setProductFilters((prev) =>
            prev.map((filter, i) =>
                i === index
                    ? { ...filter, [field]: value }
                    : filter
            )
        );
    };

    return (
        <div className="acowdp-pricing-rule-form-card acowdp-product-filters">

            <h2>Product Filters</h2>

            <div className="acowdp-pricing-rule-form-card-content acowdp-product-filters-content">

                <div className="acowdp-pricing-rule-form-item">
                    <label htmlFor="use-custom-product-filter">
                        Use custom product filter
                    </label>

                    <input
                        type="checkbox"
                        id="use-custom-product-filter"
                        name="use-custom-product-filter"
                    />
                </div>

                <div className="acowdp-pricing-rule-form-item">

                    <label htmlFor="product-lists">
                        Product Lists
                    </label>

                    <span>
                        *Use Product List for applying discount to selected
                        products or categories. If you don't want to use
                        product list, leave it as All Products.
                    </span>

                    <select
                        id="product-lists"
                        name="product-lists"
                        className="acowdp-pricing-rule-form-select"
                    >
                        <option value="all">All Products</option>
                        <option value="featured">Featured Products</option>
                        <option value="sale">Sale Products</option>
                        <option value="new">New Products</option>
                        <option value="best-sellers">Best Sellers</option>
                        <option value="top-rated">Top Rated Products</option>
                    </select>

                </div>

                <div className="acowdp-pricing-rule-form-item">

                    <label htmlFor="product-categories">
                        Product Filter
                    </label>

                    <div
                        className="acowdp-product-filter-container"
                        id="acowdp-product-filter-container"
                    >

                        {productFilters.map((filter, index) => (
                            <div
                                key={index}
                                className="acowdp-product-filter-group"
                            >

                                <h3>
                                    Product Filter {index + 1}
                                </h3>

                                <select
                                    className="acowdp-pricing-rule-form-select"
                                    value={filter.product_selection_type}
                                    onChange={(e) =>
                                        handleProductFilterChange(
                                            index,
                                            'product_selection_type',
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="product_selection">
                                        Product Selection
                                    </option>

                                    <option value="category_selection">
                                        Category Selection
                                    </option>

                                    <option value="tag_selection">
                                        Tag Selection
                                    </option>
                                </select>

                                <input
                                    type="text"
                                    className="acowdp-pricing-rule-form-input"
                                    placeholder="Enter values..."
                                    value={filter.product_selection_value.join(', ')}
                                    onChange={(e) =>
                                        handleProductFilterChange(
                                            index,
                                            'product_selection_value',
                                            e.target.value
                                                .split(',')
                                                .map((item) => item.trim())
                                        )
                                    }
                                />

                                <button
                                    type="button"
                                    className="btn btn-delete"
                                    onClick={() =>
                                        handleDeleteProductFilter(index)
                                    }
                                >
                                    Delete
                                </button>

                            </div>
                        ))}

                    </div>

                    <button
                        type="button"
                        className="acowdp-pricing-rule-form-button btn btn-primary"
                        onClick={handleAddProductFilter}
                    >
                        Add Product Filter
                    </button>

                </div>

                <div className="acowdp-pricing-rule-form-item">

                    <label htmlFor="disable-discount-if-product-is-on-sale">
                        Disable discount if product is on sale
                    </label>

                    <input
                        type="checkbox"
                        id="disable-discount-if-product-is-on-sale"
                        name="disable-discount-if-product-is-on-sale"
                    />

                </div>

            </div>
        </div>
    );
};

export default ProductFilters;