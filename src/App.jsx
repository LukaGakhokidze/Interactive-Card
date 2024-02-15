import { useState } from "react";
import Card from "./Card";
import Form from "./Form";
import Success from "./Success";

function App() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  //FORM states

  function handleReset() {
    setIsSubmitted(false);
    setName("");
    setCardNumber("");
    setCvc("");
    setMonth("");
    setYear("");
  }

  return (
    <div className="items-center w-screen h-screen bg-white app/ gap-96 Desktop:flex">
      <Card
        name={name}
        cardNumber={cardNumber}
        cvc={cvc}
        month={month}
        year={year}
      />
      {!isSubmitted ? (
        <Form
          name={name}
          cardNumber={cardNumber}
          cvc={cvc}
          month={month}
          year={year}
          setName={setName}
          setCardNumber={setCardNumber}
          setMonth={setMonth}
          setYear={setYear}
          setCvc={setCvc}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
      ) : (
        <Success onReset={handleReset} />
      )}
    </div>
  );
}

export default App;
