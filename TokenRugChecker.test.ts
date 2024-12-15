import { ethers } from "hardhat";
import { expect } from "chai";

describe("TokenRugChecker", function () {
  let tokenRugChecker: any;

  beforeEach(async () => {
    const TokenRugChecker = await ethers.getContractFactory("TokenRugChecker");
    tokenRugChecker = await TokenRugChecker.deploy();
    await tokenRugChecker.deployed();
  });

  it("should analyze token and return details", async function () {
    const tokenAddress = "0x..."; // Replace with mock token address
    const result = await tokenRugChecker.analyzeToken(tokenAddress);

    console.log(result);
    expect(result.tokenAddress).to.equal(tokenAddress);
  });

  it("should check liquidity and return status", async function () {
    const poolAddress = "0x..."; // Replace with mock pool address
    const tokenAddress = "0x..."; // Replace with mock token address
    const liquidityInfo = await tokenRugChecker.checkLiquidity(poolAddress, tokenAddress);

    console.log(liquidityInfo);
    expect(liquidityInfo.sufficientLiquidity).to.be.a("boolean");
  });

  it("should analyze ownership distribution", async function () {
    const tokenAddress = "0x..."; // Replace with mock token address
    const topHolders = ["0x...", "0x..."]; // Replace with mock addresses
    const distribution = await tokenRugChecker.checkOwnershipDistribution(tokenAddress, topHolders);

    console.log(distribution);
    expect(distribution.topHolders).to.have.members(topHolders);
  });
});
