import React from "react";
import { getLatestBlockNumber, getBlock } from "../lib/alchemySDK";
import { BlockType, BigNumber } from "../typings";
import Block from "./Block";

async function getBlockObjects(): Promise<BlockType[]> {
  const blockNum: number = await getLatestBlockNumber();
  let array: BlockType[] = [];
  for (var i = blockNum; i >= blockNum - 2; i--) {
    const block: BlockType = await getBlock(i);
    array.push(block);
  }
  return array;
}

export default async function BlockTab() {
  const blockArray = await getBlockObjects();

  return (
    <div className="mx-4 mt-4 flex flex-col min-w-0 mb-4  break-words bg-gray-800  shadow-lg rounded">
      <div className="rounded-t mb-0 px-0 border-0">
        <div className="flex flex-wrap items-center px-4 py-2">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-base text-gray-200">
              Latest Blocks
            </h3>
          </div>
          <div className="relative w-full max-w-full flex-grow flex-1 text-right">
            <button
              className="bg-base2 text-gray-200 active:bg-base3  active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              All Blocks
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4 px-4 justify-start">
        {blockArray.map((blocks: BlockType, i) => (
          <Block key={i} blockObject={blocks} />
        ))}
      </div>
    </div>
  );
}
