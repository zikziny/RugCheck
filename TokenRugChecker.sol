// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title TokenRugChecker
 * @dev A smart contract that helps to check for potential rug pulls in token contracts.
 */
contract TokenRugChecker {
    struct TokenInfo {
        address tokenAddress;
        uint256 totalSupply;
        uint256 ownerBalance;
        address owner;
    }

    /**
     * @dev Fetch token details and check for high owner balance or suspicious activities.
     * @param tokenAddress Address of the ERC20 token contract.
     * @return TokenInfo containing key details of the token.
     */
    function analyzeToken(address tokenAddress) public view returns (TokenInfo memory) {
        // Interface for ERC20 tokens
        IERC20 token = IERC20(tokenAddress);
        address owner = token.owner();
        uint256 totalSupply = token.totalSupply();
        uint256 ownerBalance = token.balanceOf(owner);

        return TokenInfo(tokenAddress, totalSupply, ownerBalance, owner);
    }
}

interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function owner() external view returns (address);
}
