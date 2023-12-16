import { Abi, GetContractReturnType, getContract } from "viem";
import { usePublicClient, useWalletClient } from "wagmi";
import client from "../client";
import { useEffect, useState } from "react";

import ens from "./ens";

const getContracts = () => ({
  ens: viemContract(ens),
});

// partition
function viemContract<T extends Abi, P extends `0x${string}`>(
  contractData: Readonly<{
    abi: T;
    address: P;
  }>
): GetContractReturnType<T, typeof client, typeof client, P> {
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();

  const [contract, setContract] = useState(
    getContract({
      abi: contractData.abi,
      address: contractData.address,
      walletClient: walletClient || publicClient,
      publicClient,
    })
  );

  useEffect(() => {
    console.log("updating contract ", contract.address);
    setContract(
      getContract({
        abi: contractData.abi,
        address: contractData.address,
        walletClient: walletClient || publicClient,
        publicClient,
      })
    );
  }, [walletClient, publicClient]);

  return contract;
}

export default getContracts;

export type ContractType = ReturnType<typeof getContracts>[keyof ReturnType<
  typeof getContracts
>];
