import Icon from "../../../common/Icon";

export const RelatedCard = (props: any) => {
  return (
    <div>
      <div className="shadow-[0px_0.7px_0.8px_0.6px_rgba(0,0,0,0.1)] overflow-hidden rounded-xl flex flex-col  w-[18rem]">
          <img src={props.src} alt="" className=" h-[18rem] object-cover" />
       
        <div className="flex justify-between py-2 px-4  ">
          <div className="flex flex-col gap-y-1 ">
            <div className="flex text-xs text-gray-400 gap-x-1">
              <div className="underline ">Bike</div>
              <div className="underline ">Ducati</div>
              <div className="underline ">Motor</div>
            </div>

            <div>Ducati Scrambler</div>
            <div className="flex gap-x-1 items-center mb-1 justify-start">
              <Icon icon="rating"/>
              <Icon icon="rating"/>
              <Icon icon="rating"/>
              <Icon icon="rating"/>
              <Icon icon="rating"/>
             
            </div>
            <div className="flex gap-x-1 items-center ">
              <div className="text-red-600">$110.00</div>
              <div className="text-gray-400 text-sm">$250</div>
            </div>
          </div>
        <div>
          <Icon icon="favorite" className="text-xl text-gray-400"/>
        </div>

        </div>
      </div>
    </div>
  );
};
