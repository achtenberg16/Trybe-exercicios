import React from 'react';
import Header from './Header';
import Task from './List';
 
class Page extends React.Component{
 render(){
   return(
     <div>
       <Header></Header>
       <ul>
        <h2>Atividades</h2>
       <Task></Task>
       </ul>
     </div>
   )
 }
}

export default  Page
