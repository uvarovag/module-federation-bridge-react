import toCamelCase from '@uvarovag/to-camel-case'
import baseConfig from '@uvarovag/webpack-config-ts-react'
import { container } from 'webpack'
import { merge } from 'webpack-merge'

import packageJson from './package.json'

import type { TEnv } from '@uvarovag/webpack-config-ts-react'

export default (env: TEnv) =>
    merge(baseConfig(env), {
        output: {
            uniqueName: toCamelCase(packageJson.name),
        },
        plugins: [
            new container.ModuleFederationPlugin({
                name: toCamelCase(packageJson.name),
                filename: 'remoteEntry.js',
                exposes: {
                    './RemoteApp': './src/app/RemoteApp',
                },
                shared: {
                    ...packageJson.dependencies,
                    react: {
                        eager: true,
                        requiredVersion: packageJson.dependencies.react,
                    },
                    'react-dom': {
                        eager: true,
                        requiredVersion: packageJson.dependencies['react-dom'],
                    },
                    // 'react-router': {
                    //     eager: true,
                    //     requiredVersion: packageJson.dependencies['react-router'],
                    // },
                },
            }),
        ],
        devServer: {
            open: false,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            proxy: [
                {
                    secure: false,
                    changeOrigin: true,
                    pathRewrite: {
                        '^/pokeapi': '',
                    },
                    context: '/pokeapi',
                    target: 'https://pokeapi.co/api/v2/',
                },
            ],
        },
    })
