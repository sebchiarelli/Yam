import React, { Component } from 'react';

class Lancers extends Component{   
    

    render(){
        const { lancers } = this.props;
        return (
            <ul>
                    {lancers.map((lancer, i) => <li key={i}>{lancer}</li>)}
            </ul>
        )
    }
}
export default Lancers;