import React from "react";
import './content.css'
const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

function formatContent ({conteudo, bloco, status}) {
 return <p>O conteúdo é: {conteudo}
  Status: {status}
  Bloco: {bloco}</p>
}

  class Content extends React.Component {
      render(){
       return(<div>
       {conteudos.map((element) => formatContent(element))}
       </div>)
      }
  }

  export default Content