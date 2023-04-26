import { useAccount, useDisconnect } from "wagmi";
import { Profile } from "./Profile";
import { Vertical } from "@/ui/Vertical";

export function BaseStack() {
  const { address, isConnected } = useAccount();

  return (
    <div className="text-center w-full min-h-screen p-4">
      {!isConnected ? (
        <Vertical className="h-full p-20">
          <div className="text-lg mb-4">Connect your Wallet!</div>
          <div className="text-md">
            You need to be connected to use the coinshield wallet
          </div>
        </Vertical>
      ) : (
        <Profile address={address} />
      )}
    </div>
  );
}
