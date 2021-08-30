import React from "react";

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

        <Select items={items} defaultValue="Язык" label="lang" />

        <Button type="submit" className="button--max" disabled={false}>
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
}

export default AuthForm;
