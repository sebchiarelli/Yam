import React, { Component } from 'react';


class Dès extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            users : [],
            message : ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const { value } = event.target;

        this.setState({ value : value.toUpperCase(), message : '' });
    }

    handleSubmit(event){
        event.preventDefault();

        const { value: user, users } = this.state;

        // vérification erreurs formulaires user déjà dans la liste
        if(users.includes(user)){
            this.setState({
                message : `Attention l'utilisateur  ${user} existe déjà dans la liste`
            });

            return;
        }

         // vérification erreurs formulaires champ vide
         if(user.trim() === ''){
            this.setState({
                message : `Attention votre champ est vide`
            });

            return;
        }

        users.push(user);

        this.setState({
            users : users,
            message : `L'utilisateur ${user} a bien été ajouté dans la liste`
        });
    }
    
    render(){
        // vous pouvez renommer une constante value en name ci-dessous 
        const { value: name, message, users  } = this.state ;
        
        // React.Fragment permet de créer un noeud virtuel pour mettre deux éléments frères côte à côte 
        // en React vous devez insérer vos éléments dans des noeuds
        return(
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input  type="text" className="form-control" id="name" value={name} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Ajouter</button>
                </form> 
                {message !== '' && (
                    <p>{message}</p>
                ) }

                {users.length > 0 && (
                    <Users users={users} />
                )}
            </React.Fragment>
        );
    }
}
class Users extends React.Component{


    render(){
        const { users } = this.props;
        return (
            <ul>
                    {users.map((user, i) => <li key={i}>{user}</li>)}
            </ul>
        )
    }
}


export default Dès;
