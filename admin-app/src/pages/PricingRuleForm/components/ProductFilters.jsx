import { useState, useRef, useEffect } from 'react';
import {
  PRODUCT_LIST_OPTIONS,
  FILTER_TYPE_OPTIONS,
  FILTER_ITEMS_BY_TYPE,
  DEFAULT_PRODUCT_FILTER,
} from '../constants';

// ─── MultiSelect ──────────────────────────────────────────────────
// Tag-input style multi-select with inline search filtering.
// selectedValues: string[]  |  availableItems: { value, label }[]
// onChange: (updatedValues: string[]) => void
const MultiSelect = ({ selectedValues, availableItems, onChange, placeholder = 'Search…' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (evt) => {
      if (containerRef.current && !containerRef.current.contains(evt.target)) {
        setIsOpen(false);
        setSearchText('');
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const openAndFocus = () => {
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const toggleItem = (itemValue) => {
    const updated = selectedValues.includes(itemValue)
      ? selectedValues.filter(val => val !== itemValue)
      : [...selectedValues, itemValue];
    onChange(updated);
    inputRef.current?.focus();
  };

  const removeItem = (evt, itemValue) => {
    evt.stopPropagation();
    onChange(selectedValues.filter(val => val !== itemValue));
  };

  const clearAll = (evt) => {
    evt.stopPropagation();
    onChange([]);
    setSearchText('');
  };

  const resolveLabel = (itemValue) =>
    availableItems.find(item => item.value === itemValue)?.label ?? itemValue;

  const filteredItems = searchText.trim()
    ? availableItems.filter(item =>
        item.label.toLowerCase().includes(searchText.toLowerCase())
      )
    : availableItems;

  // Highlight matched portion of label
  const highlightMatch = (label) => {
    if (!searchText.trim()) return label;
    const matchIndex = label.toLowerCase().indexOf(searchText.toLowerCase());
    if (matchIndex === -1) return label;
    return (
      <>
        {label.slice(0, matchIndex)}
        <strong>{label.slice(matchIndex, matchIndex + searchText.length)}</strong>
        {label.slice(matchIndex + searchText.length)}
      </>
    );
  };

  return (
    <div className="acowdp-multiselect" ref={containerRef}>
      {/* Tag input box */}
      <div
        className={`acowdp-multiselect-input-box ${isOpen ? 'acowdp-open' : ''}`}
        onClick={openAndFocus}
      >
        <div className="acowdp-multiselect-tags-row">
          {selectedValues.map(itemValue => (
            <span key={itemValue} className="acowdp-ms-tag">
              {resolveLabel(itemValue)}
              <button
                type="button"
                className="acowdp-ms-tag-remove"
                onClick={evt => removeItem(evt, itemValue)}
              >×</button>
            </span>
          ))}
          <input
            ref={inputRef}
            className="acowdp-multiselect-search"
            type="text"
            value={searchText}
            placeholder={selectedValues.length === 0 ? placeholder : ''}
            onChange={evt => { setSearchText(evt.target.value); setIsOpen(true); }}
            onFocus={() => setIsOpen(true)}
          />
        </div>
        <div className="acowdp-multiselect-controls">
          {selectedValues.length > 0 && (
            <button type="button" className="acowdp-ms-clear" onClick={clearAll} title="Clear all">×</button>
          )}
          <span className="acowdp-multiselect-arrow">▼</span>
        </div>
      </div>

      {/* Dropdown list */}
      {isOpen && (
        <div className="acowdp-multiselect-dropdown">
          {filteredItems.length === 0 ? (
            <div className="acowdp-multiselect-empty">No results found</div>
          ) : (
            filteredItems.map(item => {
              const isChecked = selectedValues.includes(item.value);
              return (
                <div
                  key={item.value}
                  className={`acowdp-multiselect-option ${isChecked ? 'acowdp-checked' : ''}`}
                  onMouseDown={evt => evt.preventDefault()} // prevent input blur before click
                  onClick={() => toggleItem(item.value)}
                >
                  <input type="checkbox" readOnly checked={isChecked} tabIndex={-1} />
                  <span>{highlightMatch(item.label)}</span>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

// ─── ProductFilters ───────────────────────────────────────────────
const ProductFilters = ({
  useCustomFilter, setUseCustomFilter,
  productList, setProductList,
  productFilters, setProductFilters,
  disableSaleDiscount, setDisableSaleDiscount,
}) => {
  const addFilter = () =>
    setProductFilters(prev => [...prev, { ...DEFAULT_PRODUCT_FILTER }]);

  const removeFilter = (filterIndex) =>
    setProductFilters(prev => prev.filter((_, idx) => idx !== filterIndex));

  const updateFilterField = (filterIndex, field, value) =>
    setProductFilters(prev =>
      prev.map((filter, idx) => idx === filterIndex ? { ...filter, [field]: value } : filter)
    );

  // Reset selected values when filter type changes — old IDs are invalid for the new list
  const handleTypeChange = (filterIndex, newType) => {
    setProductFilters(prev =>
      prev.map((filter, idx) =>
        idx === filterIndex ? { ...filter, filter_type: newType, filter_values: [] } : filter
      )
    );
  };

  return (
    <div className="acowdp-card">
      <div className="acowdp-card-header"><h2>Product Filters</h2></div>
      <div className="acowdp-card-body">

        <div className="acowdp-check-row">
          <input
            type="checkbox"
            id="acowdp-custom-filter"
            checked={useCustomFilter}
            onChange={evt => setUseCustomFilter(evt.target.checked)}
          />
          <label htmlFor="acowdp-custom-filter">Use custom product filter</label>
        </div>

        <div className="acowdp-field">
          <label htmlFor="acowdp-product-list">Product List</label>
          <span className="acowdp-hint">
            Apply discount to a specific product set. Leave as "All Products" to apply globally.
          </span>
          <select
            className="acowdp-select"
            id="acowdp-product-list"
            value={productList}
            onChange={evt => setProductList(evt.target.value)}
          >
            {PRODUCT_LIST_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div className="acowdp-field">
          <label>Product Filters</label>
          <div className="acowdp-group-list">
            {productFilters.map((filter, filterIndex) => {
              const availableItems = FILTER_ITEMS_BY_TYPE[filter.filter_type] ?? [];
              return (
                <div key={filterIndex} className="acowdp-group">
                  <div className="acowdp-group-header">
                    <span className="acowdp-group-label">Filter {filterIndex + 1}</span>
                    <button
                      type="button"
                      className="acowdp-btn acowdp-btn-remove"
                      onClick={() => removeFilter(filterIndex)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="acowdp-group-body" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
                    <select
                      className="acowdp-select"
                      value={filter.filter_type}
                      onChange={evt => handleTypeChange(filterIndex, evt.target.value)}
                    >
                      {FILTER_TYPE_OPTIONS.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>

                    <MultiSelect
                      selectedValues={filter.filter_values}
                      availableItems={availableItems}
                      onChange={updatedValues => updateFilterField(filterIndex, 'filter_values', updatedValues)}
                      placeholder={`Search ${FILTER_TYPE_OPTIONS.find(opt => opt.value === filter.filter_type)?.label ?? 'items'}…`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <button type="button" className="acowdp-btn acowdp-btn-add" onClick={addFilter}>
            + Add Filter
          </button>
        </div>

        <div className="acowdp-check-row">
          <input
            type="checkbox"
            id="acowdp-disable-sale-discount"
            checked={disableSaleDiscount}
            onChange={evt => setDisableSaleDiscount(evt.target.checked)}
          />
          <label htmlFor="acowdp-disable-sale-discount">
            Disable discount if product is already on sale
          </label>
        </div>

      </div>
    </div>
  );
};

export default ProductFilters;