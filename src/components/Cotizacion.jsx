import React from 'react'
import { Resultado, Texto, Precio, Icon } from '../UI/Styles';
const Cotizacion = ({cotizacion}) => {
    if(!cotizacion.PRICE) return null; // si la propiedad PRICE no existe, no se renderiza nada
  
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR,IMAGEURL, LASTUPDATE} = cotizacion;
  
    return (
      <Resultado>
        <Icon src={`https://cryptocompare.com/${IMAGEURL}`} alt="" />
        <Precio>Precio: <span>{PRICE}</span></Precio>
        <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}%</span></Texto>
        <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
      </Resultado>
    );
  };
export default Cotizacion