/** @type {import('next').NextConfig} */
export async function headers() {
    return [
        {
            source: "/login",
            headers: [
                {
                    key: "Cross-Origin-Embedder-Policy",
                    value: "unsafe-none",
                },
            ],
        },
    ];
}
