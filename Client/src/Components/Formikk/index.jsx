import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
const FormAdd = ({getData}) => {

    async function addForm(values) {
        const res=await axios.post("http://localhost:5000/deps",values)
        getData()
    }

  return (
    <div>
      <Formik
      initialValues={{ image: '', text: '', info: '',price:'' }}
      validationSchema={Yup.object({
        image: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        text: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        info: Yup.string().required('Required'),
        price: Yup.number().required('Required'),
      })}
      onSubmit={(values, { resetForm }) => {
        addForm(values)
        resetForm()
      }}
    >
      <Form>
        <label htmlFor="image">First Name</label>
        <Field name="image" type="text" />
        <ErrorMessage name="image" />

        <label htmlFor="text">Last Name</label>
        <Field name="text" type="text" />
        <ErrorMessage name="text" />

        <label htmlFor="info">info Address</label>
        <Field name="info" type="text" />
        <ErrorMessage name="info" />

        <label htmlFor="price">price Address</label>
        <Field name="price" type="price" />
        <ErrorMessage name="price" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </div>
  )
}

export default FormAdd



