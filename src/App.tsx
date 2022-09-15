import { useState } from "react";
import reactLogo from "./assets/react.svg";

import ECPairFactory from "ecpair";
import * as ecc from "tiny-secp256k1";
import * as bitcoin from "bitcoinjs-lib";

import "./App.css";

const ECPair = ECPairFactory(ecc);

function App() {
  const [count, setCount] = useState(0);

  const keyPair = ECPair.makeRandom();
  const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
  console.log(address);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
