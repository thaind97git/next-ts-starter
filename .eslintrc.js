module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: 'plugin:@next/next/recommended',
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'no-case-declarations': 'off',
        'no-shadow': 'off',
        '@next/next/no-html-link-for-pages': 'off',
        'react/jsx-key': 'off',
        'react/prop-types': 'off',
        'no-use-before-define': 'off',
        'no-async-promise-executor': ['off'],
        'no-empty-pattern': ['off'],
        'no-undef': ['error'],
        'no-var': ['error'],
        'no-plusplus': 'off',
        semi: 'off',
        'object-curly-spacing': ['error', 'always'],
        // 'prettier/prettier': 'error',
        'no-underscore-dangle': 'off',
        'spaced-comment': ['off'],
        'no-prototype-builtins': ['off'],
        'sort-keys': ['off'],
        'space-before-function-paren': ['off'],
        indent: ['off'],
        'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
        // Typescript
        '@typescript-eslint/no-shadow': ['off'],
        '@typescript-eslint/ban-ts-ignore': ['off'],
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/interface-name-prefix': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/no-unused-expressions': ['off'],
        '@typescript-eslint/no-var-requires': ['off'],
        '@typescript-eslint/no-use-before-define': ['off'],
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/no-namespace': ['off']
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'no-undef': 'off'
            }
        }
    ]
}
