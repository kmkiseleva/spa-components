import React, { FC, SyntheticEvent, useState } from 'react';
import { MallButton, MallInput } from '../index';
import { IMallCallbackForm } from './IMallCallbackForm';

const MallForm: FC<IMallCallbackForm> = ({
  // children,
  _id,
  width,
  backgroundColor,
  color,
  borderStyle,
  borderWidth,
  borderColor,
  borderRadius,
  // address,
  classes,
}) => {
  // type Statuses = {
  //   status: 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';
  // };

  const [formStatus, setFormStatus] = useState('IDLE');

  const initialFormState = {
    name: '',
    phone: '',
    email: '',
  };

  const [form, setForm] = useState(initialFormState);

  const stylesSetting = {
    width: width,
    borderStyle: borderStyle,
    borderWidth: borderWidth,
    borderColor: borderColor,
    borderRadius: borderRadius,
    backgroundColor: backgroundColor,
    color: color,
  };

  // !!!
  const handleChange = ({ target }: any) => {
    setForm((prevForm) => ({ ...prevForm, [target.name]: target.value }));
  };

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    // если валидация прошла:
    setFormStatus('LOADING');
    try {
      // const response = await postFormApi(form);
      // if (!response) {
      //   throw new Error('ОШИБКА: форма не отправлена!');
      // }
      // eslint-disable-next-line no-console
      console.log('Отправлено: ', form);
      setFormStatus('SUCCESS');
    } catch (error) {
      setFormStatus('ERROR');
    } finally {
      setTimeout(() => {
        setFormStatus('IDLE');
      }, 5000);
    }
    setForm(initialFormState);
  };

  return (
    <>
      {formStatus === 'LOADING' && 'Идет отправка...'}
      {formStatus === 'SUCCESS' && 'Форма отправлена успешно'}
      {formStatus === 'ERROR' && 'Ошибка отправки формы!'}

      <form
        onSubmit={handleSubmit}
        style={stylesSetting}
        id={_id}
        className={classes ? `mall-button ${classes}` : `mall-button`}
      >
        <MallInput
          _id="input_name_123"
          value={form.name}
          onChange={handleChange}
          name="name"
          placeholder="Представьтесь"
        />
        <MallInput
          _id="input_tel_234"
          value={form.phone}
          onChange={handleChange}
          name="phone"
          pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
          placeholder="Телефон"
        />
        <MallInput
          _id="input_email_536"
          value={form.email}
          onChange={handleChange}
          name="email"
          required
          pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
          placeholder="Электронная почта"
        />
        <MallButton
          _id="button_submit_674"
          backgroundColor="#0364ED"
          type="submit"
        >
          Отправить
        </MallButton>
      </form>
    </>
  );
};

export default MallForm;
