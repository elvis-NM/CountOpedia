import React from "react";

export default class Counter extends React.Component{
   
    constructor(props){
        super(props);
        this.handleAttack = this.handleAttack.bind(this);//bind onlick event to attack method
        this.handleDefence = this.handleDefence.bind(this);//bind onlick event to attack method
        this.state ={// state is imutable and cannot be modified directly 
            count:0
        }
    }

   handleAttack(){
    this.setState((previousState) => {
        return{
            count:previousState.count +1
        }
    });
   // alert("Attack clicked");
    //this.setState({count: this.state.count +1})// modify state
   }
      
   handleDefence(){
    this.setState((previousState) => {
        return{
            count:previousState.count -1
        }
    });
    //alert("Defend clicked");
   // this.setState({count: this.state.count -1})// modify state
   }
   
  
    render(){
    return(

        <div className="row text-white">
         <h1>Counter:{this.state.count} </h1>   
         <button onClick={this.handleAttack} style={{width:"200px"}}>+1</button>
         <button onClick={this.handleDefence} style={{width: "200px"}}>-1</button>
        </div>
    );
   }
}
