import React, { useRef, useState, useEffect, KeyboardEvent } from 'react';
import { FaTimes } from 'react-icons/fa';

interface EnterCodeProps {
    callback: (code: string) => void;
    reset: boolean;
    isLoading: boolean;
}

export default function EnterCode({ callback, reset, isLoading }: EnterCodeProps) {
    const [code, setCode] = useState<string>('');

    // Refs to control each digit input element
    const inputRefs = useRef<Array<HTMLInputElement | null>>(Array(6).fill(null));

    // Reset all inputs and clear state
    const resetCode = () => {
        inputRefs.current.forEach(ref => {
            if (ref) {
                (ref as HTMLInputElement).value = '';
            }
        });
        if (inputRefs.current[0]) {
            (inputRefs.current[0] as HTMLInputElement).focus();
        }
        setCode('');
    }

    // Call our callback when code = 6 chars
    useEffect(() => {
        if (code.length === 6) {
            if (typeof callback === 'function') callback(code);
            resetCode();
        }
    }, [code, callback]); 
    useEffect(() => {
        if (reset) {
            resetCode();
        }
    }, [reset]);

    function handleInput(e: React.ChangeEvent<HTMLInputElement>, index: number) {
        const input = e.target as HTMLInputElement;
        const previousInput = inputRefs.current[index - 1] as HTMLInputElement | null;
        const nextInput = inputRefs.current[index + 1] as HTMLInputElement | null;

        const newCodeArray = Array.from(code);
        if (/^[a-z]+$/.test(input.value)) {
            const uc = input.value.toUpperCase();
            newCodeArray[index] = uc;
            input.value = uc;
        } else {
            newCodeArray[index] = input.value;
        }
        setCode(newCodeArray.join(''));

        input.select();

        if (input.value === '') {
            if (previousInput) {
                previousInput.focus();
            }
        } else if (nextInput) {
            // Select next input on entry, if exists
            nextInput.select();
        }
    }

    // Select the contents on focus
    function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
        e.target.select();
    }

    // Handle backspace key
    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>, index: number) {
        const input = e.target as HTMLInputElement;
        const previousInput = inputRefs.current[index - 1] as HTMLInputElement | null;
        const nextInput = inputRefs.current[index + 1] as HTMLInputElement | null;

        if ((e.keyCode === 8 || e.keyCode === 46) && input.value === '') {
            e.preventDefault();
            setCode((prevCode) => prevCode.slice(0, index) + prevCode.slice(index + 1));
            if (previousInput) {
                previousInput.focus();
            }
        }
    }

    // Capture pasted characters
    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const pastedCode = e.clipboardData?.getData('text') || '';
        if (pastedCode.length === 6) {
            setCode(pastedCode);
            inputRefs.current.forEach((inputRef, index) => {
                if (inputRef) {
                    (inputRef as HTMLInputElement).value = pastedCode.charAt(index);
                }
            });
        }
    };

    // Clear button deletes all inputs and selects the first input for entry
    const ClearButton = () => {
        return (
            <button
                onClick={resetCode}
                className="text-2xl absolute right-[-30px] top-3"
            >
                <FaTimes />
            </button>
        )
    }

    useEffect(()=>{
console.log(code);
    },[code])

    return (
        <div className="flex gap-6 relative text-center  pt-[10%] justify-center">
            {[0, 1, 2, 3, 4, 5].map((index) => (
                <input
                    className="text-2xl bg-white border-[1px] border-gray-400 outline-gray-400 text-gray-400 rounded-md shadow-xl shadow-gray-500  w-12 flex p-2 text-center"
                    key={index}
                    type="text"
                    maxLength={1}
                    onChange={(e) => handleInput(e, index)}
                    ref={(ref) => { if (ref) inputRefs.current[index] = ref; }}
                    autoFocus={index === 0}
                    onFocus={handleFocus}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    disabled={isLoading}
                />
            ))}
            {code.length ? <ClearButton /> : <></>}
        </div>
    );
}
