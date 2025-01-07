import path from 'path';

export default {
	clearMocks: true,
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
	transform: {
		'^.+\\.(ts|tsx|js|jsx)$': 'babel-jest', // Используем Babel для трансформации
	},
	moduleDirectories: ['node_modules'],
	modulePaths: ['<rootDir>src'],
	testMatch: [
		// Обнаружил разницу между МАК ОС и ВИНДОУС!!!
		'<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
	],

	rootDir: '../../',
	setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
	moduleNameMapper: {
		'\\.(s?css)$': 'identity-obj-proxy',
		'\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
	},
};
