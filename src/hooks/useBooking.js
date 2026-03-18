import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { triggerFixifySuccess } from '../animations/Confetti';

export const useBooking = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('idle'); 
  // 'idle' | 'sending' | 'success' | 'error'

  const sendBooking = async (formElement) => {
    setLoading(true);
    setStatus('sending');

    try {
      // Replace with your actual EmailJS credentials
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formElement,
        'YOUR_PUBLIC_KEY'
      );

      setStatus('success');
      triggerFixifySuccess(); // Celebration 
    } catch (error) {
      console.error('Fixify Booking Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return { sendBooking, loading, status };
};
