#### RugCheck Solidity Smart Contract

A smart contract designed to analyze ERC-20 tokens for potential rug pulls. This is in development (i.e. not extensively tested for deploying on the Ethereum mainnet or Base). It has been tested using Hardhat. [Hardhat](https://hardhat.org/).

---

#### Steps to Get Started:

1. Clone this repository and set up the project:

`git clone https://github.com/yourusername/RugCheck.git`
`cd RugCheck`
`npm install`

2. Solidity is a statically typed programming language, and you must compile the code before deploying the smart contract:

`npx hardhat run scripts/deploy.ts --network base`

3. Deploy the RugCheck smart contract to a test network:

`npx hardhat run scripts/deploy.ts --network base`

4. Use the deployed contract to analyze an ERC-20 token:

- Open the Hardhat console:
  `npx hardhat console --network base`
- Interact with the contract:

<p align="center">
   <img src="/scripts/script.js">
</p>

<strong>Features:</strong>

1. <strong>Analyze Token:</strong>

- The analyzeToken function checks for:
- Total token supply.
- Owner’s balance.
- Address of the token owner.

2. <strong>Detect Red Flags:</strong>

Helps identify risky patterns, such as excessive token ownership by a single entity, which might indicate potential rug pull risks.

7. If the majority of the DAO members who voted selected "buy_cupcakes", then the DAO
   will send 1 ether to the digital vending machine and in return the DAO will recieve one cupcake.

---

How to run tests:

1. Install project dependencies:

```
npm install

```

2. Run unit tests to verify the contract's functionality:

```
npx hardhat test test/RugCheck.test.ts
```

---

RugCheck is an experimental tool for analyzing ERC-20 tokens on Base. It provides a simple mechanism to check for potential red flags in token contracts but does not guarantee security.
