import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { createPost } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SimpleForm from '../components/create-post-form'



class PostForm extends Component {
    
     render() {
        
        return (
            <div>
                <h1 className="display-4">Création d'un Post</h1>
                <SimpleForm onSubmit={this.createPost.bind(this)} />
            </div>
        )
    }

    createPost(values) {
        this.props.createPost(values)
        this.props.history.push('/')
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({createPost}, dispatch)
})

export default connect(null, mapDispatchToProps)(PostForm)