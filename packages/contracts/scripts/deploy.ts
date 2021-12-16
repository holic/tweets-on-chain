import fs from "fs/promises";
import { ContractFactory } from "ethers";
import { Tweeter__factory } from "../typechain-types";
import { ethers, network } from "hardhat";

const exists = (path: string) =>
  fs
    .access(path)
    .then(() => true)
    .catch(() => false);

const deployContract = async (factory: ContractFactory) => {
  const addressesPath = `${__dirname}/../addresses.json`;
  const addressBook = (await exists(addressesPath))
    ? JSON.parse((await fs.readFile(addressesPath)).toString())
    : {};

  const addresses = addressBook[network.name] || {};
  const contractName = factory.constructor.name.replace(/__factory$/, "");

  if (addresses[contractName] && !process.env.REDEPLOY_CONTRACTS) {
    throw new Error(
      `Contract ${contractName} has already been deployed to ${addresses[contractName]}. Use \`REDEPLOY_CONTRACTS=1\` to deploy a new contract and override the stored address.`
    );
  }

  const contract = await factory.deploy();
  console.log(contractName, "deployed at", contract.address);
  console.log("Waiting for confirmation…");
  await contract.deployed();

  await fs.writeFile(
    addressesPath,
    JSON.stringify(
      {
        ...addressBook,
        [network.name]: {
          ...addresses,
          [contractName]: contract.address,
        },
      },
      null,
      2
    )
  );
};

async function start() {
  const [deployer] = await ethers.getSigners();
  await deployContract(new Tweeter__factory(deployer));

  console.log("Done!");
}

start().catch((e: Error) => {
  console.error(e);
  process.exit(1);
});
