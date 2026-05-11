export const DISCOUNT_TYPES = [
    {
        label: 'Product Rules',
        options: [
            {
                label: 'Fixed price of the product price',
                value: 'product-fixed-price',
            },
            {
                label: 'Percentage of the product price',
                value: 'product-percentage-price',
            },
        ],
    },
    {
        label: 'Cart Rules',
        options: [
            {
                label: 'Fixed price of cart total amount',
                value: 'cart-fixed-price',
            },
            {
                label: 'Percentage of cart total amount',
                value: 'cart-percentage-price',
            },
        ],
    },
    {
        label: 'Quantity Rules',
        options: [
            {
                label: 'Quantity based discount',
                value: 'quantity-based-discount',
            },
        ],
    },
];