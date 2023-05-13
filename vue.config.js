const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	devServer: {
		allowedHosts: "all",
		proxy: {
			'/table': {
				target: 'https://notion-api.splitbee.io/v1/table',
				changeOrigin: true,
				pathRewrite: { '^/table': '' },
			},
		}
	}
})