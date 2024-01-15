import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './components/Card.jsx'

let arr=[1,2,3];
let obj={
  id:1,
  roll:7,
  year:"2025"
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Card name="Soumya" myArr={arr} myObj={obj} btn="READ"/>
    <App />
    <Card name="Soumyajit Ghosh" btn="WRITE" temp="Top 0.0001%"/>
    
    </>
    
    
  </React.StrictMode>,
)
