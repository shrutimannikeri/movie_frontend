import { useFormik } from 'formik';

export function BasicForm() {

  const formik = useFormik({
    initialValues: { email: 'cool', password: 'abc' }
  }
  );


  return (

    <form onSubmit={formik.handleSubmit}>
      <input
        value={formik.values.email}
        onChange={formik.handleChange}
        type="email"
        placeholder='Email'
        id='email' />
      <input
        value={formik.values.password}
        onChange={formik.handleChange}
        type="password"
        placeholder='Password'
        id='password' />
      <button>submit</button>

    </form>

  );
}
