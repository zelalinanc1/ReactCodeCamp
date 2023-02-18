import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from "semantic-ui-react";
export default function KodlamaTextInput({...props}) {

    const [field,meta] = useField(props)

  return (
    <FormField error={meta.touched && !!meta.error}>
        <input {...field} {...props}/>
        {meta.touched && !!meta.error ? (
            <Label pointing basic color="red" content={meta.error}></Label>
        ):null}
    </FormField>
  )
}

{/* <FormField>
            <Field name="productName" placeholder="Ürün adı"></Field>
            <ErrorMessage name="productName" render={error =><Label pointing basic
            color ="red" content={error}></Label>}></ErrorMessage>
          </FormField> */}