import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const AppNavBar = (props:any) => {
 

  return (
    <h1>Atividade API</h1>
  )
}

const AppUFLista = (props:any) => {
  
  return (
    <>
      <ul>
        {/* conversão JSX */} {props.ufs.map((item : any) => (<button key={item.sigla} onClick={(e) => props.mudar(item)}>{item.sigla}</button>))}
      </ul>
    </>
  )
}
const AppUFDetalhe = (props: any) => {
//  const [uf, setUF] = useState({sigla, nome});

  return (
    <div className="card">
      <p>{props.uf.sigla}</p>
      <p>{props.uf.nome}</p>
    </div>
  )

}


function App() {
  const [uf, setUF] = useState({sigla: "RN", nome: "Rio Grande do Norte"});
  const [ufs, setUfs] = useState([{sigla : 'RN', nome: "Rio Grande do Norte"}, {sigla: 'CE', nome: "Ceará"}, {sigla:'PA', nome: "Paraíba"}]);
  return (
    <>
      <AppNavBar mudar={setUfs}/>

      <AppUFLista ufs= {ufs} mudar={setUF}/>

      <AppUFDetalhe uf={uf} />
    </>
  )
}

export default App
