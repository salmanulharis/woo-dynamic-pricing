import { useState, useEffect, use } from 'react';
import { ProFetchWP } from '../../utils/ProFetchWP';
import './PricingRuleForm.css';
import { INITIAL_FORM_STATE } from './constants';

import GeneralSettings from './components/GeneralSettings';
import DiscountOptions from './components/DiscountOptions';
import ProductFilters from './components/ProductFilters';
import RulesAndRestrictions from './components/RulesAndRestrictions';
import PreviewSidebar from './components/PreviewSidebar';

// Detect edit mode from URL path: /edit/:id
const getEditId = () => {
  const match = window.location.pathname.match(/\/edit\/([^/]+)/);
  return match ? match[1] : null;
};

// Mock fetch — replace with real API call
const fetchExistingRule = async (ruleId) => ({
  ruleName: `Rule #${ruleId}`,
  priority: '5',
  discountType: 'percentage',
  discountStatus: true,
  discountValue: '20',
  multipleDiscounts: false,
  useCustomFilter: false,
  productList: 'all',
  productFilters: [],
  disableSaleDiscount: false,
  specificRolesOnly: false,
  specificUserRoles: [],
  ruleGroups: [{ discount_type: 'fixed', condition_type: 'equal_to', value: '10' }],
});

const PricingRuleForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const editId = getEditId();
  const isEditMode = Boolean(editId);

  useEffect(() => {
    if (!isEditMode) return;
    fetchExistingRule(editId).then(existingData =>
      setFormData(prev => ({ ...prev, ...existingData }))
    );
  }, [editId]);

  // Generic field updater for scalar values (string, boolean, number)
  const setField = (fieldName) => (value) =>
    setFormData(prev => ({ ...prev, [fieldName]: value }));

  // Array field updater — supports both direct values and functional updaters
  // e.g. setArrayField('productFilters')(prev => [...prev, newItem])
  const setArrayField = (fieldName) => (updaterOrValue) =>
    setFormData(prev => ({
      ...prev,
      [fieldName]: typeof updaterOrValue === 'function'
        ? updaterOrValue(prev[fieldName])
        : updaterOrValue,
    }));

  const handleSubmit = async () => {
    try {
        const dataToSend = {
            formData,
            isEditMode,
            editId: editId ?? null,
        };
        const response = await ProFetchWP.post('savePriceRule', dataToSend);
        console.log('Pricing rule saved successfully:', response);
    } catch (error) {
        console.error('Error saving pricing rule:', error);
    }
  };

  useEffect(() => {
    if (isEditMode) {
      setFormData(prev => ({ ...prev, isEditing: true }));
      setFormData(prev => ({ ...prev, editId }));
    }else {
      setFormData(prev => ({ ...prev, isEditing: false }));
    }
  }, [isEditMode]);

  return (
    <div className="acowdp-page">

      <div className="acowdp-page-title">
        <h1>{isEditMode ? 'Edit Pricing Rule' : 'Add Pricing Rule'}</h1>
        {isEditMode && <span className="acowdp-edit-badge">Editing #{editId}</span>}
      </div>

      <main className="acowdp-main">
        <GeneralSettings
          ruleName={formData.ruleName}
          priority={formData.priority}
          discountType={formData.discountType}
          discountStatus={formData.discountStatus}
          setRuleName={setField('ruleName')}
          setPriority={setField('priority')}
          setDiscountType={setField('discountType')}
          setDiscountStatus={setField('discountStatus')}
        />

        <DiscountOptions
          discountValue={formData.discountValue}
          setDiscountValue={setField('discountValue')}
          multipleDiscounts={formData.multipleDiscounts}
          setMultipleDiscounts={setField('multipleDiscounts')}
        />

        <ProductFilters
          useCustomFilter={formData.useCustomFilter}
          setUseCustomFilter={setField('useCustomFilter')}
          productList={formData.productList}
          setProductList={setField('productList')}
          productFilters={formData.productFilters}
          setProductFilters={setArrayField('productFilters')}
          disableSaleDiscount={formData.disableSaleDiscount}
          setDisableSaleDiscount={setField('disableSaleDiscount')}
        />

        <RulesAndRestrictions
          specificRolesOnly={formData.specificRolesOnly}
          setSpecificRolesOnly={setField('specificRolesOnly')}
          specificUserRoles={formData.specificUserRoles}
          setSpecificUserRoles={setArrayField('specificUserRoles')}
          ruleGroups={formData.ruleGroups}
          setRuleGroups={setArrayField('ruleGroups')}
        />
      </main>

      <PreviewSidebar
        isEditMode={isEditMode}
        onSubmit={handleSubmit}
        formData={formData}
      />

    </div>
  );
};

export default PricingRuleForm;