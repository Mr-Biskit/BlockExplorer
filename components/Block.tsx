import React from "react";
import { BlockType } from "../typings";
import { getTimeSince } from "../lib/conversions";
import Link from "next/link";

export default function Block({ blockObject }: { blockObject: BlockType }) {
  const blockNum = blockObject.number;

  return (
    <div className=" flex  pt-2 w-full bg-gray-600  mx-1 rounded shadow-lg border-primary border border-l-8 my-1">
      <div className="flex flex-col w-full">
        <Link href={`/blocks/${blockNum}`} className="text-lg text-white px-4">
          {blockObject.number}
        </Link>
        <div className=" bg-drkgrey flex w-full flex-full flex-col">
          <div className="flex flex-wrap items-center px-4 py-2">
            <span className="text-primary text-sm relative w-full max-w-full flex-grow flex-1">
              {blockObject.transactions.length} Transactions
            </span>
            <span className="text-sm text-primary text-right relative w-full max-w-full flex-grow flex-1 ">
              {getTimeSince(blockObject.timestamp)}
            </span>
          </div>
          <div className="flex flex-wrap items-center px-4 py-1">
            <span className="text-primary text-sm relative w-full max-w-full flex-grow flex-1">
              Validator
            </span>
            <a className="text-sm text-primary text-right relative w-full max-w-full flex-grow flex-1">
              {blockObject.miner}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
