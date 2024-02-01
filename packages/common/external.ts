export {Cell, beginCell, Address, toNano, fromNano} from '@ton/core';
export {TonClient} from '@ton/ton';
export {TonConnectUI} from '@tonconnect/ui';
export {getHttpEndpoint} from '@orbs-network/ton-access';

// add export of TonClientParameters to @ton/ton package
export interface TonClientOptions {
  endpoint: string;
  timeout?: number;
  apiKey?: string;
}
