export const Shoe_Card = (props: any) => {
  return (
    <div>
      <div className="border-[2px] border-gray-100 overflow-hidden rounded-md flex flex-col items-center w-[100%]">
          <img
            src="https://crepdogcrew.com/cdn/shop/products/AJ1HighLost_Found_grande.jpg?v=1667562977"
            alt=""
            className="h-[7rem] w-full  overflow-hidden"
          />
       
        <div className="pt-2 pb-5 px-4 font-normal text-center text-xs">
         {props.product_des}
        </div>
        <div className="flex items-center bg-black text-white  w-[100%] text-[0.6rem] text-center">
          <div className="border-r-[0.5px] border-white py-2 w-[65%]">
            <div className="px-2"> Buy now $450</div>
          </div>
          <div className="px-1 py-2 w-[40%]"> size 11 {">"} </div>
        </div>
      </div>
    </div>
  );
};
