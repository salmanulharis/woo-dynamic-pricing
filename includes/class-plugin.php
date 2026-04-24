<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class ACOWDP_Plugin {

    const ACOWDP_REST_NAMESPACE = 'acowdp-api/v1';
    const ACOWDP_PREFIX = 'acowdp_';

    public static function acowdp_init() {
        self::acowdp_includes();
        ACOWDP_Admin_Menu::acowdp_init();
        ACOWDP_Admin_Assets::acowdp_init();
    }

    private static function acowdp_includes() {
        // Include the admin classes.
        require_once ACOWDP_PLUGIN_DIR . 'includes/class-admin-menu.php';
        require_once ACOWDP_PLUGIN_DIR . 'includes/class-admin-assets.php';
        
    }
}
