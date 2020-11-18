import { useState } from "react";
import { Formik } from 'formik'

export default function App() {
  const [maxAge] = useState(80)

  function populateAgeSelect() {
    const options = []
    for (let i = 0; i <= maxAge; i++) {
      options.push(i);
    }
    return options.map(item => (
      <option key={item}>
        {item === 0 ? "___" : item}
      </option>
    ));
  }
  return (
    <div className="container" style={{marginTop: '50px'}}>
      <Formik
        initialValues={{ name: '', lastName: '', age: '', message: '' }}
        validate={values => {
          let errors = {};
          if (!values.name) {
            errors.name ="Field required!"
          }
          if (values.age!=="___") {
            if (values.age < 18) {
              errors.age = "You are to young!"
            }
          } else {
            errors.age="Field required!"
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log(values)
            setSubmitting(false)
            resetForm()
          },3000)
        }}
      >
        {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting
       }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                  type="name"
                  className="form-control"
                  id="name"
                  aria-describedby="nameHelp"
                  placeholder="Enter your first name"
                  name='name'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <small id="nameHelp" className="form-text text-muted"> {errors.name && touched.name ? errors.name : ''}</small>
            </div>
            <div className="form-group">
              <label htmlFor="lastName">email</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  aria-describedby="lastName"
                  placeholder="Enter your last name"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  name="age"
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                {populateAgeSelect()}
                </select>
                <small>{errors.age && touched.age ? errors.age : ''}</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
            </div>
            <button disabled={isSubmitting} type="submit" className="btn btn-primary">Submit</button>
          </form>
        )}
      </Formik>
      </div>
  );
}
