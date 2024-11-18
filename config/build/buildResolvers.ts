import path from 'path'
import { ResolveOptions } from 'webpack';
import TsconfigPathsPlugin  from 'tsconfig-paths-webpack-plugin';


export function buildResolvers(): ResolveOptions {
	return {
		// alias: {
		// 	app: path.resolve(__dirname, '../../src'),
		// },
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		preferAbsolute: true,
		// mainFiles: ['index'],
		plugins: [
            new TsconfigPathsPlugin({
                configFile: path.resolve(__dirname, '../../tsconfig.json'),
            }),
        ],
	};
}
