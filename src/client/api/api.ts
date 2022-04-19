/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI WooDOng
 * Test API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * Products
 * @export
 * @interface Product
 */
export interface Product {
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'name': string;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    'price': number;
}

/**
 * ProductApi - axios parameter creator
 * @export
 */
export const ProductApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add new product
         * @param {Product} product Product object that needs to be added to the product
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addProduct: async (product: Product, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'product' is not null or undefined
            assertParamExists('addProduct', 'product', product)
            const localVarPath = `/product`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(product, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProductApi - functional programming interface
 * @export
 */
export const ProductApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProductApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Add new product
         * @param {Product} product Product object that needs to be added to the product
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addProduct(product: Product, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Product>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addProduct(product, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProductApi - factory interface
 * @export
 */
export const ProductApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProductApiFp(configuration)
    return {
        /**
         * 
         * @summary Add new product
         * @param {Product} product Product object that needs to be added to the product
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addProduct(product: Product, options?: any): AxiosPromise<Product> {
            return localVarFp.addProduct(product, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProductApi - object-oriented interface
 * @export
 * @class ProductApi
 * @extends {BaseAPI}
 */
export class ProductApi extends BaseAPI {
    /**
     * 
     * @summary Add new product
     * @param {Product} product Product object that needs to be added to the product
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApi
     */
    public addProduct(product: Product, options?: AxiosRequestConfig) {
        return ProductApiFp(this.configuration).addProduct(product, options).then((request) => request(this.axios, this.basePath));
    }
}


