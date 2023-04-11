import React,{useEffect, useState} from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { PrimaryButton } from '../UI/Styles'
import divisas from '../utils/divisas';
import Message from '../utils/Message';

const Form = ({setDivisa}) => {  
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

    const [moneda ,SelectMonedas] = useSelectMonedas('Select moneda', divisas);
    const [cripto ,SelectCripto] = useSelectMonedas('Select Cripto', criptos);
    useEffect(() => {
      const ConsultarAPI = async ()=>{
        const URL = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
        const respuesta = await fetch(URL)
        const resultado = await respuesta.json()

        const arrayCriptos = resultado.Data.map((cripto)=>{

          const objeto = {
            id: cripto.CoinInfo.Name,
            nombre: cripto.CoinInfo.FullName,
          }
          return objeto;
        })

        setCriptos(arrayCriptos)
      }
      ConsultarAPI()
    }, [])
    
const handleSubmit = (e)=>{
  e.preventDefault();

  if (([cripto, moneda]).includes('')) {
   
    setError(true)
    return
  }
  setDivisa({
    moneda,
    cripto
  })
}

  return (
    <>
    {error && <Message>todos los campos son obligatorios</Message>}
    <form onSubmit={handleSubmit}>
        <SelectMonedas/>
        <SelectCripto/>
        <PrimaryButton type="submit" value='cotizar' />
    </form>
    </>
  )
}

export default Form;