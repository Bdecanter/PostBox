import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostForm extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4">Création d'un Post</h1>
                <form>
                    <div className="form-group">
                        <label>Titre</label>
                        <input className="form-control" type="text"/>
                        <div></div>
                        <label>Description</label>
                        <input className="form-control" type="textarea"/>
                        <div></div>
                        <label>Auteur</label>
                        <input className="form-control" type="text"/>
                        <div></div>
                    </div>
                    <Link to={"/"} className="button_space"><button className="btn btn-danger">Retour</button></Link>
                    <button type="submit" className="btn btn-primary">Créer</button>
                </form>
            </div>
        )
    }
}

export default PostForm;