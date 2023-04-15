import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
import { network } from "hardhat";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  mocha: {
    timeout: 100000, // sets the timeout to 10 seconds
  },
};

export default config;
