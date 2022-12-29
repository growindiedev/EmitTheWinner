const { expect, assert } = require("chai");

describe("Test Winner Locally", function () {
  it("Winner contract emits winner event", async function () {
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
