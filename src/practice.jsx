import { useEffect, useState } from "react";
import CurrencyInfo from "./CurrencyInfo";

function MyAPP() {
  const [rate, setRate] = useState(0);
  const [to, setTo] = useState("pkr");
  const [from, setFrom] = useState("usd");
  const [convert, setConvert] = useState(1);
  const [toValue, setToValue] = useState(1);
  const [lastChanged, setLastChanged] = useState("from"); // Track the last changed input

  let Data = CurrencyInfo(from);
  let CurrenciesNames = Object.keys(Data);

  const rates = Data[to];

  // Effect to update the 'convert' value when the 'toValue' changes (only if lastChanged is 'to')
  useEffect(() => {
    if (lastChanged === "to") {
      setConvert((toValue / rates).toFixed(3));
    }
  }, [toValue, rates, lastChanged]);

  // Effect to update the 'toValue' when the 'convert' value changes (only if lastChanged is 'from')
  useEffect(() => {
    if (lastChanged === "from") {
      setToValue((convert * rates).toFixed(3));
    }
  }, [convert, rates, lastChanged]);

  return (
    <>
   

      <div className="container h-[100vh]  font-geologica font-bold items-center bg-slate-800  justify-center flex-col flex">
      <h1 className="text-blue-50 text-2xl pb-12">Currency Converter irani</h1>
        <div className="p-[50px] rounded-2xl   bg-slate-900  backdrop-blur-3xl shadow-2xl">
          <h1 className="text-center font-bold text-[50px] text-white">
            {from.toUpperCase()} To {to.toUpperCase()}
          </h1>
          <div className="p-3">
            <input
              type="number"
              value={convert}
              onChange={(event) => {
                setConvert(event.target.value);
                setLastChanged("from"); // Mark this as the last changed input
              }}
              className=" shadow-2xl bg-green-600 text-white  focus:outline-none mr-12 p-3 rounded-lg"
            />
            <label htmlFor="from" className="font-bold mr-4 text-white">
              From:
            </label>
            <select
              name="from"
              className=" p-2 shadow-2xl focus:outline-none rounded-lg pr-12"
              id="from"
              value={from}
              onChange={(event) => setFrom(event.target.value)}
            >
              {CurrenciesNames.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="p-3">
            <input
              type="number"
              value={toValue}
              onChange={(event) => {
                setToValue(event.target.value);
                setLastChanged("to"); // Mark this as the last changed input
              }}
              className=" shadow-2xl bg-green-600 text-white focus:outline-none mr-12 p-3 rounded-lg"
            />
            <label htmlFor="to" className="font-bold mr-9 text-white">
              To:
            </label>
            <select
              className="  p-2 shadow-2xl focus:outline-none rounded-lg pr-12"
              name="to"
              id="to"
              value={to}
              onChange={(event) => setTo(event.target.value)}
            >
              {CurrenciesNames.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAPP;
