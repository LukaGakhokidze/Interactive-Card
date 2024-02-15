function Card({ name, cardNumber, cvc, month, year }) {
  return (
    <div className="relative">
      <img
        src="assets/images/bg-main-desktop.png"
        alt="background rectangle"
        className="hidden h-screen Desktop:block Desktop:object-cover"
      />
      <img
        src="assets/images/bg-main-mobile.png"
        alt="background rectangle"
        className="object-cover w-screen Desktop:hidden"
      />
      <div className="absolute left-4 top-32 z-40 w-72 Desktop:left-44 Desktop:top-48 Desktop:h-60 Desktop:w-[450px]">
        <div className="relative">
          <img
            src="assets/images/bg-card-front.png"
            alt="card front "
            className="object-cover"
          />
          <img
            className="absolute left-5 top-4 Desktop:top-8 "
            src="assets/images/card-logo.svg"
            alt="bank logo"
          />
          <p
            className="absolute left-5
           top-20 tracking-[2.2px] text-white Desktop:top-32 Desktop:font-Space_Grotesk Desktop:text-xl"
          >
            {cardNumber ? cardNumber : "0000 0000 0000 0000"}
          </p>
          <p className="absolute text-xs text-white uppercase left-5 top-32 Desktop:top-48 Desktop:text-md ">
            {name ? name : "JANE Appleseed"}
          </p>
          <p className="absolute text-xs text-white right-5 top-32 Desktop:top-48 Desktop:text-md ">
            {month && year ? `${month} / ${year} ` : "00/00"}
          </p>
        </div>
      </div>
      <div className="absolute left-16 top-8 w-72 Desktop:left-60 Desktop:top-[470px] Desktop:w-[450px]  ">
        <div className="relative">
          <img
            className="object-cover"
            src="assets/images/bg-card-back.png"
            alt="card back "
          />
          <p className="absolute text-xs text-white right-8 top-16 Desktop:right-12 Desktop:top-24 Desktop:text-md">
            {cvc ? cvc : "000"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
