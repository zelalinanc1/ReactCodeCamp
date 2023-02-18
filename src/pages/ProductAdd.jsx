import { Form, Formik, Field, ErrorMessage } from "formik";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";
import KodlamaTextInput from "../utilities/customFormControls/KodlamaTextInput";
import ProductService from "../services/productService";

export default function ProductAdd() {
  const initialValues = { productName: "" };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
  });

 



  return (
    <div>
      <Formik initialValues={initialValues}
       validationSchema={schema} 
       onSubmit ={(values)=>{

       }}>
        <Form className="ui form">
            <KodlamaTextInput name="productName" placeholder="Ürün adı"/>
          <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
    </div>
  );
}
