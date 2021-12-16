/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Tweeter, TweeterInterface } from "../Tweeter";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
    ],
    name: "Tweet",
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
    name: "tweet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101f5806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063fb46d4c514610030575b600080fd5b61004a6004803603810190610045919061011a565b61004c565b005b3373ffffffffffffffffffffffffffffffffffffffff1682826040516100739291906101a6565b60405180910390207f5e6abd5f6c4acdf3da2b8f2796424ad07183527b85db26ff4baf14f8332ae66d60405160405180910390a35050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126100da576100d96100b5565b5b8235905067ffffffffffffffff8111156100f7576100f66100ba565b5b602083019150836001820283011115610113576101126100bf565b5b9250929050565b60008060208385031215610131576101306100ab565b5b600083013567ffffffffffffffff81111561014f5761014e6100b0565b5b61015b858286016100c4565b92509250509250929050565b600081905092915050565b82818337600083830152505050565b600061018d8385610167565b935061019a838584610172565b82840190509392505050565b60006101b3828486610181565b9150819050939250505056fea2646970667358221220378b235c9022c97e3c0d277666e69aec605dd793417e44582a47ef65f0e1ce6064736f6c63430008090033";

type TweeterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TweeterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Tweeter__factory extends ContractFactory {
  constructor(...args: TweeterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Tweeter> {
    return super.deploy(overrides || {}) as Promise<Tweeter>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Tweeter {
    return super.attach(address) as Tweeter;
  }
  connect(signer: Signer): Tweeter__factory {
    return super.connect(signer) as Tweeter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TweeterInterface {
    return new utils.Interface(_abi) as TweeterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Tweeter {
    return new Contract(address, _abi, signerOrProvider) as Tweeter;
  }
}