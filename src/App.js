import './App.css';
import * as yup from "yup";
import { Registration } from './Registration';

export const formValidationSchema = yup.object({
  name: yup
    .string()
    .required("Why not fill your name?")
    .min(3, "Enter a valid name"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Why not fill your email?"),
  mobile: yup
    .number()
    .min(10, "Enter a valid mobie number"),
  city: yup
    .string(),
  state: yup
    .string(),
  country: yup
    .string(),
  message: yup
    .string()
    .min(20, "Enter a longer message"),
});

export default function App() {
  return (
    <div className="App">
      <h1 className='heading'>Registration Form</h1>
      <Registration />
    </div>
  );
}
