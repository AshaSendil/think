"use client"
import React, { useState, useEffect } from 'react';
import { FaHamburger } from 'react-icons/fa';

const Toast = ({ message, onClose, type }:any) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`toast rounded-md fixed bottom-4 left-1/2 transform -translate-x-1/2 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
    >
      <div className="w-12 h-12 rounded-full flex items-center  justify-center text-white font-bold text-lg">
        {type === 'success' ? <div className=''><FaHamburger  /></div> : ''}
      </div>
      <div className="message ml-2">{message}</div>
    </div>
  );
};

export default Toast;
