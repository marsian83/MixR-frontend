import Icon from "../../common/Icon";
import Cities from "./components/Cities";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import ShoppingCategory from "./components/ShoppingCategory";
import Items from "./components/items";

const catergorydata = [
  "Men Footwear",
  "Men Clothing",
  "Women Footwear",
  "Women Clothing",
];

const MixRSpecialData = [
  [
    {
      icon: "search",
      heading: " Browse all types of products",
      describe:
        " Discover Products You would previously never find. Brands and deals from stores and botiques across the country.",
    },
    {
      heading: "Manage your memberships",
      describe:
        "Manage your digital subscription and membership in one place.",
      icon: "Setting",
    },
  ],
  [
    {
      icon: "Setting",
      heading: "Manage your memberships",
      describe:
        "Discover Products You would previously never find. Brands and deals from stores and botiques across the country.",
    },
    {
      icon: "SupportAgent",
      heading: "Community Support",
      describe:
        " Navigating this world is hard. We're here to make sure you're in the best hands.",
    },
  ],
];

export default function HomePage() {
  return (
    <>
      <div className="">
        <Hero />

        <section className="p-page bg-foreground flex justify-center gap-x-11 py-8 items-center text-sm w-full">
          <div className="pr-12 flex gap-x-1 items-center">
            <Icon icon="Shuffle" className="text-2xl" />
            <button> Shuffle through products</button>
          </div>
          {catergorydata.map((data, i) => (
            <button
              className="py-2 px-4 font-medium bg-white rounded border-black border-[1.5px]"
              key={i}
            >
              {data}
            </button>
          ))}
        </section>

           <Items />
        <div className="mt-6">
          <Cities />
        </div>

        <div className="">
          <Feature
            heading1={"Newly Added"}
            heading2={"New Brands in the Mix."}
          />
          <Feature
            heading1={"Newly Added"}
            heading2={"New Brands in the Mix."}
          />
        </div>

        <section className="p-page mt-12 w-full mb-12">
          <h1 className="text-3xl mb-12 font-medium">
            Discover what makes MixR special.
          </h1>

          <div className="flex flex-col gap-y-7">
            {MixRSpecialData.map((row, i) => (
              <div key={i} className="flex gap-x-16">
                {row.map((temp, k) => (
                  <div className="flex gap-x-5  w-[50%]">
                    <div> <Icon icon={temp.icon} className="text-4xl"/> </div>
                    <div className="flex flex-col gap-y-2 text-base w-[100%]">
                      <div className="text-lg font-normal">{temp.heading}</div>
                      <div className="text-gray-500">{temp.describe}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-6 mt-24">
          <ShoppingCategory heading={"Footwear"} subheading={"Shop"} />
          <ShoppingCategory heading={"Men Clothing"} subheading={"Shop"} />
          <ShoppingCategory heading={"Women Clothing"} subheading={"Shop"} />
          <ShoppingCategory heading={"Kids Clothing"} subheading={"Shop"} />
        </section>
      </div>
    </>
  );
}
