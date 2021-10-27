import React from "react";
import styled from "@emotion/styled";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "./TextInput";
import { Container } from "../styles/atoms";
import Tomato from "../assets/tomato.svg";

const StyledSection = styled.section`
  background: #ffcc80;
  padding: 30px 0;

  h3 {
    font-size: 30px;
    margin: 0;
    color: #451e1e;
  }
  h5 {
    font-size: 16px;
  }
  .form-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    label {
      margin-bottom: 7px;
    }
    input {
      padding: 10px;
    }
    #error {
      font-size: 14px;
      background: white;
      border-left: 3px solid red;
      padding: 10px;
    }
  }
  button[type="submit"] {
    padding: 5px 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    span {
      text-transform: uppercase;
      color: black;
    }
    img {
      width: 30px;
      display: block;
      margin-left: 5px;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

export default function CTABlock({ data }) {
  const { title, subTitle, submitButton } = data[0];
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <StyledSection>
      <Container maxWidth="500px">
        <h3>{title}</h3>
        <h5>{subTitle}</h5>
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
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
                  <span>{submitButton}</span>
                  <img src={Tomato} alt="tomato logo" />
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </StyledSection>
  );
}
