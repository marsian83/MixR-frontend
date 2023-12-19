import { RelatedCard } from "./components/RelatedCard";

const Specificationdata = [
  "Brand: beat",
  "Model: S450",
  "Wireless Bluetooth Headset",
  "FM Frequency Response:87.5 - 108 MHz",
  "Feature:FM Radio,Card Supported (Micro SD/TF) ",
  "Made In China",
];

const ShoesSizesData = [
  [5, 5.5, 6, 6.5],
  [7, 7.5, 8, 8.5],
  [9, 9.5, 10, 10.5],
  [11, 11.5, 12, 12.5],
  [13, 13.5, 14, 14.5],
];

const ProductPage = () => {
  return (
    <div className=" p-page  pt-12 pb-20  ">
      <section className="flex w-full mb-20  ">
        <div className="w-[50%] flex flex-col  items-center ">
          <img
            src="https://media.gq-magazine.co.uk/photos/64522f9ab0c390be7c433e97/1:1/w_1396,h_1396,c_limit/Screenshot%202023-05-03%20at%2010.53.53.png"
            alt=""
            className="h-[25rem]  w-full"
          />

          <div className=" mt-4  flex justify-center gap-x-2">
            <img src="" alt="" className="border-[1px] rounded-xl p-4" />
            <img src="" alt="" className="border-[1px] rounded-xl p-4" />
            <img src="" alt="" className="border-[1px] rounded-xl p-4" />
          </div>
        </div>

        <div className="w-[50%] flex flex-col gap-y-3 px-12">
          <div className="text-3xl font-semibold">
            {" "}
            Nike Dunk Low Retro White Black Panda
          </div>
          <div className="text-red-600 text-2xl font-medium">$250.00</div>

          <div className="py-4  flex flex-col gap-y-2">
            {ShoesSizesData.map((data, i) => (
              <div key={i} className="flex gap-x-4">
                {data.map((size, k) => (
                  <div key={k} className="">
                    <div className=" w-[4rem] h-[2.5rem] border-[1.2px] border-black flex flex-col  justify-center items-center">
                      <div className="text-xs font-medium">{size}</div>
                      <div className="text-xs">{/* price */}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex gap-x-5">
            <button className="bg-[#d87f7f] text-back text-sm rounded-lg px-10 py-3">
              Buy Now
            </button>
            <button className="bg-black text-back rounded-lg text-sm px-8 py-3">
              Add to Cart
            </button>
          </div>
          <div className="mt-6 text-gray-400 text-sm font-light">
            Shopping from New York
          </div>
        </div>
      </section>

      <section>
        <div className="">
          <div className="flex pt-4 border-b-2">
            <button className="px-2 border-b-2 border-red-600 text-red-600 font-medium text-base ">
              Description
            </button>
            <button className="px-5  text-gray-400 font-medium text-base">
              Review{"(3)"}
            </button>
          </div>
        </div>

        <div className="font-medium text-xl py-7">Specification:</div>

        <div className="flex flex-col gap-y-3 ">
          {Specificationdata.map((data, k) => (
            <div key={k}>
              <div className="text-gray-500 text-base">{data}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="font-medium text-xl py-7 mt-12">Related Products</div>

        <div className="flex w-full pb-10 justify-start pl-1 overflow-x-scroll gap-x-8 items-center ">
          <RelatedCard
            src={
              "https://www.cnet.com/a/img/resize/7a8dad10ebd132941dadb2004e9470ddd141664b/hub/2012/09/13/1c6f886a-6797-11e3-846b-14feb5ca9861/Apple_EarPods_35446297_01.jpg?auto=webp&width=768"
            }
          />
          <RelatedCard
            src={
              "https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/375x375/Wireless-Bluetooth-Earpod-with-Inbuilt-Powerbank-And-RBG-Light-TWS6-2.jpg"
            }
          />
          <RelatedCard
            src={
              "https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Wireless-Bluetooth-Earpod-Pro-with-Charging-Case-1.jpg"
            }
          />
          <RelatedCard
            src={
              "https://5.imimg.com/data5/SELLER/Default/2022/7/WU/BU/LO/154895648/wireless-airpods-earbuds-ipod-earpods-tws-i12-earpods-bluetooth-500x500.jpg"
            }
          />
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
