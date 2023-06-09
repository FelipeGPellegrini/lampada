import { useEffect, useState } from 'react'
import desligada from '../../assets/desligada.jpg'
import ligada from '../../assets/ligada.jpg'
import quebrada from '../../assets/quebrada.jpg'

import './style.css'

const Lampada = () => {
  const [lampAtual, setLampAtual] = useState(desligada)
  const [contador, setContador] = useState(0)
  const [buttonOff, setButtonOff] = useState(false)

  useEffect(() => {
    if (contador >= 3) {
      setLampAtual(quebrada)
      setContador(0)
      setButtonOff(true)
    }
  }, [contador]);

  return (
    <>
      <div>
        <img onClick={() => setContador(contador + 1)} src={lampAtual} alt="Lâmpada desligada" />
      </div>
      <div className='containerButtons'>
        <button disabled={buttonOff} className='btn' onClick={() => setLampAtual(ligada)}>Ligar</button>
        <button disabled={buttonOff} className='btn' onClick={() => setLampAtual(desligada)}>Desligar</button>
      </div>
    </>
  )

}

export default Lampada