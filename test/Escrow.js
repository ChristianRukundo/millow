const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Escrow", () => {
  it("saves the constract test", async () => {
    const RealEstate = await ethers.getContractFactory("RealEstate");
    const realEstate = await RealEstate.deploy();

    console.log(realEstate.address);
  });
});
