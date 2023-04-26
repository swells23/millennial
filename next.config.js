module.exports = {
  webpack(config, { isServer }) {
    const prefix = config.assetPrefix ?? config.basePath ?? "";
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: `${prefix}/_next/static/media/`,
            outputPath: `${isServer ? "../" : ""}static/media/`,
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.com",
      },
    ],
  },
  async headers() {
    const CONTENT_SECURITY_POLICY = `
          default-src 'self';
          base-uri 'self';
          font-src 'self' https: data:;
          form-action 'self';
          frame-ancestors 'self';
          img-src 'self' data:;
          object-src 'none';
          script-src 'self';
          script-src-attr 'none';
          style-src 'self' https: 'unsafe-inline';
          upgrade-insecure-requests
      `,
      headers = [
        //   {
        //     key: "Content-Security-Policy",
        //     value: CONTENT_SECURITY_POLICY.replace(/\s{2,}/g, " ").trim(), // replace newline w/ space
        //   },
        {
          key: "Cross-Origin-Opener-Policy",
          value: "same-origin",
        },
        {
          key: "Cross-Origin-Resource-Policy",
          value: "same-origin",
        },
        {
          key: "Referrer-Policy",
          value: "no-referrer",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=15552000; includeSubDomains",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-DNS-Prefetch-Control",
          value: "off",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "X-Permitted-Cross-Domain-Policies",
          value: "none",
        },
        {
          key: "X-XSS-Protection",
          value: "0",
        },
      ];

    if (process.env.NEXT_VERCEL_ENV === "preview") {
      headers.push({
        key: "X-Robots-Tag",
        value: "noindex, nofollow",
      });
    }

    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: headers,
      },
    ];
  },
};
