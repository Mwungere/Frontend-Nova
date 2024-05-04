import {
  Control,
  FieldValues,
  Controller,
  FieldErrors,
  UseFormSetValue,
} from "react-hook-form";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import libphonenumber from "google-libphonenumber";
import { useState } from "react";

interface PhoneInputProps {
  id: string;
  control: Control<FieldValues, any>;
  errors: FieldErrors;
  setValue: UseFormSetValue<FieldValues>;
  isSubmitted: boolean;
}

const PhoneNumberInput: React.FC<PhoneInputProps> = ({
  control,
  id,
  errors,
  setValue,
  isSubmitted,
}) => {
  const [phoneNumberData, setPhoneNumberData] = useState<CountryData>({
    name: "INDIA",
    dialCode: "+91",
    countryCode: "in",
    format: "+.. .....-.....",
  });

  const validatePhoneNumber = (
    value: string,
    inputInformation: CountryData
  ) => {
    let isValid = true;
    const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
    const phoneNumber = value.substring(inputInformation.dialCode.length);

    const exampleNumberLengthByCountryCode = phoneUtil
      .getExampleNumber(inputInformation.countryCode)
      .getNationalNumber()
      ?.toString().length;

    if (phoneNumber.length !== exampleNumberLengthByCountryCode) {
      return false;
    }
    return isValid;
  };

  const handleOnChange = (value: string, inputData: CountryData) => {
    setValue(id, value, { shouldValidate: isSubmitted });
    setPhoneNumberData((prevData) => inputData);
  };
  return (
    <Controller
      name={id}
      control={control}
      rules={{
        required: "Phone number is required!",
        validate: (fieldValue) => {
          const isValid = validatePhoneNumber(fieldValue, phoneNumberData);
          return isValid || "Phone Number is not valid!";
        },
      }}
      render={({ field }) => {
        return (
          <div className="flex flex-col mb-6">
            <PhoneInput
              onChange={(value, inputData) =>
                handleOnChange(value, inputData as CountryData)
              }

              value={field.value}
              country={"in"}
              inputStyle={{ width: "100%" }}
              inputProps={{
                className: `
                                    form-input
                                    bg-[#EDF2FA]
                                    py-3
                                    pr-4
                                    pl-[45px]
                                    border-solid
                                    border
                                    border-[1px]
                                    border-gray-600
                                    rounded-md
                                    text-gray-900
                                    shadow-sm ring-1
                                    ring-inset
                                    sm:text-[1.4rem]
                                    focus:ring-1
                                    focus:ring-inset
                                    focus:ring-emerald-600
                                    ${errors[id] && "focus:ring-red-500"}
                                `,
              }}
              placeholder="Enter your phone number"
              enableSearch
              countryCodeEditable={false}
              autoFormat
            />
            {errors[id] && errors[id]?.message && (
              <span className="text-red-500 text-lg mt-1.5">
                {errors[id]?.message as React.ReactNode}
              </span>
            )}
          </div>
        );
      }}
    />
  );
};

export default PhoneNumberInput;
