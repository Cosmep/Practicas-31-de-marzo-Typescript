import './style.css'
//import { setupCounter } from './counter.ts'
import './Componets/calIMC.ts'
import './Componets/usuario.ts'
import './Componets/Destructuracion.ts'
import './Componets/InfoProducto.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
     <h1>HOLA MUNDO</h1>
        <hr />
        <p>Este es mi proyecto de TypeScript</p>
        <hr />
        <p>CALCULADORA</p>
`

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
