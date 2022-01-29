import { useFormik } from 'formik';
import * as Yup from 'yup';

function App() {
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      status: "",
    },
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(10, "username must be having 10 character only!")
        .required("This field must required")
    }),
  })

  console.log(formik.touched);
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit} >
        <input type="text" value={formik.values.username} name='username' placeholder='username' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.username && formik.errors.username && <p style={{ color: "red" }}> formik.errors.username </p>}
        <input type="text" value={formik.values.name} name='name' placeholder='name' onChange={formik.handleChange} />
        <input type="text" value={formik.values.email} name='email' placeholder='email' onChange={formik.handleChange} />
        <input type="radio" value="single" name='status' onChange={formik.handleChange} />
        <label><strong>Single</strong></label>
        <input type="radio" value="committed" name='status' onChange={formik.handleChange} />
        <label><strong>Committed</strong></label>
        <input type="radio" value="lonely" name='status' onChange={formik.handleChange} />
        <label><strong>Lonely</strong></label>
        <button type='submit'>Submit</button>
      </form>

    </div>
  );
}

export default App;
