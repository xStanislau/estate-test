import React from "react";
import Button from "../../Button/Button";
import Comment from "./Comment";
import Phone from "./Phone";
import Name from "./Name";

const CallBackForm = ({ handleSubmit, submitting, className, close, form }) => {
  return (
    <form
      className={className}
      onSubmit={async values => {
        await handleSubmit(values);
        form.reset();
      }}
    >
      <Button className="close-btn" variant="main_pink" onClick={close}>
        <span>&times;</span>
      </Button>
      <div className="callback-form__inner">
        <h1 className="h2 mb-5">Заказать обратный звонок</h1>
        <Name />
        <Phone />
        <Comment />
        <Button
          type="submit"
          variant="main btn-main_green"
          className="filter-sidebar__submit-btn"
          disabled={submitting}
        >
          Заказать
        </Button>
      </div>
    </form>
  );
};

export default CallBackForm;
