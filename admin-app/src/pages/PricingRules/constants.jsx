export const SAMPLE_DATA = [
    {
        id: 1,
        title: 'Rule 1',
        discountType: 'Percentage',
        value: 10,
        priority: 1,
        schedule: 'Daily',
        status: 'Active',
    },
    {
        id: 2,
        title: 'Rule 2',
        discountType: 'Fixed',
        value: 100,
        priority: 2,
        schedule: 'Weekly',
        status: 'Inactive',
    },
    {
        id: 3,
        title: 'Rule 3',
        discountType: 'Free Shipping',
        value: 0,
        priority: 3,
        schedule: 'Monthly',
        status: 'Active',
    },
];

export const BULK_ACTIONS = [
    { label: 'Delete', value: 'delete'},
    { label: 'Activate', value: 'activate'},
    { label: 'Deactivate', value: 'deactivate'},
];

export const FILTER_BY = [
    { label: 'Fixed price of the product price', value: 'fixed_price_product' },
    { label: 'Percentage of the product price', value: 'percentage_product' },
    { label: 'Fixed price of cart total amount', value: 'fixed_price_cart_total' },
    { label: 'Percentage of cart total amount', value: 'percentage_cart_total' },
    { label: 'Quantity based discount', value: 'quantity_based' },
];