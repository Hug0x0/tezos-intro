import { TezosToolkit } from "@taquito/taquito";
import axios from "axios";

const Tezos = new TezosToolkit('https://rpc.tzkt.io/limanet');

const BASE_URL = `https://api.coinpaprika.com/v1`;
export const fetchCoins = async () => {
  return await axios
    .get(`${BASE_URL}/coins`)
    .then((res) => res.data.slice(0, 10));
};

Tezos.contract
  .at('')
  .then((contract) => {
    print("Incrementing storage value by");
    return contract.methods.set_data(fetchCoins.toString()).send();
  })
  .then((op) => {
    print("Waiting for ${op.hash} to be confirmed...");
    return op.confirmation(3).then(() => op.hash);
  })
  .then((hash) => print("Operation injected: https://rpc.tzkt.io/limanet"))
  .catch((error) => print("Error:"));