'use client';
import React, { useRef, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

interface OtpInputProps {
  onOtpSubmit: (otp: string) => Promise<void>;
  resendOtp?: () => Promise<void>;
  phoneNumber?: string;
}
  
const OtpInput = ({ onOtpSubmit, resendOtp, phoneNumber }: OtpInputProps) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [resendDisabled, setResendDisabled] = useState(true);
  const [countdown, setCountdown] = useState(30);

  // Countdown timer for resend OTP
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendDisabled && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setResendDisabled(false);
    }
    return () => clearInterval(timer);
  }, [resendDisabled, countdown]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    if (value.length === 1 && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };
  
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain').slice(0, 6);
    if (/^\d+$/.test(pasteData)) {
      const newOtp = [...otp];
      pasteData.split('').forEach((char, i) => {
        if (i < 6) {
          newOtp[i] = char;
          inputsRef.current[i]!.value = char;
          if (i < 5) inputsRef.current[i + 1]?.focus();
        }
      });
      setOtp(newOtp);
    }
  };

  const handleSubmit = async () => {
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setError('Please enter a 6-digit OTP');
      return;
    }

    setIsSubmitting(true);
    try {
      await onOtpSubmit(otpString);
    } catch (err: any) {
      console.error('OTP verification error:', err);
      setError(err.message || 'Invalid OTP. Please try again.');
      toast.error(err.message || 'OTP verification failed');
      // Clear OTP on error
      setOtp(Array(6).fill(''));
      inputsRef.current[0]?.focus();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendOtp = async () => {
    if (!resendOtp) return;
    
    setResendDisabled(true);
    setCountdown(30);
    setOtp(Array(6).fill(''));
    inputsRef.current[0]?.focus();

    try {
      await resendOtp();
    } catch (err: any) {
      toast.error(err.message || 'Failed to resend OTP');
      setResendDisabled(false);
    }
  };

  return (
    <div className="md:w-1/2 gap-y-4 flex flex-col justify-center items-center px-8 py-16">
      {phoneNumber && (
        <p className=" text-sm text-gray-600">
          Enter the OTP sent to <span className="font-medium">+XXXXXX{phoneNumber.slice(-4)}</span>
        </p>
      )}

      <div className="flex justify-between space-x-2">
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className={`w-10 h-10 border text-center rounded-lg text-lg ${
              error ? 'border-red-500' : 'border-gray-500'
            }`}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            ref={(el) => { inputsRef.current[index] = el; }}
            value={otp[index]}
            disabled={isSubmitting}
          />
        ))}
      </div>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={isSubmitting || otp.join('').length !== 6}
        className={`w-full py-2 rounded-lg ${
          isSubmitting || otp.join('').length !== 6
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {isSubmitting ? 'Verifying...' : 'Verify OTP'}
      </button>

      {resendOtp && (
        <div className="text-center text-sm">
          <button
            type="button"
            onClick={handleResendOtp}
            disabled={resendDisabled}
            className={`text-blue-600 ${resendDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:underline'}`}
          >
            Resend OTP {resendDisabled && `(${countdown}s)`}
          </button>
        </div>
      )}
    </div>
  );
};

export default OtpInput;