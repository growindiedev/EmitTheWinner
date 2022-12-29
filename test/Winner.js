const { expect, assert } = require("chai");

describe("Test Winner Locally", function () {
  it("Winner contrat emits winner event", async function () {
    const Winner = await hre.ethers.getContractFactory("Winner");
    const winner = await Winner.deploy();
    await winner.deployed;

    const Contact = await hre.ethers.getContractFactory("Contact");
    const contact = await Contact.deploy();
    await contact.deployed;

    // await expect(winner.attempt()).to.be.revertedWith(
    //   "msg.sender is equal to tx.origin'"
    // );

    await expect(contact.callAttempt(winner.address)).to.emit(winner, "Winner");
  });
});

describe("Test Winner onChain", function () {
  //Contact.sol 0xe8ee6004B97355a6E620fB563c0ED7Ef6B463b05
  //Winner 0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502

  it("Winner contrat emits winner event", async function () {
    const Winner = await hre.ethers.getContractFactory("Winner");
    const winner = await Winner.deploy();
    await winner.deployed;

    const Contact = await hre.ethers.getContractFactory("Contact");
    const contact = await Contact.deploy();
    await contact.deployed;

    await expect(contact.callAttempt(winner.address)).to.emit(winner, "Winner");
  });
});
