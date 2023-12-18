const MembershipPage = () => {
  const data = [
    {
      img: { src: "", alt: "" },
      title: "Free Membership",
      price: "0",
      facilities: [
        "3% Platform Free",
        "Complete Discord Access",
        "White Glove Support",
        "",
        
      ],
      plan: "year",
    },
    {
      img: { src: "", alt: "" },
      title: "Monthly Membership",
      price: "15",
      facilities: [
        "0% Platform fee",
        "Complete Discord Access",
        "White Glove Support",
        "Giveways & Contests",
      ],
      plan: "month"
    },
    {
      img: { src: "", alt: "" },
      title: "Annual Membership",
      price: "99",
      facilities: [
        "0% Platform Fee",
        "Complete Discord Access",
        "White Golve support",
        "Giveways & Contests",
      ],
      plan:"year",
    },
  ];

  return (
    <section className="p-page mb-36 ">
      <h1 className="text-center py-14 text-2xl font-semibold">
        Join the MixR Community
      </h1>
      <div className="flex gap-x-5 justify-center items-center  ">
        {data.map((card, i) => (
          <div
            key={i}
            className="flex flex-col w-[33%] items-center px-10 py-8 border-1  border-gray-200 rounded-lg shadow-[0_0px_5px_3px_rgba(0,0,0,0.1)]  "
          >
            <img src={card.img.src} alt={card.img.alt} />
            <div className="py-4 text-xl font-normal">{card.title}</div>
            <div className="flex items-end gap-x-1 py-4">
              <div className="text-6xl font-medium">${card.price}</div>
              <div className="text-gray-400">/{card.plan}</div>
            </div>
            <div className="py-8">
              <div>
                {" "}
                {card.facilities.map((fas, ie) => (
                  <div>
                    <div className="text-sm leading-7" key={ie}>x {fas}</div>
                  </div>
                ))}
              </div>
            </div>
            <button className="bg-black text-white px-10 py-2 border-2 border-black rounded text-xs">Join</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MembershipPage;
