/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ChirpCity, ChirpCityInterface } from "../ChirpCity";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "ChirpCityMessage",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "chirp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610170806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806304efe1a614610030575b600080fd5b61004361003e366004610099565b610045565b005b3373ffffffffffffffffffffffffffffffffffffffff167fbaa339c6c3ec832a4191b18d05bdd9853f5c298b294dbacc56ad516928c5fb9d838360405161008d92919061010b565b60405180910390a25050565b600080602083850312156100ac57600080fd5b823567ffffffffffffffff808211156100c457600080fd5b818501915085601f8301126100d857600080fd5b8135818111156100e757600080fd5b8660208285010111156100f957600080fd5b60209290920196919550909350505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f1916010191905056fea264697066735822122047167506825e564ea7bb5d864a15ceddf20e822cea7acec17a0a7809c0ea3f3e64736f6c63430008090033";

type ChirpCityConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChirpCityConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChirpCity__factory extends ContractFactory {
  constructor(...args: ChirpCityConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ChirpCity> {
    return super.deploy(overrides || {}) as Promise<ChirpCity>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ChirpCity {
    return super.attach(address) as ChirpCity;
  }
  connect(signer: Signer): ChirpCity__factory {
    return super.connect(signer) as ChirpCity__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChirpCityInterface {
    return new utils.Interface(_abi) as ChirpCityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChirpCity {
    return new Contract(address, _abi, signerOrProvider) as ChirpCity;
  }
}
