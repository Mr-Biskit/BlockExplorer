import React from "react";
import { BlockType } from "../../../typings";
import { getBlock, getLatestBlockNumber } from "../../../lib/alchemySDK";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import {
  convertTimestampToDate,
  formatBigNumberToGwei,
} from "../../../lib/conversions";
import Link from "next/link";

type PageProps = {
  params: {
    blockNum: string;
  };
};

export default async function page({ params: { blockNum } }: PageProps) {
  const latestBlock = await getLatestBlockNumber();
  console.log(latestBlock);
  const blockNumber = parseInt(blockNum);
  const block: BlockType = await getBlock(blockNumber);
  const nextPage = blockNumber + 1;

  const prevPage = blockNumber - 1;

  return (
    <>
      <div className="h-full mx-4 mt-3 mb-10 md:mx-8 bg-base2 rounded-lg p-2">
        <div className="h-full mt-2 mb-4 md:mx-8 bg-drkgrey rounded-lg p-3">
          <div className="flex justify-between">
            <div className="text-3xl font-bold text-primary p-3">
              Block Details
            </div>

            <div className="flex text-primary text-xl justify-center items-center">
              <Link href={`/blocks/${prevPage}`}>
                <ArrowLeftIcon className="h-12 w-12 text-primary p-3 hover:animate-pulse" />
              </Link>

              <div>{block.number}</div>

              <Link href={`/blocks/${nextPage}`}>
                <ArrowRightIcon className="h-12 w-12 text-primary p-3 justify-center hover:animate-pulse" />
              </Link>
            </div>
          </div>

          <dl className="mb-3 text-[12px] flex">
            <dt className="p-3 text-base2">Block Height</dt>
            <dd className="p-3 text-primary">{block.number}</dd>
          </dl>

          <dl className="mb-3 text-[12px] flex">
            <dt className="p-3 text-base2">Timestamp</dt>
            <dd className="p-3 text-primary">
              {convertTimestampToDate(block.timestamp)}
            </dd>
          </dl>

          <dl className="mb-3 text-[12px] flex">
            <dt className="p-3 text-base2">Transactions</dt>
            <dd className="p-3 text-primary">
              {block.transactions.length} Transactions
            </dd>
          </dl>

          <dl className="mb-3 text-[12px] flex">
            <dt className="p-3 text-base2">Miner</dt>
            <dd className="p-3 text-primary">{block.miner}</dd>
          </dl>

          <dl className="mb-3 text-[12px] flex">
            <dt className="p-3 text-base2">Hash</dt>
            <dd className="p-3 text-primary">{block.hash}</dd>
          </dl>

          <dl className="mb-3 text-[12px] flex">
            <dt className="p-3 text-base2">Difficulty</dt>
            <dd className="p-3 text-primary">{block.difficulty}</dd>
          </dl>

          <dl className="mb-3 text-[12px] flex">
            <dt className="p-3 text-base2">Gas Used</dt>
            <dd className="p-3 text-primary">
              {formatBigNumberToGwei(block.gasUsed)} ETH
            </dd>
          </dl>

          <dl className="mb-3 text-[12px] flex">
            <dt className="p-3 text-base2">Parent Block</dt>
            <dd className="p-3 text-primary">{block.parentHash}</dd>
          </dl>
        </div>
      </div>

      <div className="h-full mx-4 mt-3 mb-10 md:mx-8 bg-base2 rounded-lg p-2">
        <div className="w-full bg-mdgrey rounded-md p-4 flex  justify-between">
          <h1 className="text-3xl font-bold text-primary">Transactions</h1>
          <div className="flex text-primary space-x-2 items-center justify-center">
            <div>Page 1</div>
          </div>
        </div>
      </div>
    </>
  );
}
