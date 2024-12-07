const RugCheck = await ethers.getContractFactory("TokenRugChecker");
const rugCheck = await RugCheck.attach("<DEPLOYED_CONTRACT_ADDRESS>");
const result = await rugCheck.analyzeToken("<TOKEN_CONTRACT_ADDRESS>");
console.log(result);
