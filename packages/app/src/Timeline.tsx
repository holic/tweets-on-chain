import deploys from "@chirp-city/contracts/deploys.json";
import { ChirpCity__factory } from "@chirp-city/contracts/typechain-types";
import Link from "next/link";
import { useState } from "react";

import { AccountAvatar } from "./AccountAvatar";
import { AccountName } from "./AccountName";
import { Avatar } from "./Avatar";
import { Button } from "./Button";
import { Chirp } from "./Chirp";
import { chirpCityContract } from "./contracts";
import { PendingIcon } from "./icons/PendingIcon";
import { RelativeTime } from "./RelativeTime";
import { useTimeline } from "./useTimeline";
import { useTransaction, WalletState } from "./useTransaction";
import { useWallet } from "./useWallet";

export const Timeline = () => {
  const { account, provider, connect } = useWallet();
  const chirps = useTimeline();
  const [message, setMessage] = useState("");

  const { sendTransaction, walletState, walletError } = useTransaction(
    async (provider) => {
      return chirpCityContract.connect(provider.getSigner()).chirp(message);
    }
  );

  const pending = walletState !== WalletState.idle;

  return (
    <div className="flex flex-col flex-wrap divide-y border">
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          if (await sendTransaction()) {
            setMessage("");
          }
        }}
      >
        <div className="flex flex-col gap-4 py-4">
          <div className="px-4 flex gap-4">
            {account ? <AccountAvatar address={account} /> : <Avatar />}
            <div className="flex flex-col flex-wrap w-full">
              <div className="flex text-xl py-2">
                <textarea
                  className="w-full h-16 outline-none resize-none disabled:opacity-60"
                  placeholder="What's happening?"
                  value={message}
                  onChange={(event) => {
                    setMessage(event.currentTarget.value);
                  }}
                  required
                  disabled={pending}
                />
              </div>
            </div>
          </div>
          <div className="px-4 flex gap-4 justify-between items-center flex-row-reverse">
            <Button type="submit" disabled={!message} pending={pending}>
              Chirp
            </Button>
            {walletError ? (
              <div className="px-2 py-1 text-sm text-red-500 border border-2 border-red-200 border-dashed bor">
                <strong>Error:</strong> {walletError.message}
              </div>
            ) : null}
          </div>
        </div>
      </form>
      {!chirps.length ? (
        <div className="p-10 flex items-center justify-center text-2xl text-blue-500">
          <PendingIcon />
        </div>
      ) : null}
      {chirps.map((chirp) => (
        <Chirp key={chirp.id} chirp={chirp} fullLink />
      ))}
    </div>
  );
};
