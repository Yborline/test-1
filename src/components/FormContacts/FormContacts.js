import { Field, Formik } from "formik";
import validationSchema from "../../validation/validationFormContacts";
import {
  Input,
  DivPlaceHolder,
  Label,
  Form,
  Li,
  InputMessage,
  DivPlaceHolderArea,
} from "./FormContacts.styled";

const FormContacts = () => {
  return (
    <div>
      {" "}
      <Formik
        initialValues={{
          name: "",
          numberPhone: "",
          email: "",
          service: "",
          message: "",
        }}
        validateOnBlur
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          dirty,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <ul>
              <Li>
                <Label>
                  <Input
                    required="1"
                    type="text"
                    name="name"
                    // placeholder={"text"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <DivPlaceHolder>
                    Имя<span>*</span>
                  </DivPlaceHolder>
                </Label>
                <span>{touched.name && errors.name ? errors.name : ""}</span>
              </Li>

              <Li>
                <Label>
                  <Input
                    type="number"
                    name="numberPhone"
                    required="1"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.numberPhone}
                  />
                  <DivPlaceHolder>
                    Номер телефона<span>*</span>
                  </DivPlaceHolder>
                </Label>

                <span>
                  {touched.numberPhone && errors.numberPhone
                    ? errors.numberPhone
                    : ""}
                </span>
              </Li>
              <Li>
                <Label>
                  <Input
                    type="text"
                    name="email"
                    required="1"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <DivPlaceHolder>
                    E-mail<span>*</span>
                  </DivPlaceHolder>
                </Label>

                <span>{touched.email && errors.email ? errors.email : ""}</span>
              </Li>
              <Li>
                <Label>
                  <Input
                    type="text"
                    name="service"
                    required="1"
                    maxLength="30"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <DivPlaceHolder>
                    Интересующий товар/услуга<span>*</span>
                  </DivPlaceHolder>
                </Label>
                <br />

                {/* {!values.email.length ||
                    (errors.email && <SpanError> *</SpanError>)} */}

                <span>
                  {touched.service && errors.service ? errors.service : ""}
                </span>
              </Li>
              <Li style={{ height: "147px" }}>
                <Label style={{ display: "flex" }}>
                  <InputMessage
                    type="text"
                    name="message"
                    required="1"
                    maxLength="30"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <DivPlaceHolderArea>
                    Сообщение<span>*</span>
                  </DivPlaceHolderArea>
                </Label>
                <br />

                {/* {!values.email.length ||
                    (errors.email && <SpanError> *</SpanError>)} */}

                <span>
                  {touched.message && errors.message ? errors.message : ""}
                </span>
              </Li>
            </ul>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormContacts;
