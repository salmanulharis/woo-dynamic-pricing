<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class ACOWDP_Plugin {

    public static function acowdp_init() {
        add_action('init', [__CLASS__, 'acowdp_register_post_type']);

        self::acowdp_includes();
        ACOWDP_Admin_Menu::acowdp_init();
        ACOWDP_Admin_Assets::acowdp_init();
        ACOWDP_Admin_Settings_API::acowdp_init();
        ACOWDP_Pricing_Rule::acowdp_init();
    }

    public static function acowdp_register_post_type() {
        register_post_type(
             ACOWDP_CPT_PRICING_RULE,
             [
                 'labels' => [
                     'name'          => 'Pricing Rules',
                     'singular_name' => 'Pricing Rule',
                 ],

                 'public'             => false,
                 'show_ui'            => true,
                 'show_in_menu'       => true,
                 'menu_position'      => 56,
                 'menu_icon'          => 'dashicons-tag',

                 'supports' => [
                     'title',
                 ],

                 'show_in_rest' => true,
             ]
        );
    }

    private static function acowdp_includes() {
        // Helpers
        require_once ACOWDP_PLUGIN_DIR . 'includes/helpers.php';

        // Include the admin classes.
        require_once ACOWDP_PLUGIN_DIR . 'includes/class-admin-menu.php';
        require_once ACOWDP_PLUGIN_DIR . 'includes/class-admin-assets.php';

        // Include the API handler class.
        require_once ACOWDP_PLUGIN_DIR . 'includes/api/class-admin-settings-api.php';

        // Include the services classes.
        require_once ACOWDP_PLUGIN_DIR . 'includes/Services/class-pricing-rule.php';
    }
}
