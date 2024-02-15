import { useState } from "react";

function Form({
  name,
  cardNumber,
  cvc,
  month,
  year,
  setName,
  setCardNumber,
  setCvc,
  setMonth,
  setYear,
  setIsSubmitted,
}) {
  const [nameError, setNameError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cvcError, setCvcError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // Initialize assuming no errors
    let isValid = true;

    // Reset error states
    setCardNumberError("");
    setCvcError("");
    setMonthError("");
    setYearError("");
    setNameError("");

    //Validate Name

    if (!name) {
      setNameError("Can't be empty");
      isValid = false;
    } else if (!/^[a-zA-Z\s\-']+$/.test(name)) {
      // Additional check for valid name characters
      setNameError(
        "Invalid characters. Use only letters, spaces, hyphens, and apostrophes.",
      );
      isValid = false;
    }

    // Validate Card Number
    const rawCardNumber = cardNumber.replace(/\s/g, "");
    if (!cardNumber) {
      setCardNumberError("Can't be empty");
      isValid = false;
    } else if (!/^\d{16}$/.test(rawCardNumber)) {
      setCardNumberError(
        "Card number must be 16 digits and contain numbers only.",
      );
      isValid = false;
    }

    // Validate CVC
    if (!cvc) {
      setCvcError("Can't be empty");
      isValid = false;
    } else if (!/^\d{3,4}$/.test(cvc)) {
      setCvcError("CVC must be 3 or 4 digits long.");
      isValid = false;
    }

    // Validate Month
    const numericMonth = parseInt(month, 10);
    if (!month) {
      setMonthError("Can't be empty");
      isValid = false;
    } else if (isNaN(numericMonth) || numericMonth < 1 || numericMonth > 12) {
      setMonthError("Invalid month.");
      isValid = false;
    }

    // Validate Year
    const numericYear = parseInt(year, 10);
    if (!year) {
      setYearError("Can't be empty");
      isValid = false;
    } else if (isNaN(numericYear) || year.length !== 2) {
      setYearError("Invalid year. Use the last 2 digits.");
      isValid = false;
    }

    // Proceed  form submission actions if all validations pass
    if (isValid) {
      setIsSubmitted(true);
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    // Allow letters, spaces, hyphens, and apostrophes only
    if (/^[a-zA-Z\s\-']*$/.test(value)) {
      setName(value);
    }
  };

  const handleCardNumberChange = (e) => {
    const { value } = e.target;
    let formattedValue = value
      .replace(/[^\dA-Z]/gi, "") // Remove non-digits & retain uppercase letters for simplicity.
      .replace(/(.{4})/g, "$1 ")
      .trim(); // Add space after every 4 characters

    // Limit the value to 19 characters to include spaces
    if (formattedValue.length > 19) {
      formattedValue = formattedValue.substr(0, 19);
    }

    setCardNumber(formattedValue);
  };
  const handleCVCChange = (e) => {
    const { value } = e.target;
    // Keep only digits and limit length to 4 characters
    const formattedValue = value.replace(/\D/g, "").substring(0, 4);

    setCvc(formattedValue);
  };

  const handleMonthChange = (e) => {
    let { value } = e.target;
    const numericValue = parseInt(value, 10);

    // If the value is numeric and within the allowed range
    if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 12) {
      // Prepend '0' if the month is between 1 and 9
      value = numericValue < 10 ? `0${numericValue}` : `${numericValue}`;
    } else if (value !== "") {
      // Reset the input if it's non-numeric or out of range, but not if the field is empty
      value = "";
    }

    setMonth(value);
  };

  const handleYearChange = (e) => {
    const { value } = e.target;
    // Allow only numeric input, up to 2 digits
    const formattedValue = value.replace(/\D/g, "").substring(0, 2);

    setYear(formattedValue);
  };

  return (
    <div>
      <form
        className="flex flex-col gap-5 p-6 mt-12 max-w-96 "
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-2">
          <label className="uppercase">cardholder name</label>
          <div
            className={`h-[45px] rounded-lg  from-active-gradient-1 to-active-gradient-2 px-[1px] py-[1px] hover:cursor-pointer hover:bg-gradient-to-r active:bg-gradient-to-r ${nameError ? "bg-input-error" : "bg-light-grayish-violet"}`}
          >
            <input
              value={name}
              onChange={handleNameChange}
              type="text"
              placeholder="e.g. Jane Appleseed"
              className="w-full h-full px-3 bg-white rounded-lg outline-none placeholder:text-light-grayish-violet focus:text-very-dark-violet"
            />
            {nameError && (
              <span className="mt-2 text-sm text-input-error">{nameError}</span>
            )}
          </div>
          <span className="mt-2 text-sm text-input-error "></span>
        </div>
        <div className="flex flex-col gap-2">
          <label className="uppercase">card number</label>
          <div
            className={` h-[45px] rounded-lg from-active-gradient-1 to-active-gradient-2 px-[1px] py-[1px] hover:cursor-pointer hover:bg-gradient-to-r active:bg-gradient-to-r ${cardNumberError ? "bg-input-error" : "bg-light-grayish-violet"}`}
          >
            <input
              value={cardNumber}
              onChange={handleCardNumberChange}
              type="text"
              placeholder={"e.g 1234 5678 9123 0000"}
              className="w-full h-full px-3 bg-white rounded-lg outline-none placeholder:text-light-grayish-violet focus:text-very-dark-violet"
            />
            {cardNumberError && (
              <span className="mt-2 text-sm text-input-error">
                {cardNumberError}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-12">
            <label className="uppercase">Exp. Date (MM/YY)</label>
            <label className="uppercase">CVC</label>
          </div>
          <div className="flex gap-2">
            <div
              className={`h-[45px] max-w-20 rounded-lg ${monthError ? "bg-input-error" : "bg-light-grayish-violet"} from-active-gradient-1 to-active-gradient-2 px-[1px] py-[1px] hover:cursor-pointer hover:bg-gradient-to-r active:bg-gradient-to-r `}
            >
              <input
                value={month}
                onChange={handleMonthChange}
                type="text"
                placeholder="MM"
                className="w-full h-full px-3 bg-white rounded-lg outline-none placeholder:text-light-grayish-violet focus:text-very-dark-violet"
              />
              {monthError && (
                <span className="mt-2 text-sm text-input-error">
                  {monthError}
                </span>
              )}
            </div>
            <div
              className={`h-[45px] max-w-20 rounded-lg ${yearError ? "bg-input-error" : "bg-light-grayish-violet"} from-active-gradient-1 to-active-gradient-2 px-[1px] py-[1px] hover:cursor-pointer hover:bg-gradient-to-r active:bg-gradient-to-r `}
            >
              <input
                value={year}
                onChange={handleYearChange}
                type="text"
                placeholder="YY"
                className="w-full h-full px-3 bg-white rounded-lg outline-none placeholder:text-light-grayish-violet focus:text-very-dark-violet"
              />
              {yearError && (
                <span className="mt-2 text-sm text-input-error">
                  {yearError}
                </span>
              )}
            </div>
            <div
              className={`h-[45px] rounded-lg ${cvcError ? "bg-input-error" : "bg-light-grayish-violet"} from-active-gradient-1 to-active-gradient-2 px-[1px] py-[1px] hover:cursor-pointer hover:bg-gradient-to-r active:bg-gradient-to-r `}
            >
              <input
                value={cvc}
                onChange={handleCVCChange}
                type="text"
                placeholder="e.g 123"
                className="w-full h-full px-3 bg-white rounded-lg outline-none placeholder:text-light-grayish-violet focus:text-very-dark-violet"
              />
              {cvcError && (
                <span className="mt-2 text-sm text-input-error">
                  {cvcError}
                </span>
              )}
            </div>
          </div>
        </div>
        <button className="py-4 mt-6 text-white rounded-lg bg-very-dark-violet">
          Confirm
        </button>
      </form>
    </div>
  );
}

export default Form;
