import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Formikk = ({ getData }) => {
    async function AddMenu(values) {
        const res = await axios.post("http://localhost:5000/deps", values)
        getData()
    }
    return (
        <Formik
            initialValues={{ image: '', text: '', info: '', price: '' }}
            validationSchema={Yup.object({
                image: Yup.string()
                    .max(150, 'Must be 150 characters or less')
                    .required('Required'),
                text: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                info: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                price: Yup.number()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),

            })}
            onSubmit={(values, { resetForm }) => {
                AddMenu(values)
                resetForm()
            }}
        >
            <Form>
                <label htmlFor="text">Text</label>
                <Field name="text" type="text" />
                <ErrorMessage name="text" />

                <label htmlFor="info">Info</label>
                <Field name="info" type="text" />
                <ErrorMessage name="info" />

                <label htmlFor="Image">Image</label>
                <Field name="Image" type="text" />
                <ErrorMessage name="Image" />

                <label htmlFor="Price">Price</label>
                <Field name="Price" type="number" />
                <ErrorMessage name="Price" />
                <button type="submit">Add</button>
            </Form>
        </Formik>
    );
};
export default Formikk