<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('acowdp_register_rest_route')) {
    /**
     * Helper to register a REST API route for the ACO plugin.
     *
     * @param string $route     The REST route.
     * @param string|callable $handler  The callback handler method or function.
     * @param string $method    HTTP method (GET, POST, PUT, PATCH, DELETE).
     * @param callable|string|null $permission Permission callback or function name.
     */
    function acowdp_register_rest_route($route, $handler, $method = 'GET', $permission = null) {
        $method_map = [
            'GET'    => \WP_REST_Server::READABLE,
            'POST'   => \WP_REST_Server::CREATABLE,
            'PUT'    => \WP_REST_Server::EDITABLE,
            'PATCH'  => \WP_REST_Server::EDITABLE,
            'DELETE' => \WP_REST_Server::DELETABLE,
        ];

        $callback = is_string($handler) && class_exists('ACOWDP_API_Handler')
            ? [ 'ACOWDP_API_Handler', $handler ]
            : $handler;
        $namespace = defined( 'ACOWDP_REST_NAMESPACE' ) ? ACOWDP_REST_NAMESPACE : 'acowdp-api/v1';

        register_rest_route(
            $namespace,
            $route,
            [
                'methods'             => $method_map[$method] ?? $method,
                'callback'            => $callback,
                'permission_callback' => is_callable($permission)
                    ? $permission
                    : function() {
                        return current_user_can('manage_options');
                    },
            ]
        );
    }
}