import { ethers } from "hardhat";
import { expect } from "chai";

describe("TokenRugChecker", function () {
  it("should analyze token and return details", async function () {
    const TokenRugChecker = await ethers.getContractFactory("TokenRugChecker");
    const tokenRugChecker = await TokenRugChecker.deploy();
    await tokenRugChecker.deployed();

    const tokenAddress = "0x..."; // Replace with mock token address
    const result = await tokenRugChecker.analyzeToken(tokenAddress);

    console.log(result);
    expect(result.tokenAddress).to.equal(tokenAddress);
  });
});
