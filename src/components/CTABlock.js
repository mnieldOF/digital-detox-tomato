import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "./TextInput";

export default function CTABlock({ data }) {
  const { title, subTitle, submitButton } = data[0];
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <div>
      <h3>{title}</h3>
      <h5>{subTitle}</h5>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          //   const newValues = JSON.stringify(values);
          //   navigate(`/appointment-confirmation/${newValues}`);
          //   close(false);
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className="form">
            <div className="inner">
              <div className="form-field">
                <MyTextInput
                  label="Full name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-field">
                <MyTextInput
                  label="Email address"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={!dirty || isSubmitting || !isValid}
              >
                {submitButton}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
