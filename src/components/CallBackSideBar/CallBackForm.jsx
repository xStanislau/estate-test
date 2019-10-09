import React from "react";
import Button from "../Button/Button";
import { Field } from "react-final-form";

const CallBackForm = ({ handleSubmit, submitting, className, close }) => {
  return (
    <form className={className} onSubmit={handleSubmit}>
      <Button className="close-btn" variant="main_pink" onClick={close}>
        <span>&times;</span>
      </Button>
      <div>
        <label htmlFor="phone">Имя</label>
        <Field
          name="phone"
          type="text"
          component="input"
          id="phone"
          placeholder="от"
        />
        <label htmlFor="name">Телефон</label>
        <Field
          name="name"
          type="text"
          component="input"
          id="name"
          placeholder="от"
        />
        <label htmlFor="comment">Комментарий</label>
        <Field
          name="comment"
          type="text"
          component="input"
          id="comment"
          placeholder="от"
        />
        <Button
          type="submit"
          variant="main_green"
          className="filter-sidebar__submit-btn"
          disabled={submitting}
        >
          Отправить
        </Button>
      </div>
    </form>
  );
};

export default CallBackForm;
