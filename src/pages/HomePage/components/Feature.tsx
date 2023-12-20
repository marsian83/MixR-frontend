import Icon from "../../../common/Icon";

const Feature = (props: any) => {
  const cardData_1 = [
    {
      img: {
        src: "https://fettivirtues.com/cdn/shop/files/Untitled-3_Recovered.jpg?v=1700633983&width=500",
        alt: "#",
      },
      heading: "Fetti Virtues",
      City: "Los Angles, CA",
    },
    {
      img: {
        src: "https://fettivirtues.com/cdn/shop/files/Untitled-3_Recovered.jpg?v=1700633983&width=500",
        alt: "#",
      },
      heading: "New York is nationality",
      City: "New York, NY",
    },
    {
      img: {
        src: "https://fettivirtues.com/cdn/shop/files/Untitled-3_Recovered.jpg?v=1700633983&width=500",
        alt: "#",
      },
      heading: "Fetti Virtues",
      City: "Los Angles, CA",
    },
  ];

  return (
    <div className="p-page mt-4">
      <h1 className="pb-3 text-2xl font-medium">{props.heading1}</h1>
      <h2 className="pb-10 text-gray-500 text-base ">{props.heading2}</h2>

      <div className="flex justify-between w-[100%]">
        {cardData_1.map((data, k) => (
          <div
            key={k}
            className="w-[31%] overflow-hidden border-[1px] rounded-lg shadow-[0px_1px_3px_1px_rgba(0,0,0,0.1)] "
          >
              <img
                className=" object-cover h-[10rem] border-b-2  w-full "
                src={data.img.src}
                alt={data.img.alt}
              />
            <div className="  ">
            </div>

            <div className=" px-5  py-2">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-y-1">
                  <div className="text-base font-medium">{data.heading} </div>
                  <div className="text-xs">{data.City}</div>
                </div>

                <button className=" px-4 mb-3 text-sm py-2 text-white bg-secondary rounded-lg flex justify-center items-center gap-x-1">
                  <div> shop</div>
                  <Icon icon="Forward" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center pt-10 pb-4">
        <button className=" border-2 text-sm rounded-md font-normal px-5 py-3 flex items-center justify-center gap-x-1">
          <div>See all</div>
          <Icon icon="Forward" />
        </button>
      </div>
    </div>
  );
};

export default Feature;
