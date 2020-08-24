import React from "react";
import {useFormik} from "formik";
import FormInput from "./FormInput";
import { MyFormScheme } from "./formScheme";

export default function MyForm() {

const formik = useFormik({
    initialValues: {
        username: "",
        email: "",
        password: "",
        password2: ""
    },
    onSubmit: (values) => {
        alert(JSON.stringify({values}));
    },
    validationSchema: MyFormScheme,
});
return(
    <div className="form">
    <form onSubmit={formik.handleSubmit}>
        <FormInput 
            name = "username"
            controlId = "username"
            label="Username"
            error={formik.errors.username}
            handleChange={formik.handleChange}
            value={formik.values.username}
        />
        <FormInput 
            name = "email"
            controlId = "email"
            label="Email"
            error={formik.errors.email}
            handleChange={formik.handleChange}
            value={formik.values.email}
        />
        <FormInput 
            name = "password"
            controlId = "password"
            label="Password"
            error={formik.errors.password}
            handleChange={formik.handleChange}
            value={formik.values.password}
        />
        <FormInput 
            name = "password2"
            controlId = "password2"
            label="Confirm Password"
            error={formik.errors.password2}
            handleChange={formik.handleChange}
            value={formik.values.password2}
        />
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
    </form>
    <footer>
        <p><a href="https://sarvi.azurewebsites.net/">By: Saravanan Vijayamuthu</a></p>
    </footer>
</div>  
);
}