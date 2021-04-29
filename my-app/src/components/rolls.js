import React, { Component } from 'react';

class Rolls extends Component{   
    constructor(props){
        super(props);
        this.state = {
            numberOfRolls: 1,
            lancer: [],
            dices: 5,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({ numberOfRolls: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        const lancer = this.state.lancer.concat();
        const numberOfRolls = this.state.numberOfRolls;
        lancer.push(numberOfRolls);
        this.setState({lancer: lancer});
    }
    render(){
        const {numberOfRolls} = this.state ;
        
        return(
            <React.Fragment>
                {JSON.stringify(this.state)}
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre de lancers</label>
                        <input  type="number" className="form-control" id="name" onChange={this.handleChange} value={numberOfRolls}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Ajouter</button>
                </form> 
            </React.Fragment>
        );
    }
}
export default Rolls;