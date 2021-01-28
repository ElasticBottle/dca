import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import Pdf from "./pdf";

const schema = Yup.object().shape({
  name: Yup.string().required("Required"),
  institute: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  streetAddress: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zip: Yup.string().required("Required"),
  webAppName: Yup.string().required("Required"),
  // url: Yup.string().url("Invalid URL").required("Required"),
  purposeWebApp: Yup.string()
    .min(30, "Please Elaborate More")
    .required("Required"),
});

const UserDetails = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        institute: "",
        streetAddress: "",
        state: "",
        zip: "",
        webAppName: "",
        // url: "",
        purposeWebApp: "",
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        pdf(
          <Pdf
            name={values.name}
            email={values.email}
            institute={values.isInvalid}
            street={values.streetAddress}
            state={values.state}
            zip={values.zip}
            webName={values.webAppName}
            // url={values.url}
            webPurpose={values.purposeWebApp}
          />
        )
          .toBlob()
          .then((result) => {
            setSubmitting(false);
            saveAs(result, "dca_gisaid.pdf");
          });
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isSubmitting,
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
            <Form.Group as={Col} xs="12" controlId="Name">
              <Form.Label>Institute</Form.Label>
              <Form.Control
                type="text"
                name="institute"
                placeholder="Institution Name"
                value={values.institute}
                onChange={handleChange}
                isValid={touched.institute && !errors.institute}
                isInvalid={!!errors.institute}
              />
              <Form.Control.Feedback type="invalid">
                {errors.institute}
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
            <Form.Group as={Col} md="12" controlId="webAppName">
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
            {/* <Form.Group as={Col} md="6" controlId="State">
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
            </Form.Group> */}
            <Form.Group as={Col} md="12" controlId="Zip">
              <Form.Label>Purpose of Web Application</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Please explain the purpose of the web application, how the data will be used, its functionalities/features, the intended audience/users, and any other information you think will help GISAID determine what data you require. Please attach screenshot/mockups"
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
          <Button type="submit" variant="dark">
            {isSubmitting ? "Loading..." : "Generate Agreement PDF"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UserDetails;
