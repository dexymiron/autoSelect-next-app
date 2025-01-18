import React from 'react';
import n from './OrderForm.module.css';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2'
import "react-phone-input-2/lib/style.css";
import { useDispatch } from 'react-redux';
import { togglePopUp } from '@/redux/popUpFormSlice';
import { db } from '@/firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';

interface OrderForm {
    name: string;
    phone: string;
    info: string;
}


export const OrderForm = () => {

    const {register, handleSubmit, formState: {errors}, clearErrors, control} = useForm<OrderForm>();

    const submit: SubmitHandler<OrderForm> = async(data) => {
        console.log(data)
        try {
          const collectionRef = collection(db, "formorders");

          await addDoc(collectionRef, {
            ...data,
            timestamp: new Date()
          });
        } catch (error) {
          console.error("Ошибка отправки данных", error);
        }
    };

    const dispatch = useDispatch();
    const handleInputChange = () => {
      dispatch(togglePopUp());
    }

  return (
    <>
    <form className={n.form} onSubmit={handleSubmit(submit)}>
        <h2 className={n.formTitle}>Форма зворотнього зв`язку</h2>
        <label htmlFor='nameField'>
            <p className={n.fieldTitles}>Ваше Ім`я</p>
            <input 
                type='text' 
                id='nameField' 
                {...register('name', {required: true})} 
                className={errors.name ? `${n.error} ${n.inputs}` : `${n.inputName} ${n.inputs}`} 
                onChange={() => clearErrors('name')}
            />
            {errors.name && <p className={n.errorText}>Це поле обов'язкове</p>}
        </label>
        
        <label htmlFor='phoneField'>
            <p className={n.fieldTitles}>Номер Телефону</p>
           <Controller
          name="phone"
          control={control}
          rules={{
            required: "Це поле обов’язкове",
          }}
          render={({ field }) => (
            <PhoneInput
              {...field}
              inputClass={`${n.inputPhone} ${n.inputs}`}
              containerClass={n.containerPhone}
              buttonClass={n.buttonPhone}
              searchClass={n.searchPhone}
              country={"ua"}
              autoFormat={true}
              placeholder="Введіть номер телефону"
              inputProps={{
                name: "phone",
                required: true,
              }}
              onChange={(value) => field.onChange(value)}
            />
          )}
        />
        </label>
        
        <label htmlFor='info'>
            <p className={n.fieldTitles}>Додаткова інформація</p>
            <textarea className={`${n.inputInfo} ${n.inputs}`}id='info' {...register('info')}/>
        </label>
        <button className={n.submitBtn} onClick={() => handleInputChange()}>
            Відправити
        </button>
        
    </form>
    </>
  )
}