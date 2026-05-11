import { DISCOUNT_TYPES } from './constants';
import './styles.css';
import GeneralSettings from './components/GeneralSettings';
import DiscountOptions from './components/DiscountOptions';
import ProductFilters from './components/ProductFilters';
import RulesAndRestrictions from './components/RulesAndRestrictions';

const PricingRuleForm = () => {
    return (
        <div className="main-content acowdp-pricing-rule-form">
            <h1>Pricing Rule Form</h1>
            <div className="acowdp-pricing-rule-form-content">

                {/* GENERAL SETTINGS */}
                <GeneralSettings />

                {/* DISCOUNT OPTIONS */}
                <DiscountOptions />

                {/* Product Filters */}
                <ProductFilters />

                {/* Rules and Restrictions */}
                <RulesAndRestrictions />

            </div>
            <div className="acowdp-pricing-rule-form-footer">
                <button type="button" className="acowdp-pricing-rule-form-button acowdp-ui-control acowdp-ui-button">Publish</button>
            </div>
        </div>
    );
};

export default PricingRuleForm;