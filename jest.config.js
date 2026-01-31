module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
            tsconfig: {
                jsx: 'react-jsx',
            },
        }],
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/app/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
