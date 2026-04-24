<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class ACOWDP_Admin_Menu {

    public static function acowdp_init() {
        add_action( 'admin_menu', [ __CLASS__, 'acowdp_add_admin_menu' ] );
    }

    /**
     * Add admin submenu under WooCommerce
     */
    public static function acowdp_add_admin_menu() {
        add_menu_page(
            __( 'Dynamic Pricing for WooCommerce', 'dynamic-pricing-for-woocommerce' ),
            __( 'Dynamic Pricing for WooCommerce', 'dynamic-pricing-for-woocommerce' ),
            'manage_options',
            'dynamic-pricing-for-woocommerce-settings',
            [ __CLASS__, 'acowdp_render_page' ],
            'dashicons-money', // You can change the icon as needed
            56 // Position in the menu, adjust as needed
        );
    }

    public static function acowdp_render_page() {
        echo '<div class="wrap">';
        echo '<div id="acowdp-root"></div>';
        echo '</div>';
    }
}
