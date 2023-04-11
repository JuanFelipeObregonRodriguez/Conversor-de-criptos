import React,{useState, useEffect} from "react";
import { H1, Container, Img } from "./UI/Styles";
import ImagenCripto from "./assets/img/imagen-criptos.png";
import Form from './components/Form'
import Cotizacion from "./components/Cotizacion";
import Spinner from "./components/Spinner";
const App = () => {

  const [divisa, setDivisa] = useState({});
  const [cotizacion, setCotizacion] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
   if(Object.keys(divisa).length > 0){
    const cotizarCripto = async ()=>{
      setLoading(true);
      setCotizacion({});
      const {cripto, moneda} = divisa;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;

      const result = await fetch(url);
      const response  = await result.json();

      setCotizacion(response.DISPLAY[cripto][moneda])
      setLoading(false)
    }
    cotizarCripto();  
   }
  },[divisa])
  return (
    <Container>
      <Img src={ImagenCripto} alt="cripto"/>
     <div>
      <H1>Conversor de criptos</H1>
      <Form setDivisa={setDivisa}/>
      {
        loading && <Spinner />
      }
      {
        cotizacion && cotizacion.PRICE && <Cotizacion cotizacion={cotizacion}/>
      }
      </div>
    </Container>
  );
};

export default App;
