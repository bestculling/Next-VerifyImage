const isLocal = process.env.NEXT_PUBLIC_ENV === 'local'

let rewritesRule = [
    {
        source: '/dashboard/public/:path*',
        destination: '/:path*'
    }
]

if (isLocal) {
    rewritesRule = [
        ...rewritesRule,
    ]
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
        return rewritesRule
    }
};

export default nextConfig;
