import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

const validate = (values) => {
  const errors = {}

  if(!values.title){
    errors.title = "Ce champs est requis !"
  }
  if(!values.content){
    errors.content = "Ce champs est requis !"
  }
  if(!values.author){
    errors.author = "Ce champs est requis !"
  }
  return errors
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} className="form-control"/>
      {touched && ((error && <div role="alert" className="alert alert-danger alert-form">{error}</div>))}
    </div>
  </div>
)

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field name="title" component={renderField} type="text" label="Titre"/>
      </div>
      <div className="form-group">
        <Field name="content" component={renderField} type="text" label="Contenu"/>
      </div>
      <div className="form-group">
        <Field name="author" component={renderField} type="text" label="Auteur"/>
      </div>

      <button className="btn btn-primary button_space" type="submit" disabled={submitting}>Envoyer</button>
      <button className="btn btn-warning button_space" type="button" disabled={pristine || submitting} onClick={reset}>
          Reset
      </button>
      
      <Link to={"/"}><button className="btn btn-danger button_space">Retour</button></Link>

    </form>
  )
}

export default reduxForm({
  form: 'simple',
  validate
})(SimpleForm);
