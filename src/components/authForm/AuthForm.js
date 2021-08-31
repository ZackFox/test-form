import React from "react";

import Input from "../Input/Input";
import Select from "../Select/Select";
import Button from "../Button/Button";

import "./AuthForm.css";

const items = ["Русский", "Английский", "Китайский", "Испанский"];

function AuthForm() {
  return (
    <div className="auth-form">
      <form>
        <div className="form-header">
          <h1>Регистрация</h1>
          <p>Уже есть аккаунт?</p>
          <a href="/">Войти</a>
        </div>

        <div className="form-group">
          <Input label="Имя" />
        </div>

        <div className="form-group">
          <Input type="email" label="Email" />
        </div>

        <div className="form-group">
          <Input label="Телефон" />
        </div>

        <div className="form-group">
          <Select items={items} defaultValue="Язык" label="Язык" name="lang" />
        </div>

        <div className="form-group">
          <p>
            Принимаю <a href="/">условия</a> использования
          </p>
        </div>

        <Button type="submit" className="button--max" disabled={false}>
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
}

export default AuthForm;
