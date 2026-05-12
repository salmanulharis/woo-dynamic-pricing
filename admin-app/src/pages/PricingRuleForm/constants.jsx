export const DISCOUNT_TYPE_GROUPS = [
    {
      label: 'Price Adjustment',
      options: [
        { value: 'fixed', label: 'Fixed Price' },
        { value: 'fixed_discount', label: 'Fixed Discount' },
        { value: 'percentage', label: 'Percentage Discount' },
      ],
    },
    {
      label: 'Bulk / Tiered',
      options: [
        { value: 'bulk_fixed', label: 'Bulk Fixed' },
        { value: 'bulk_percentage', label: 'Bulk Percentage' },
      ],
    },
  ];
  
  export const USER_ROLE_OPTIONS = [
    { value: 'all', label: 'All Users' },
    { value: 'registered', label: 'Registered Users' },
    { value: 'unregistered', label: 'Unregistered Users' },
    { value: 'guest', label: 'Guest Users' },
    { value: 'administrator', label: 'Administrator' },
    { value: 'editor', label: 'Editor' },
    { value: 'customer', label: 'Customer' },
  ];
  
  export const PRODUCT_LIST_OPTIONS = [
    { value: 'all', label: 'All Products' },
    { value: 'featured', label: 'Featured Products' },
    { value: 'sale', label: 'Sale Products' },
    { value: 'new', label: 'New Products' },
    { value: 'best-sellers', label: 'Best Sellers' },
    { value: 'top-rated', label: 'Top Rated Products' },
  ];
  
  export const CONDITION_TYPE_OPTIONS = [
    { value: 'equal_to', label: 'Equal To' },
    { value: 'not_equal_to', label: 'Not Equal To' },
    { value: 'greater_than', label: 'Greater Than' },
    { value: 'less_than', label: 'Less Than' },
    { value: 'between', label: 'Between' },
  ];
  
  export const FILTER_TYPE_OPTIONS = [
    { value: 'product_selection', label: 'Product Selection' },
    { value: 'category_selection', label: 'Category Selection' },
    { value: 'tag_selection', label: 'Tag Selection' },
  ];
  
  // Dummy data — replace each list with an API fetch later
  export const FILTER_ITEMS_BY_TYPE = {
    product_selection: [
      { value: 'prod_1', label: 'Wireless Headphones' },
      { value: 'prod_2', label: 'Mechanical Keyboard' },
      { value: 'prod_3', label: 'USB-C Hub' },
      { value: 'prod_4', label: 'Laptop Stand' },
      { value: 'prod_5', label: 'Webcam HD 1080p' },
      { value: 'prod_6', label: 'Desk Lamp LED' },
      { value: 'prod_7', label: 'Mouse Pad XL' },
      { value: 'prod_8', label: 'Portable SSD 1TB' },
    ],
    category_selection: [
      { value: 'cat_1', label: 'Electronics' },
      { value: 'cat_2', label: 'Accessories' },
      { value: 'cat_3', label: 'Peripherals' },
      { value: 'cat_4', label: 'Storage' },
      { value: 'cat_5', label: 'Networking' },
      { value: 'cat_6', label: 'Audio' },
    ],
    tag_selection: [
      { value: 'tag_1', label: 'new-arrival' },
      { value: 'tag_2', label: 'best-seller' },
      { value: 'tag_3', label: 'on-sale' },
      { value: 'tag_4', label: 'featured' },
      { value: 'tag_5', label: 'clearance' },
      { value: 'tag_6', label: 'bundle' },
      { value: 'tag_7', label: 'limited-edition' },
    ],
  };
  
  export const DEFAULT_RULE_GROUP = {
    discount_type: 'fixed',
    condition_type: 'equal_to',
    value: '',
  };
  
  export const DEFAULT_PRODUCT_FILTER = {
    filter_type: 'product_selection',
    filter_values: [],
  };
  
  export const INITIAL_FORM_STATE = {
    ruleName: '',
    priority: '',
    discountType: '',
    discountStatus: true,
    discountValue: '',
    multipleDiscounts: false,
    useCustomFilter: false,
    productList: 'all',
    productFilters: [],
    disableSaleDiscount: false,
    specificRolesOnly: false,
    specificUserRoles: [],
    ruleGroups: [{ ...DEFAULT_RULE_GROUP }],
  };