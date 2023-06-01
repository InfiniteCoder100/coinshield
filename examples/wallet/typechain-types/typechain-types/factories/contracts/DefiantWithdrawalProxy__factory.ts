/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DefiantWithdrawalProxy,
  DefiantWithdrawalProxyInterface,
} from "../../contracts/DefiantWithdrawalProxy";

const _abi = [
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50607d8061001e6000396000f3fe6080604052348015600f57600080fd5b503660008037600080366000735fc8d32690cc91d4c39d9d3abcbd16989f8757075af43d6000803e8080156042573d6000f35b3d6000fdfea2646970667358221220704834c419d8764689d54ada2cea6c9fbf90a37bf5382922a45058ef8505d93464736f6c63430008120033";

type DefiantWithdrawalProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DefiantWithdrawalProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DefiantWithdrawalProxy__factory extends ContractFactory {
  constructor(...args: DefiantWithdrawalProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DefiantWithdrawalProxy> {
    return super.deploy(overrides || {}) as Promise<DefiantWithdrawalProxy>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DefiantWithdrawalProxy {
    return super.attach(address) as DefiantWithdrawalProxy;
  }
  override connect(signer: Signer): DefiantWithdrawalProxy__factory {
    return super.connect(signer) as DefiantWithdrawalProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DefiantWithdrawalProxyInterface {
    return new utils.Interface(_abi) as DefiantWithdrawalProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DefiantWithdrawalProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DefiantWithdrawalProxy;
  }
}