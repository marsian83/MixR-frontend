import { Shoe_Card } from "../../common/Shoe_Card";

const ShoppingCategories = ["Clothing", "Men", "Women", "Kids", "Rising"];
const ShoppingCities = [
  "New York",
  "Los angles",
  "Chicago",
  "Atlanta",
  "Miami",
  "Housten",
];
const Brands = [
  "Air Jordan",
  "Adidas",
  "Asics",
  "Converse",
  "New balance",
  "Air Jordan",
  "Adidas",
  "Asics",
  "Converse",
  "New balance",
  "Luxury Brand",
  "Other Brands",
  "Collection",
];

const prices = [
  "Under 100$",
  "$100 - $200",
  "$200 - $300",
  "$300 - $400",
  "$400 - $500",
  "$500 - $600",
  "$600+",
];

const ShoesSizesData = [
  [1, 1.5, 2, 2.5],
  [3, 3.5, 4, 4.5],
  [5, 5.5, 6, 6.5],
  [7, 7.5, 8, 8.5],
  [9, 9.5, 10, 10.5],
  [11, 11.5, 12, 12.5],
  [13, 13.5, 14, 14.5],
];

const dummyJSon = [
  [
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
  ],
  [
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
  ],
  [
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
  ],
  [
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
  ],
  [
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
  ],
  [
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
  ],
  [
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
  ],
];

const SearchresultPage = () => {
  return (
    <div className="mb-24">
      <section className=" bg-foreground p-page py-8  my-8  w-full">
        <div className="w-[80%]">
          <div className="text-3xl font-normal mb-1">Footwear</div>
          <div className="text-xs font-normal pb-2 ">
            Sneaker's which were once sololey used as athletic footwear.have
            transceded their original purpose to become a global phenomenon.
            They have envloved from sports gear, used explicitly with
            performance in mind, to one of the most notable fashion
          </div>
        </div>
      </section>

      <section className="flex p-page">
        <section className="w-[20%]">
          <div className="flex flex-col gap-y-1 uppercase text-base font-medium mb-8">
            <div className=" text-back    ">
              <div className="inline  rounded-sm bg-black px-1">Footwear</div>
            </div>

            {ShoppingCategories.map((data, key) => (
              <div className="" key={key}>
                {data}
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="uppercase text-base font-medium pb-1 ">
              Shop By City
            </h2>

            <div className="flex flex-col gap-y-1">
              {ShoppingCities.map((data, k) => (
                <div
                  key={k}
                  className="flex gap-x-1 items-center text-xs capitalize"
                >
                  <div className="h-full">C</div>
                  <div className="px-1">{data}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="uppercase text-base font-medium pb-2 ">Sizes</h2>

            <div className=" flex flex-col gap-y-2  w-full">
              {ShoesSizesData.map((data, i) => (
                <div key={i} className="flex gap-x-2 w-full  ">
                  {data.map((size, k) => (
                    <div key={k} className="w-[16%]">
                      <div className="py-2 px-2 border-[1.2px] border-black flex flex-col  justify-center items-center">
                        <div className="text-xs  font-semibold">{size}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-1 uppercase text-base font-medium mb-8">
            {Brands.map((data, key) => (
              <div className="" key={key}>
                {data}
              </div>
            ))}
          </div>

          <div className="">
            <h2 className="uppercase text-base font-medium pb-1">Prices</h2>

            <div className="flex flex-col gap-y-1">
              {prices.map((data, k) => (
                <div
                  key={k}
                  className="flex gap-x-1 items-center text-xs capitalize"
                >
                  <div className="h-full">C</div>
                  <div className="px-1 font-light">{data}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-[80%] pl-3">
          <div className="flex mb-6 gap-x-2">
            <button className="border-[1px] border-gray-300 px-2 py-1 text-xs font-medium rounded">
              Sort By ic
            </button>
            <button className="border-[1px] border-gray-300 px-2 text-xs font-medium rounded">
              Shuffle ic
            </button>
          </div>

          <div className="flex flex-col gap-y-6 mb-10">

{
  dummyJSon.map((data,k)=>(
    <div key={k}>
 <div className="flex gap-x-6 ">
              {data.map((data, k) => (
                <div className="" key={k}>
                  <Shoe_Card
                    price={data.price}
                    img_src={data.img_src}
                    img_alt={data.img_alt}
                    product_des={data.product_detail}
                  />
                </div>
              ))}
            </div>
    </div>
  ))
}

           
          </div>

          <div className="flex justify-end text-xs ">
            <div className="flex border  border-gray-400">
              <button className="py-1 px-2">{"<"}</button>
              <div className="border-x py-1 px-2 font-normal border-gray-400">
                {" "}
                Page 1 of 100{" "}
              </div>
              <button className="py-1 px-2">{">"}</button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default SearchresultPage;
