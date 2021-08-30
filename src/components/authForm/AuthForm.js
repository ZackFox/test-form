import React from "react";

import Button from "../Button/Button";
import "./AuthForm.css";

function AuthForm() {
  return (
    <div className="auth-form">
      <form>
        <div className="form-header">
          <h1>Регистрация</h1>
          <p>Уже есть аккаунт?</p>
          <a href="/">Войти</a>
        </div>

        <Button type="submit" className="button--max" disabled={false}>
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
}

export default AuthForm;
