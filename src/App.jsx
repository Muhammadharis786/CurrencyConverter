import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([])
  let currency = 'usd'


  let datas = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
  useEffect(() => {
    fetch(datas).then(
      Response => Response.json()
    ).then((data) => {
      setData(data.usd.pkr)
      console.log(data)
    }).catch((err) => {
      console.log(err.message)  
    })




  }, [datas])


  return (
    <>
      <div className="w-[100vw] font-geologica h-[100vh] bg-gray-900   flex-wrap">
        <div>
          <h1 className="text-[50px] text-center font-bold  text-yellow-400">Curerncy Converter irani</h1>
        </div>


        <div className=" flex items-center">
          <div className="block  text-white">
            <label htmlFor="han">Enter Currency:</label>
            <input type="text" id="han" />
          </div>
          <h1 className="bg-white p-2 mr-5 text-black rounded-lg">USD To INR:</h1>
          <h3 className=" text-white" >{JSON.stringify(data)}</h3>

          <select name="" id="">
            <option value="usd">USD</option>
            <option value="usd">INR</option>
          </select>
        </div>


      </div>
    </>
  )
}

export default App
