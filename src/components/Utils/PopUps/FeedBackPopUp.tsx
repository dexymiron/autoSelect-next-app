'use client'
import React from 'react';
import n from './FeedBackPopUp.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { togglePopUp } from "@/redux/popUpFormSlice";
import { OrderForm } from '../OrderForm/OrderForm';

const FeedBackPopUp = ({children}: Readonly<{
    children?: React.ReactNode;
  }>) => {

    const visible = useSelector((state: RootState) => state.popUp.isVisible);
    const dispatch = useDispatch();

    const rootClasses = [n.feedBackPopUp];

    if (visible) {
        rootClasses.push(n.active)
    }

    const handleInputChange = () => {
        dispatch(togglePopUp())
    }

  return (
    <div className={rootClasses.join(' ')} onClick={() => handleInputChange()}>
        <div className={n.feedBackPopUpContent} onClick={(e) => e.stopPropagation()}>
            {children}
            <OrderForm/>
        </div>
    </div>
  )
}

export default FeedBackPopUp;
