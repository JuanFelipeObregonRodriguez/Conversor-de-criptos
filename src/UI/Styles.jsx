import styled from 'styled-components';



export const Container = styled.div`
width: 900px;
display: flex;
flex-direction: row;
justify-content: center;
margin-top: 80px;
margin-left: 200px;
column-gap: 3rem;
@media(max-width: 992px){
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 2rem;
    width: 90%;
    margin-left: 30px;
}
`
export const H1 = styled.h1`
font-family: 'Lato', sans-serif;
font-family: 'Ubuntu', sans-serif;
color: #fff;
text-align: center;
font-weight: 700;
font-size: 34px;
border-bottom: 2px solid #66a2fe;
`;
export const Img = styled.img`
max-width: 400px;
width: 80%;
max-height: 400px;
`
export const PrimaryButton = styled.input`
background-color: #9497ff;
border: none;
width: 100%;
padding: 10px;
color: #fff;
font-weight: 700;
text-transform: uppercase;
font-size: 20px;
border-radius: 5px;
transition: background-color .3s ease;
margin-top: 20px;
&:hover{
    background-color: #7a7dfe;
    cursor: pointer;
}
`;

export const Label = styled.label`

color: #fff;
display: block;
font-family: 'lato', sans-serif;
font-size: 24px;
font-weight: 700;
margin: 15px 0;
`;

export const Select = styled.select`
width: 100%;
font-size: 18px;
padding: 14px;
border-radius: 10px;
margin-bottom: 20px;
`;
export const P = styled.p`
width: 90%;
background-color: #b7322c;
color: #fff;
padding: 12px;
margin-left: 8px;
font-size: 14px;
text-transform: uppercase;
font-family: 'lato', sans-serif;
font-weight: 700;
text-align: center;
align-items: center;
`;

export const Resultado = styled.div`
 font-family: 'lato', sans-serif;
 color: #fff;
 display: flex;
 margin-top: 20px;
 flex-direction: column;
 align-items: center;
 text-align: center;
`
export const Precio = styled.p`
font-size: 25px;
span{
    font-weight: 700;
}
`
export const Texto = styled.p`
font-size: 18px;
span{
    font-weight: 700;
}

`
export const Icon = styled.img`
display: block;
width: 100px;
`
