import React from "react";

class Card extends React.Component{
    render(){
        return (
            <div>
            <img src='https://app.betrybe.com/static/media/fundamentals.d4ce6da9.svg'/>
            <p>Fundamentos</p>
            <button>Adicionar Ao Carrinho</button>
            </div>
        )
    }
}

export default Card