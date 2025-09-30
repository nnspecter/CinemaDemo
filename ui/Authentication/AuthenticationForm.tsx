import React from 'react'
import styles from "./Form.module.scss"
import { Button, styled, TextField } from '@mui/material'
import Link from 'next/link';

const Form = () => {
  const CssTextField = styled(TextField)({
    width: '400px',
    '& label': {
      color: '#fff', // обычный цвет label
    },
    '& label.Mui-focused': {
      color: '#A0AAB4', // цвет label при фокусе
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B2BAC2', // для standard варианта
    },
    '& .MuiOutlinedInput-root': {
      '& input': {
        color: '#fff', // **текст, который вводит пользователь**
      },
      '& input::placeholder': {
        color: '#686868ff', // placeholder
        opacity: 1,
      },
      '& fieldset': {
        borderColor: '#E0E3E7', // обычная рамка
      },
      '&:hover fieldset': {
        borderColor: '#B2BAC2', // рамка при наведении
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6F7E8C', // рамка при фокусе
      },
    },
  });

  return (
    <div className={styles.form}>
      <div className={styles.formPanel}>
        ВХОД
        <div className={styles.formLabels}>
          <CssTextField 
            label="Логин или номер телефона" 
            placeholder="Введите логин" 
            id="login-input" 
          />
          <CssTextField 
            label="Пароль" 
            placeholder="Введите пароль" 
            id="password-input" 
          />
        </div>
        <Button variant='contained'>ВОЙТИ</Button>
        <Link href="/registration">
        Нет аккаунта? Регистрация
        </Link>
      </div>
    </div>
  )
}

export default Form
