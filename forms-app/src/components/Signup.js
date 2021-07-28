import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";

const Signup = ()=>{

    const validate = Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 charaters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Password must match')
          .required('Confirm password is required'),
    })


    return(
        <div>
            <Formik initialValues={{firstName:"",
                                    lastName:"",
                                    email:"",
                                    password:"",
                                    confirmPassword:""}}
                    validationSchema={validate}
                    onSubmit={values => {
                        console.log(values)
                    }}>
                <Form>
                    <h1>Signup</h1>
                    <TextField type="text" placeholder="firstName" label="firstName" name="firstName"></TextField>
                    <TextField type="text" placeholder="lastName" label="lastName" name="lastName"></TextField>
                    <TextField type="email" placeholder="email" label="email" name="email"></TextField>
                    <TextField type="password" placeholder="password" label="password" name="password"></TextField>
                    <TextField type="password" placeholder="confirmPassword" label="confirmPassword" name="confirmPassword"></TextField>
                    <button className="btn btn-dark mt-3 mr-3" type="submit">Register</button>
                    <button className="btn btn-danger ml-3 mt-3" type="reset">Reset</button>
                </Form>
            </Formik>
        </div>
    )
};

export default Signup;