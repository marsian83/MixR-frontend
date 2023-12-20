import Icon from "../../../common/Icon";
import { Shoe_Card } from "../../../common/Shoe_Card";

const dummyJSon = [
  {
    price: 40,
    img_src:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/14055ca7-cd2e-4de9-b967-b5bfe073c39d/jordan-nu-retro-1-low-shoes-8294mJ.png",
    img_alt: "xx",
    product_detail: "NIke cfmp there e vor that particulas",
  },
  {
    price: 40,
    img_src:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/14055ca7-cd2e-4de9-b967-b5bfe073c39d/jordan-nu-retro-1-low-shoes-8294mJ.png",
    img_alt: "xx",
    product_detail: "NIke cfmp there e vor that particulas",
  },
  {
    price: 40,
    img_src:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/14055ca7-cd2e-4de9-b967-b5bfe073c39d/jordan-nu-retro-1-low-shoes-8294mJ.png",
    img_alt: "xx",
    product_detail: "NIke cfmp there e vor that particulas",
  },
  {
    price: 40,
    img_src:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/14055ca7-cd2e-4de9-b967-b5bfe073c39d/jordan-nu-retro-1-low-shoes-8294mJ.png",
    img_alt: "xx",
    product_detail: "NIke cfmp there e vor that particulas",
  },
  {
    price: 40,
    img_src:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/14055ca7-cd2e-4de9-b967-b5bfe073c39d/jordan-nu-retro-1-low-shoes-8294mJ.png",
    img_alt: "xx",
    product_detail: "NIke cfmp there e vor that particulas",
  },
  {
    price: 40,
    img_src:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/14055ca7-cd2e-4de9-b967-b5bfe073c39d/jordan-nu-retro-1-low-shoes-8294mJ.png",
    img_alt: "xx",
    product_detail: "NIke cfmp there e vor that particulas",
  },
  {
    price: 40,
    img_src:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/14055ca7-cd2e-4de9-b967-b5bfe073c39d/jordan-nu-retro-1-low-shoes-8294mJ.png",
    img_alt: "xx",
    product_detail: "NIke cfmp there e vor that particulas",
  },
];

const ShoppingCategory = (props:any) => {
  return (
    <div>
      <section className="p-page  ">
        <h1 className="mb-1 text-2xl  font-medium">{props.heading}</h1>
        <h2 className="mb-8 text-gray-500 text-base ">{props.subheading}</h2>

        
        <div className="flex gap-x-6 " >
        {dummyJSon.map((data,k)=>(
            <div className="" key={k}>
            <Shoe_Card
          price={data.price}
          img_src={data.img_src}
          img_alt={data.img_alt}
          product_des={data.product_detail}
          size={9}
          />
          </div>
        ))}
        </div>
        

        <div className="flex items-center justify-center pt-10 pb-4">
        <button className=" border-2 text-sm rounded-md font-normal px-5 py-3 flex items-center justify-center gap-x-1">
          <div>
          See all 
          </div >
          <Icon icon="Forward"/>
          </button>

        </div>
      </section>
    </div>
  );
};

export default ShoppingCategory;
