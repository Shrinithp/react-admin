import { Box, Button, TextField } from "@mui/material";
import Header from "../../components/Header";
import { Formik } from "formik";
import * as Yup from "yup";

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    address2: string;
    contact: string;
}

const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    address2: "",
    contact: ""
};

const phoneRegExp = /^[6-9]\d{9}$/;

const UserSchema = Yup.object().shape({
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
    email: Yup.string().email("invalid email").required("required"),
    address: Yup.string().required("required"),
    address2: Yup.string().required("required"),
    contact: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("required")

})
const Form = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleFormSubmit = (values: any) => {
        console.log(values);
    }

    return(
        <Box m="20px">
            <Header title="CREATE USER" subtitle="Create a new user profile"/>
            <Formik
            onSubmit={handleFormSubmit}
             initialValues={initialValues}
             validationSchema={UserSchema}>
                {({values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                        display="grid"
                        gap={"30px"}
                        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        sx={{
                            "& > div": { gridColumn: undefined }
                        }}>
                            <TextField  
                                fullWidth
                                variant="filled"
                                type="text"
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField  
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="email"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address}
                                name="address"
                                error={!!touched.address && !!errors.address}
                                helperText={touched.address && errors.address}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address 2"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address2}
                                name="address2"
                                error={!!touched.address2 && !!errors.address2}
                                helperText={touched.address2 && errors.address2}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Contact Number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name="contact"
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{ gridColumn: "span 4" }}
                            />
                        </Box>

                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">Create New User</Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>

    )
}

export default Form;