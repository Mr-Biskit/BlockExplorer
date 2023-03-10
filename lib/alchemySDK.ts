import { Network, Alchemy, Utils } from "alchemy-sdk";

export const settings = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

export const alchemy = new Alchemy(settings);

export const getBlock = async (_blockNumber: number) =>
  await alchemy.core.getBlock(_blockNumber);

export const getBlockTransactionReceipts = async (_blockNumber: any) =>
  await alchemy.core.getTransactionReceipts(_blockNumber);

export const getLatestBlockNumber = async () =>
  await alchemy.core.getBlockNumber();

export const getGasPrice = async () => await alchemy.core.getGasPrice();
