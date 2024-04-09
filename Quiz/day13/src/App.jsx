import "./App.css";
import { useState } from "react";

function CurrenyInput({ currency, value, onChange }) {
  return (
    <div>
      <label>{currency}:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(currency, e.target.value)}
      />
    </div>
  );
}

const ExchangeRate = 1355;
function App() {
  const [state, setState] = useState({
    krw: 0,
    usd: 0,
  });

  const onChange = (currency, value) => {
    console.log({ currency, value });
    if (currency === "krw") {
      setState({
        krw: value,
        usd: value / ExchangeRate,
      });
    } else {
      setState({
        krw: value * ExchangeRate,
        usd: value,
      });
    }
  };

  return (
    <>
      <div>
        <h1>환율 변환기 (KRW - USD)</h1>
        <CurrenyInput currency={"krw"} value={state.krw} onChange={onChange} />

        <CurrenyInput currency={"usd"} value={state.usd} onChange={onChange} />
      </div>
    </>
  );
}

export default App;

/**

import "./App.css";
import { useState } from "react";

function CurrencyInput({ currency, value, onChange }) {
  return (
    <div>
      <label>{currency}:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(currency, e.target.value)}
      />
    </div>
  );
}

const EXCHANGE_RATE = 1355;
function App() {
  const [state, setState] = useState({
    krw: 0,
    usd: 0,
  });

  const onChange = (currency, value) => {
    console.log({ currency, value });
    if (currency === "krw") {
      setState({
        krw: value,
        usd: value / EXCHANGE_RATE,
      });
    } else {
      setState({
        krw: value * EXCHANGE_RATE,
        usd: value,
      });
    }
  };

  return (
    <>
      <div>
        <h1>환율 변환기 (KRW - USD)</h1>
        <CurrencyInput currency={"krw"} value={state.krw} onChange={onChange} />

        <CurrencyInput currency={"usd"} value={state.usd} onChange={onChange} />
      </div>
    </>
  );
}

export default App;


 */
