import React from "react";
import { Field } from "react-final-form";

const Comment = () => {
  return (
    <>
      <label htmlFor="comment">Комментарий</label>
      <Field
        name="comment"
        component="textarea"
        id="comment"
        placeholder="Ваш комментарий"
        required
      />
    </>
  );
};

export default Comment;
