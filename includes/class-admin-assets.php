<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class ACOWDP_Admin_Assets {

    public static function acowdp_init() {
        add_action( 'admin_enqueue_scripts', [ __CLASS__, 'acowdp_enqueue_assets' ] );
    }

    public static function acowdp_enqueue_assets( $hook ) {
        if ( 'toplevel_page_dynamic-pricing-for-woocommerce-settings' !== $hook ) {
            return;
        }

        // REST namespace and URL.
        $namespace = defined( 'ACOWDP_REST_NAMESPACE' ) ? ACOWDP_REST_NAMESPACE : 'acowdp-api/v1';
        $restURL   = esc_url_raw( rest_url() );

        // Admin CSS.
        $css_url   = ACOWDP_API_ASSETS_URL . 'css/admin.css';
        $css_path  = ACOWDP_API_ASSETS_PATH . 'css/admin.css';
        $css_ver = file_exists( $css_path ) ? (string) filemtime( $css_path ) : ACOWDP_API_VERSION;

        // Admin JS.
        $js_url    = ACOWDP_API_ASSETS_URL . 'js/admin.js';
        $js_path   = ACOWDP_API_ASSETS_PATH . 'js/admin.js';
        $js_ver  = file_exists( $js_path ) ? (string) filemtime( $js_path ) : ACOWDP_API_VERSION;

        // Main CSS.
        $main_css_path  = ACOWDP_API_ASSETS_PATH . 'css/main.css';
        $main_css_url   = ACOWDP_API_ASSETS_URL . 'css/main.css';
        $main_css_ver = file_exists( $main_css_path ) ? (string) filemtime( $main_css_path ) : ACOWDP_API_VERSION;

        wp_enqueue_style(
            'acowdp-react-admin-css',
            $css_url,
            [],
            $css_ver
        );

        wp_enqueue_style(
            'acowdp-main-css',
            $main_css_url,
            [],
            $main_css_ver
        );

        wp_enqueue_script(
            'acowdp-react-admin-js',
            $js_url,
            [],
            $js_ver,
            true
        );

        wp_localize_script(
            'acowdp-react-admin-js',
            'WP_DATA',
            [
                'ajaxUrl'   => admin_url( 'admin-ajax.php' ),
                'restURL'   => $restURL,
                'namespace' => $namespace,
                'restNonce'     => wp_create_nonce( 'wp_rest' ),
                'version'   => ACOWDP_API_VERSION,
            ]
        );
    }
}
