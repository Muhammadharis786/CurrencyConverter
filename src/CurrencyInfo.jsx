
import { useEffect,useState } from "react"

function CurrencyInfo(currency){
    const [amount, setData] = useState([])
  
    let CurrencyData = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    useEffect(() => {
      fetch(CurrencyData)
        .then((res)=>res.json())
        .then((res) => setData(res[currency]))
        .catch((err) => {
        console.log(err.message)  
      })
  
  
  
  
    }, [currency])
    return amount
      

      
}
export default CurrencyInfo