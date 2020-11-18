import { useDispatch, useSelector } from "react-redux";
import { reset } from 'redux-form';
import { Field, reduxForm } from 'redux-form';

function App4(props) {

  // const state = useSelector(state => state);
  const dispatch = useDispatch();

  const renderInput = (field) => {
    const { input, meta } = field;
    if (input.name === "name") {
      return (
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">{field.mylabel}</label>
          <input
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            {...input}
          />
          <small className="error">{meta.touched && meta.error ? meta.error : ""}</small>
        </div>
    ); 
    }
  };

  const renderSelectInput = (field) => {
    const { input, meta } = field;
    return (
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">{field.label}</label>
        <select
          {...input}
          className="form-control"
          id="exampleFormControlSelect1"
        >
          <option>__</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <small className="error">{meta.touched && meta.error ? meta.error : ""}</small>
      </div>
    );
  };
  const renderMessage = (field) => {
    const { input, meta } = field;
    return (
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
        <textarea
          {...input}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        />
        <small className="error">{meta.touched && meta.error ? meta.error : ""}</small>
      </div>
    );
  };
  const onSubmit = (values) => {
    console.log(values);

    setTimeout(() => {
      dispatch(reset("myForm"))
    }, 2000)
  };

  return (
    <div className="container pt-4">
      <form onSubmit={props.handleSubmit((values) => onSubmit(values))}>
        <Field
          mylabel="Name"
          name="name"
          component={renderInput}
        />
        <Field
          label="Select"
          name="age"
          component={renderSelectInput}
        /> 
        <Field
          label="Message"
          name="message"
          component={renderMessage}
        />  
        <input className="btn btn-primary" type="submit" value="submit" /> 
      </form>
    </div>
  );
};

function validate(values) {
  const errors = {};
  if (!values.name) {
    errors.name = "Field required";
  }
  if (values.age === '__') {
    errors.age = "Field required";
  }
  if (!values.message) {
    errors.message = "Field required";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "myForm"
})(App4);
