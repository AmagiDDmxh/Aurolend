const {ethers} = require("hardhat");

async function getInstance(name, address) {
    const factory = await ethers.getContractFactory(name);
    return factory.attach(address);
}


module.exports = {
    getInstance
}