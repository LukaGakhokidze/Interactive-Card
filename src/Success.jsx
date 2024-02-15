function Success({ onReset }) {
  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-9">
      <img src="assets/images/icon-complete.svg" alt="" />

      <div className="flex flex-col items-center justify-center gap-2 ">
        <h1 className="text-xl tracking-widest"> THANK YOU!</h1>
        <p className="text-lg text-dark-grayish-violet">
          We’ve added your card details
        </p>
      </div>
      <button
        onClick={onReset}
        className="px-32 py-4 text-white rounded-lg bg-very-dark-violet"
      >
        Continue
      </button>
    </div>
  );
}

export default Success;
