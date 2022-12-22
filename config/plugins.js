module.exports = {
  'config-sync': {
    enabled: true,
    config: {
      syncDir: "config/sync/",
      minify: false,
      soft: false,
      importOnBootstrap: false,
      customTypes: [],
      excludedTypes: [],
      excludedConfig: [
        "core-store.plugin_users-permissions_grant"
      ],
    },
  },
  placeholder: {
    enabled: true,
    config: {
      size: 10,
    },
  },
}
