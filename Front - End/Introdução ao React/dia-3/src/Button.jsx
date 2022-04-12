import React from "react";

class Button extends React.Component{
 constructor(){
   super();
   
    this.State = {
      NumeroDeClicks: 0
    } 
   this.ChangeButtonCollor = this.ChangeButtonCollor.bind(this)
 };
  
 ChangeButtonCollor(){
  
  let clicks2 = this.state ;
  clicks2 =+ 1;
  console.log(clicks2)


  //bug que quero entednder
  //  console.log(this.State.NumeroDeClicks, "antes da const")
  //  const clicks = this.State.NumeroDeClicks += 1;
  //  console.log(clicks, "depois da const")
 
 }

  render(){
    return(
      <button onClick={this.ChangeButtonCollor}>{this.State.NumeroDeClicks}</button>
    )
  }
}

export default Button;