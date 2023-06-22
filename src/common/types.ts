// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { AwsCredentialIdentity, Provider, RequestSigner } from "@aws-sdk/types";

export interface MapAuthenticationOptions {
  transformRequest: (url: string, resourceType?: string) => { url: string };
}

export interface LocationClientConfig {
  signer?: RequestSigner;
  credentials?: Provider<AwsCredentialIdentity>;
}

export type getMapAuthenticationOptionsFunc = () => MapAuthenticationOptions;
export type getLocationClientConfigFunc = () => LocationClientConfig;
export type getCredentialsFunc = () => AwsCredentialIdentity;

export interface MapAuthHelper {
  getMapAuthenticationOptions: getMapAuthenticationOptionsFunc;
  getCredentials: getCredentialsFunc;
}

export interface SDKAuthHelper {
  getLocationClientConfig: getLocationClientConfigFunc;
}
