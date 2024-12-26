import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
	return {
		port: options.port,
		open: true,
		historyApiFallback: true,
		hot: false,//работает неокректно поэтому отключил / увеличивает размер бандла вдвое 
	};
}
