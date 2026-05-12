const METHODS = ["get", "post", "put", "delete"];

export default class FetchWP {
    constructor(options = {}) {
        /**
         * Auto-detect REST URL & nonce from WordPress
         * Supports:
         * - wpApiSettings (WP core)
         * - WP_API (custom localized)
         * - explicit options
         */
        this.restURL =
            options.restURL ||
            window.wpApiSettings?.root ||
            window.WP_API?.root;

        this.restNonce =
            options.restNonce ||
            window.wpApiSettings?.nonce ||
            window.WP_API?.nonce;

        this.namespace =
            options.namespace ||
            window.WP_API?.namespace ||
            "acoofmp-api/v1";


        if (!this.restURL) {
            throw new Error("REST API root URL not found");
        }

        if (!this.restNonce) {
            throw new Error("REST API nonce not found");
        }

        if (!this.namespace) {
            throw new Error("REST API namespace not found");
        }

        METHODS.forEach((method) => {
            this[method] = this._createMethod(method.toUpperCase());
        });
    }

    _createMethod(method) {
        /**
         * @param {string} endpoint
         * @param {Object|FormData|null} data
         * @param {Object} extra
         * extra = {
         *   params: {},        // query params (GET)
         *   headers: {},       // custom headers
         *   expect: "json" | "blob" | "text"
         * }
         */
        return async (endpoint = "/", data = null, extra = {}) => {
            const {
                params = null,
                headers = {},
                expect = "json",
            } = extra;

            let url = this.restURL.replace(/\/$/, "") + "/" + this.namespace + "/" + endpoint.replace(/^\//, "");

            // GET query params
            if (params && method === "GET") {
                const query = new URLSearchParams(params).toString();
                url += `?${query}`;
            }

            const fetchOptions = {
                method,
                credentials: "same-origin",
                headers: {
                    "X-WP-Nonce": this.restNonce,
                    ...headers,
                },
            };

            // Body handling
            if (data && method !== "GET") {
                if (data instanceof FormData) {
                    fetchOptions.body = data;
                } else {
                    fetchOptions.headers["Content-Type"] = "application/json";
                    fetchOptions.body = JSON.stringify(data);
                }
            }

            try {
                const response = await fetch(url, fetchOptions);

                let payload;
                if (expect === "blob") {
                    payload = await response.blob();
                } else if (expect === "text") {
                    payload = await response.text();
                } else {
                    payload = await response.json();
                }

                if (!response.ok) {
                    throw {
                        status: response.status,
                        message: payload?.message || "Request failed",
                        data: payload,
                    };
                }

                return payload;
            } catch (error) {
                console.error("WP REST Error:", error);

                return {
                    success: false,
                    status: error.status || 500,
                    error: error.message || "Network error",
                    data: error.data || null,
                };
            }
        };
    }
}

export const ProFetchWP  = new FetchWP({
    restURL: WP_DATA.restURL,
    restNonce: WP_DATA.restNonce,
    namespace: WP_DATA.namespace,
});

