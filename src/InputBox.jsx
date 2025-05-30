
import { useEffect, useState } from "react"
import CurrencyInfo from "./CurrencyInfo"

function Inputbox({

  CurrencyRate,
  Currencyoptions = [],
  onCurrencyChange,
  fromValue,
}) {
  return (

    <>
 
      <h1 className=" text-yellow-300 ">Currecny Converter</h1>
      <div>
      <input type="number" className=" border-2 border-red-950" readOnly
        value={CurrencyRate}


      />
        </div>
        <div  className="p-4 text-[18px] font-bold">
      <label htmlFor="" className="mr-4 ">From</label>
      <select name="from" id="from"  
      value={fromValue}
      onChange={onCurrencyChange}
      className=" focus:outline-none bg-cyan-900  text-yellow-300 rounded-md
       ">
        {Currencyoptions.map((items) => (
          <option value='usd' key={items}>{items}</option>
        ))}
      </select>
      </div>
    </>
  )


}
function Inputbox2({

  Currencyoptions = [],
  onCurrencyChange,
  ToValue,
}) {
  return (

    <>


<div className="p-4 text-[18px] font-bold ">
    <label htmlFor="to"  className="mr-8 " >To:</label>
      <select name="to" id="to"   
      value={ToValue}
      onChange={onCurrencyChange}
      className=" focus:outline-none bg-cyan-900  text-yellow-300 rounded-md">
        {Currencyoptions.map((items) => (
          <option value='usd' key={items}>{items}</option>
        ))}
      </select>
      </div>
    </>
  )


}

function MyApp() {
  const [amount, SetAmount] = useState(10)
  const [from, fromAmount] = useState('usd')
  const [to, ToAmount] = useState('pkr')


  const currencyData = CurrencyInfo(from)
  const opt = Object.keys(currencyData)

  useEffect(()=>{
const rate = currencyData[to]
SetAmount(rate)


  },[currencyData,to])
  // currencyData[from][to] its means usd.pkr = means usd to pkr == 288 oct 2024
  // useEffect(() => {
  //   // Ensure that both 'from' and 'to' currencies are valid before calculating the rate
  //   if (currencyData[from] && currencyData[from][to]) {
  //     const rate = currencyData[from][to];
  //     SetAmount(rate);
  //   } 
  // }, [from, to, currencyData]);
  const HandleCurrencyChange = (event)=>{
   
      if(event.target.name==='from'){
        fromAmount(event.target.value)
      }
      if(event.target.name === 'to'){
        ToAmount(event.target.value)
      }
  }
  return (
    <>
  <div className="h-[100vh] w-full bg-black  text-yellow-400  ">
      <div className="">

        <input type="text" name="" id="" value={to} />
        <Inputbox
          Currencyoptions={opt}
          CurrencyRate={amount}
          fromValue= {from}
          onCurrencyChange={HandleCurrencyChange}

        />

        <Inputbox2

          Currencyoptions={opt}
          ToValue={to}
          onCurrencyChange={HandleCurrencyChange}

        />
      </div>
      </div>
    </>
  )


}

export default MyApp