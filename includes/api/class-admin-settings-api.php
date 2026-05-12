<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class ACOWDP_Admin_Settings_API {

    /**
     * Initialize REST API routes for settings.
     */
    public static function acowdp_init() {
        add_action('rest_api_init', function () {
            acowdp_register_rest_route('/savePriceRule', [__CLASS__, 'savePriceRule'], 'POST');
            acowdp_register_rest_route('/downloadToServer', [__CLASS__, 'downloadToServer'], 'POST');
        });
    }

    /**
     * Handle saving a pricing rule via REST API.
     *
     * @param WP_REST_Request $request The REST request object.
     * @return WP_REST_Response The REST response object.
     */
    public static function savePriceRule($request) {
        $data = $request->get_json_params();
        $success = false;
        $post_id = null;
        write_log('Received data for saving pricing rule: ' . print_r($data, true)); // Debug log
        $form_data = $data['formData'] ?? [];
        $is_editing = boolval($data['isEditMode'] ?? false);
        $edit_id = intval($data['editId'] ?? 0);

        if ($is_editing) {
            $post_id = acowdp_update_pricing_rule($edit_id, $form_data);
        } else {
            $post_id = ACOWDP_Pricing_Rule::create($form_data);
        }
        write_log('Post ID after save operation: ' . $post_id); // Debug log

        // Validate and sanitize input data here as needed.

        // Save the pricing rule to the database.
        // This is a placeholder for your actual saving logic.
        $saved = true; // Replace with actual save result.

        $response = [
            'success' => $success,
            'data' => [
                'postId' => $post_id,
                'isEditing' => $is_editing,
            ],
            'message' => $success ? 'Pricing rule saved successfully.' : 'Failed to save pricing rule.',
        ];

        return new WP_REST_Response($response, 200);
    }
}