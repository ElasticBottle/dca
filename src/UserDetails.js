import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "./pdf";

const schema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  streetAddress: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zip: Yup.string().required("Required"),
  webAppName: Yup.string().required("Required"),
  url: Yup.string().url("Invalid URL").required("Required"),
  purposeWebApp: Yup.string()
    .min(30, "Please Elaborate More")
    .required("Required"),
});

const UserDetails = () => {
  const [pdf, setPdf] = React.useState("");
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        streetAddress: "",
        state: "",
        zip: "",
        webAppName: "",
        url: "",
        purposeWebApp: "",
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        setPdf(
          <Pdf
            name={values.name}
            email={values.email}
            street={values.streetAddress}
            state={values.state}
            zip={values.zip}
            webName={values.webAppName}
            url={values.url}
            webPurpose={values.purposeWebApp}
          />
        );
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} xs="12" controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Full Name"
                value={values.name}
                onChange={handleChange}
                isValid={touched.name && !errors.name}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} xs="12" controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="StreetAddress">
              <Form.Label>Street Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Street Address"
                name="streetAddress"
                value={values.streetAddress}
                onChange={handleChange}
                isValid={touched.streetAddress && !errors.streetAddress}
                isInvalid={!!errors.streetAddress}
              />
              <Form.Control.Feedback type="invalid">
                {errors.streetAddress}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="State">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isValid={touched.state && !errors.state}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="Zip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isValid={touched.zip && !errors.zip}
                isInvalid={!!errors.zip}
              />
              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <hr />
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="webAppName">
              <Form.Label>Name of Web Application</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name of your Web Application"
                name="webAppName"
                value={values.webAppName}
                onChange={handleChange}
                isValid={touched.webAppName && !errors.webAppName}
                isInvalid={!!errors.webAppName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.webAppName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="State">
              <Form.Label>URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="URL of your web application"
                name="url"
                value={values.url}
                onChange={handleChange}
                isValid={touched.url && !errors.url}
                isInvalid={!!errors.url}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="Zip">
              <Form.Label>Purpose of Web Application</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Please Elaborate on what you intend to use your web application for."
                name="purposeWebApp"
                value={values.purposeWebApp}
                onChange={handleChange}
                isValid={touched.purposeWebApp && !errors.purposeWebApp}
                isInvalid={!!errors.purposeWebApp}
              />
              <Form.Control.Feedback type="invalid">
                {errors.purposeWebApp}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          {pdf ? (
            <PDFDownloadLink
              document={pdf}
              fileName="dca_gisaid.pdf"
              style={{
                padding: "10px",
                borderRadius: "5%",
                backgroundColor: "#17c9ff",
                color: "white",
              }}
            >
              {({ blob, url, loading, error }) =>
                loading ? "Processing..." : "Download"
              }
            </PDFDownloadLink>
          ) : (
            <Button type="submit" variant="dark">
              Generate Agreement PDF
            </Button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default UserDetails;
