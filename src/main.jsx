import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import InputBox from  './InputBox.jsx'
import MyAPP from './practice.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<MyAPP/>
{/* <InputBox/> */}
  </StrictMode>,
)
  