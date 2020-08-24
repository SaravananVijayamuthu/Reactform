import * as Yup from "yup";

export const MyFormScheme = Yup.object({
    full_name: Yup.string()
        .required("Required")
        .min(4, "Have at least 4 chars"),
    email: Yup.string()
        .required("Required")
        .email("Invalid email"),
    password: Yup.string()
        .required("Required")
        .min(8, "have at least 8 chars"),
    password_2: Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "Password does not match")
    })
});
