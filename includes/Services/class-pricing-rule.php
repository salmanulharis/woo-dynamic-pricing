<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class ACOWDP_Pricing_Rule {
    public static $acowdp_cpt_pricing_rule = ACOWDP_CPT_PRICING_RULE || 'acowdp_pricing_rule';
    public static $acowdp_cpt_pricing_rule_meta_key = '_acowdp_rule_data';


    public static function acowdp_init() {
        // This method can be used to initialize any hooks or actions related to pricing rules if needed.
    }

    public static function create($form_data) {
        $post_title = isset($form_data['ruleName']) ? sanitize_text_field($form_data['ruleName']) : 'Untitled Rule';

        // Create a new post of type 'acowdp_pricing_rule'.
        $post_id = wp_insert_post([
            'post_type'   => self::$acowdp_cpt_pricing_rule,
            'post_status' => 'publish',
            'post_title'  => $post_title,
        ]);   

        // Save the form data as post meta.
        if (!is_wp_error($post_id)) {
            update_post_meta(
                $post_id,
                self::$acowdp_cpt_pricing_rule_meta_key,
                $form_data
            );
        }

        return $post_id;
    }
}