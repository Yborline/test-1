import { Formik } from "formik";
import validationSchema from "../../validation/validationFormContacts";
import {
  Input,
  DivPlaceHolder,
  Label,
  Form,
  Li,
  InputMessage,
  DivPlaceHolderArea,
  P,
  Span,
} from "./FormContacts.styled";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import MainButton from "../MainButton/MainButton";

const FormContacts = forwardRef(({ _ }, ref) => {
  return (
    <div ref={ref}>
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
        onSubmit={(values, formikProps) => {
          alert("Ваше обращение принято");

          formikProps.resetForm();
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
                <Span>{touched.name && errors.name ? errors.name : ""}</Span>
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

                <Span>
                  {touched.numberPhone && errors.numberPhone
                    ? errors.numberPhone
                    : ""}
                </Span>
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

                <Span>{touched.email && errors.email ? errors.email : ""}</Span>
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
                    value={values.service}
                  />
                  <DivPlaceHolder>
                    Интересующий товар/услуга<span>*</span>
                  </DivPlaceHolder>
                </Label>
                <br />

                <Span>
                  {touched.service && errors.service ? errors.service : ""}
                </Span>
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
                    value={values.message}
                  />
                  <DivPlaceHolderArea>
                    Сообщение<span>*</span>
                  </DivPlaceHolderArea>
                </Label>
                <br />
              </Li>
              <Span style={{ display: "block" }}>
                {touched.message && errors.message ? errors.message : ""}
              </Span>
            </ul>
            <P>
              Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
            </P>
            <MainButton type="submit" color="black" text="ОТПРАВИТЬ" />
          </Form>
        )}
      </Formik>
    </div>
  );
});

export default motion(FormContacts);
