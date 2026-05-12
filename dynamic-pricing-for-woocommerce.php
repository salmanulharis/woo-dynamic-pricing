<?php
/**
 * Plugin Name: Dynamic Pricing for WooCommerce
 * Version: 6.0.0
 * Description: Dynamic Pricing for WooCommerce helps to set dynamic pricing for your WooCommerce products.
 * Author: Acowebs
 * Author URI: https://acowebs.com
 * Requires at least: 4.4.0
 * Tested up to: 6.1
 * License: GPLv2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Requires PHP: 7.0
 * Text Domain: dynamic-pricing-for-woocommerce
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// -----------------------------
// Plugin Constants
// -----------------------------
define( 'ACOWDP_PLUGIN_NAME', 'Dynamic Pricing for WooCommerce' );
define( 'ACOWDP_PLUGIN_VERSION', '1.0.0' );
define( 'ACOWDP_API_VERSION', '1.0.0' );
define( 'ACOWDP_PLUGIN_FILE', __FILE__ );
define( 'ACOWDP_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'ACOWDP_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'ACOWDP_API_ASSETS_URL', plugin_dir_url( __FILE__ ) . 'assets/' );
define( 'ACOWDP_API_ASSETS_PATH', plugin_dir_path( __FILE__ ) . 'assets/' );
define( 'ACOWDP_STORE_URL', 'https://api.acowebs.com' );
define( 'ACOWDP_ITEM_ID', 381295 );
define( 'ACOWDP_REST_NAMESPACE', 'acowdp-api/v1' );
define( 'ACOWDP_PREFIX', 'acowdp_' );
define( 'ACOWDP_CPT_PRICING_RULE', 'acowdp_pricing_rule' );

// -----------------------------
// Plugin Initialization
// -----------------------------

// Include the main plugin class and initialize the plugin.
require_once ACOWDP_PLUGIN_DIR . 'includes/class-plugin.php';
ACOWDP_Plugin::acowdp_init();



