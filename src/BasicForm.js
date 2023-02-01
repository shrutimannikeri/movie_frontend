import { useFormik } from 'formik';
import * as yup from 'yup';

//yup object for valuidation
const formvalidationSchema=yup.object({
  email: yup.string().min(10,"please enter longer")
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"pattern not matched"),
  password: yup.string()
  .min(7,"please enter at least 7 char")
  .max(10,"Too much password")
  .required('why not fill th password')
})

export function BasicForm() {

  //hoks for formik
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema:formvalidationSchema,
    onSubmit:(values)=>{
      console.log(values);
    }
  }
  );


  return (

    <form onSubmit={formik.handleSubmit}>
      <input
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="email"
        placeholder='Email'
        id='email'
        name="email"
        />
        <br />
        {/* formik error object */}
        {formik.touched.email && formik.errors.email ? formik.errors.email:null}
        <br />

      <input
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="password"
        placeholder='Password'
        id='password'
        name="password"
      
        />
        <br />

        {formik.touched.password && formik.errors.password?formik.errors.password:null}
        <br />

      <button 
      
      type="submit">submit</button>

    </form>

  );
}
