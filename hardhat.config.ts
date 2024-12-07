import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    base: {
      url: "https://mainnet.base.org", // Replace with Base RPC URL
      accounts: ["<YOUR_PRIVATE_KEY>"], // Add private key for deployment
    },
  },
};

export default config;
