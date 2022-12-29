const hre = require("hardhat");

const CONTACT_ADDR = "0xe8ee6004B97355a6E620fB563c0ED7Ef6B463b05";
const WINNER_ADDR = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";
async function main() {
  //const winner = await hre.ethers.getContractAt("Winner", WINNER_ADDR);
  const contact = await hre.ethers.getContractAt("Contact", CONTACT_ADDR);
  contact.callAttempt(WINNER_ADDR);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
