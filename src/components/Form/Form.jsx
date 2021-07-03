import React from "react";
import { CustomForm } from './Form.styled';
import Button from "../Button/Button";

function Form({children, onSubmit}) {
  return (
    
  <CustomForm onSubmit={onSubmit}>
    {children}
    <Button text="Сохранить"/>
  </CustomForm >
  );
}
export default Form;
