import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import reactPhoto from './assets/react.svg'
import myPic from '/vite.svg'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <img src={reactPhoto}/>
    <img src={myPic}/>
  </StrictMode>,
)
