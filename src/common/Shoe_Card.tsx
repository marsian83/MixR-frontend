import Icon from "./Icon";

export const Shoe_Card = (props: any) => {
  return (
    <div className="cursor-pointer">
      <div className="border-[2px] border-gray-100 overflow-hidden rounded-md flex flex-col items-center w-[100%]">
          <img
            src="https://crepdogcrew.com/cdn/shop/products/AJ1HighLost_Found_grande.jpg?v=1667562977"
            alt={props.img_alt}
            className="h-[7rem] w-full object-cover"
          />
       
        <div className="pt-2 pb-4 px-4 font-normal text-center text-xs">
         {props.product_des}
        </div>
        <div className="flex items-center bg-black text-white  w-[100%] text-[0.6rem] text-center">
          <button className="border-r-[0.5px] border-white py-2 w-[65%]">
            <div className="px-1"> Buy now ${props.price}</div>
          </button>
          <button className="w-[35%] flex justify-center items-center px-1"> size {props.size}  <Icon icon="expand_more"/>  </button>
        </div>
      </div>
    </div>
  );
};
