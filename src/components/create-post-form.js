import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Titre</label>
        <Field className="form-control" name="title" component="input" type="text"/>
      </div>
      <div className="form-group">
        <label>Contenu</label>
        <Field className="form-control" name="content" component="input" type="text"/>
        </div>
        <div className="form-group">
        <label>Auteur</label>
        <Field className="form-control" name="author" component="input" type="text"/>
        </div>
        <button className="btn btn-primary button_space" type="submit" disabled={pristine || submitting}>Envoyer</button>
        <button className="btn btn-warning button_space" type="button" disabled={pristine || submitting} onClick={reset}>
          Reset
        </button>
        <Link to={"/"}><button className="btn btn-danger button_space">Retour</button></Link>

    </form>
  )
}

export default reduxForm({
  form: 'simple',
})(SimpleForm);
