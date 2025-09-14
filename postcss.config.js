module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {
      // Suppress warnings about deprecated properties
      ignoreUnknownVersions: true,
    },
  },
};
