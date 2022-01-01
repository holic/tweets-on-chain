/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ChirpCityInterface extends utils.Interface {
  functions: {
    "chirp(string)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "chirp", values: [string]): string;

  decodeFunctionResult(functionFragment: "chirp", data: BytesLike): Result;

  events: {
    "ChirpCityMessage(address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChirpCityMessage"): EventFragment;
}

export type ChirpCityMessageEvent = TypedEvent<
  [string, string],
  { from: string; message: string }
>;

export type ChirpCityMessageEventFilter =
  TypedEventFilter<ChirpCityMessageEvent>;

export interface ChirpCity extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ChirpCityInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    chirp(
      message: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  chirp(
    message: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    chirp(message: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ChirpCityMessage(address,string)"(
      from?: string | null,
      message?: null
    ): ChirpCityMessageEventFilter;
    ChirpCityMessage(
      from?: string | null,
      message?: null
    ): ChirpCityMessageEventFilter;
  };

  estimateGas: {
    chirp(
      message: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    chirp(
      message: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
