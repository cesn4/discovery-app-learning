// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ["/.docz/","/node_modules/"],
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    testMatch: [
        'src/**/__tests__/**/*.[jt]s?(x)',
        'src/**/?(*.)+(spec|test).[tj]s?(x)',
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
        '^~(.*)$': '<rootDir>/src$1',
    },
    setupFiles: ['<rootDir>/tests/setup.js'],
};
