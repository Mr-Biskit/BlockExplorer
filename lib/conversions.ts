import { Utils } from "alchemy-sdk";
import { BigNumber } from "../typings";

export const getTimeSince = (timestamp: number) => {
  // Calculate the time difference between the timestamp and the current time
  const timeDifference = Math.floor((Date.now() - timestamp * 1000) / 1000);
  // If the time difference is less than 60 seconds, return the time difference followed by "seconds ago"
  if (timeDifference < 60) {
    return `${timeDifference} seconds ago`;
  }

  // If the time difference is less than 3600 seconds (60 minutes), return the time difference in minutes followed by "minutes ago"
  if (timeDifference < 3600) {
    return `${Math.floor(timeDifference / 60)} minutes ago`;
  }

  // If the time difference is less than 86400 seconds (24 hours), return the time difference in hours followed by "hours ago"
  if (timeDifference < 86400) {
    return `${Math.floor(timeDifference / 3600)} hours ago`;
  }

  // If the time difference is more than or equal to 86400 seconds (24 hours), return the time difference in days followed by "days ago"
  return `${Math.floor(timeDifference / 86400)} days ago`;
};

export const convertTimestampToDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return date.toUTCString();
};

export const formatBigNumberToGwei = (bigNumber: BigNumber) => {
  const gwei = Utils.formatUnits(bigNumber._hex, "gwei");
  return gwei;
};

export const formatGasString = (str: string) => {
  let formattedString = "";
  let counter = 0;
  for (let char of str) {
    if (counter === 3) {
      formattedString += ",";
      counter = 0;
    }
    formattedString += char;
    counter++;
  }
  return formattedString;
};
