import path from 'path';
import { ResolveOptions } from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export function buildResolvers(): ResolveOptions {
    return {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        preferAbsolute: true,
        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.resolve(__dirname, '../../tsconfig.json'),
            }),
        ],
    };
}
