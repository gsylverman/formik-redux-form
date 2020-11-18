import { Formik } from 'formik';

export default function App3() {
  return (
    <Formik
      initialValues={{ email: "", age: '', message: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "This field is required!"
        }
        if (!values.age) {
          errors.age = "This field is required!"
        } else {
          if (values.age < 18) {
            errors.age = "You are to young"
          }
        }
        console.log(errors)
        return errors;
      }}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       })=>(
            <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <small>{errors.email && touched.email ? errors.email : ''}</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Example select</label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  name="age"
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18+</option>
                  <option>-15</option>
                </select>
                <small>{errors.age && touched.age ? errors.age : ''}</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
              </div>
              <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
          </div>
      )}
    </Formik>
  );
}
