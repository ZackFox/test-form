import React, { useState } from "react";

import Input from "../Input/Input";
import Select from "../Select/Select";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import validate from "../../helpers/validate";

import "./AuthForm.css";

const items = ["Русский", "Английский", "Китайский", "Испанский"];

function AuthForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    selected: "Язык",
    isAgree: false,
  });

  const [errors, setErrors] = useState({});

  const changeInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const changeSelect = (name) => {
    setValues({ ...values, selected: name });
  };

  const changeChecked = () => {
    setValues({ ...values, isAgree: !values.isAgree });
  };

  const submit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  const isSubmiting =
    values.isAgree &&
    values.name.length > 0 &&
    values.email.length > 0 &&
    values.phone.length > 0;

  return (
    <div className="auth-form">
      <form onSubmit={submit}>
        <div className="form-header">
          <h1>Регистрация</h1>
          <p>Уже есть аккаунт?</p>
          <a href="/">Войти</a>
        </div>

        <div className="form-group">
          <Input
            label="Имя"
            name="name"
            placeholder="Введите Ваше имя"
            changeHandler={changeInput}
          />
          {errors.name && <p className="input_message">{errors.name}</p>}
        </div>

        <div className="form-group">
          <Input
            label="Email"
            name="email"
            placeholder="Введите ваш email"
            changeHandler={changeInput}
          />
          {errors.email && <p className="input_message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <Input
            label="Телефон"
            name="phone"
            placeholder="Введите номер телефона"
            changeHandler={changeInput}
          />
          {errors.phone && <p className="input_message">{errors.phone}</p>}
        </div>

        <div className="form-group">
          <Select
            items={items}
            label="Язык"
            name="lang"
            value={values.selected}
            changeHandler={changeSelect}
          />
        </div>

        <div className="form-group agreement">
          <Checkbox isChecked={values.isAgree} checkHandler={changeChecked} />
          <p>
            Принимаю <a href="/">условия</a> использования
          </p>
        </div>

        <Button type="submit" className="button--max" disabled={!isSubmiting}>
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
}

export default AuthForm;
