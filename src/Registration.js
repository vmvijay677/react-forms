import { useFormik } from "formik";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { formValidationSchema } from './App';

export function Registration() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      city: "",
      state: "",
      country: "",
      message: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (newFormData) => {
      //console.log("Onsubmit", values);
      addFormData(newFormData);
    },
  });

  const addFormData = (newFormData) => {
    fetch("http://localhost:4000/forms-data", {
      method: "POST",
      body: JSON.stringify([newFormData]),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Registered Sucessfully !!!");
  };

  return (
    <div className="form-container">
      <h2 className='sub-heading'>Enter your details here</h2>
      <form onSubmit={formik.handleSubmit} className="add-form">
        <TextField
          className="inputfield"
          label="Name *"
          color="primary"
          variant="outlined"
          id="name"
          name="name"
          error={formik.touched.name && formik.errors.name}
          helperText={formik.touched.name && formik.errors.name ? formik.errors.name : " "}
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur} />
        <TextField
          className="inputfield"
          label="Email *"
          color="primary"
          variant="outlined"
          id="email"
          name="email"
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email ? formik.errors.email : " "}
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur} />
        <TextField
          className="inputfield"
          label="Mobile"
          color="primary"
          variant="outlined"
          id="mobile"
          name="mobile"
          error={formik.touched.mobile && formik.errors.mobile}
          helperText={formik.touched.mobile && formik.errors.mobile ? formik.errors.mobile : " "}
          onChange={formik.handleChange}
          value={formik.values.mobile}
          onBlur={formik.handleBlur} />
        <TextField
          className="inputfield"
          label="City"
          color="primary"
          variant="outlined"
          id="city"
          name="city"
          error={formik.touched.city && formik.errors.city}
          helperText={formik.touched.city && formik.errors.city ? formik.errors.city : " "}
          onChange={formik.handleChange}
          value={formik.values.city}
          onBlur={formik.handleBlur} />
        <TextField
          className="inputfield"
          label="State"
          color="primary"
          variant="outlined"
          id="state"
          name="state"
          error={formik.touched.state && formik.errors.state}
          helperText={formik.touched.state && formik.errors.state ? formik.errors.state : " "}
          onChange={formik.handleChange}
          value={formik.values.state}
          onBlur={formik.handleBlur} />
        <TextField
          className="inputfield"
          label="Country"
          color="primary"
          variant="outlined"
          id="country"
          name="country"
          error={formik.touched.country && formik.errors.country}
          helperText={formik.touched.country && formik.errors.country ? formik.errors.country : " "}
          onChange={formik.handleChange}
          value={formik.values.country}
          onBlur={formik.handleBlur} />
        <TextField
          className="inputfield"
          label="Message"
          color="primary"
          variant="outlined"
          id="message"
          name="message"
          error={formik.touched.message && formik.errors.message}
          helperText={formik.touched.message && formik.errors.message ? formik.errors.message : " "}
          onChange={formik.handleChange}
          value={formik.values.message}
          onBlur={formik.handleBlur} />
        <Button id="button" type="submit" variant="contained" color="primary">Register</Button>
      </form>
    </div>
  );
}
