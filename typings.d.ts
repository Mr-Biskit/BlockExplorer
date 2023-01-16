export type BigNumber = {
  _hex: string;
  _isBigNumber: boolean;
};

export type BlockType = {
  hash: string;
  parentHash: string;
  number: number;
  timestamp: number;
  nonce: string;
  difficulty: number;
  gasLimit: BigNumber;
  gasUsed: BigNumber;
  miner: string;
  extraData: string;
  transactions: string[];
  baseFeePerGas?: BigNumber | undefineds;
  _difficulty: BigNumber;
};
