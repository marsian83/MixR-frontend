import { Link } from "react-router-dom";

const QnA = [
  {
    question: "How does MixR Work?",
    answer: `StockX is a marketplace where Buyers and Sellers
can make anonymous offers on a wide variety of
shoes, streetwear, electronics and collectibles. As
a live marketplace, StockX empowers Buyers to
Bid and Buy at real-time prices that reflect the
current demand. This can be done in three easy
steps: 

1. Bid or Buy
2. We Verify
3. We Ship to You`,
  },
  {
    question: "How do orders work on MixR?",
    answer: `Placing a Bid will allow you to set how much you'd
like to pay for an item, from a minimum of $15. If
you have the highest bid price for an item on the
site, it will be up to a Seller to determine if they are
interested in meeting you at your offer.

You can also immediately purchases your item
from the Seller with the lowest Ask by clicking 'Buy
Now' —if you like the current price of an item with
respect to the size you’re trying to purchase, this
is the easiest way to lock in with a Seller and make
sure it doesn't slip through your fingers.`,
  },
  {
    question: "Are MixR products new?",
    answer: `Shoes sold on StockX are considered
  "deadstock," which means that they're verified,
  new, and unworn at the time of sale.
  
  Deadstock sneakers are also sold with the original
box including the box lid and the box label
indicating the shoe size, as would be acceptable
for sale at a retail location. “Deadstock” sneakers
also may or may not include additional
accessories (such as laces) that were included in
the original packaging at purchase.`,
  },
  ,
  {
    question: "Does MixR fulfill my order?",
    answer: `Buyers can pay with all major credit cards, PayPal,
  Apple Pay, Google Pay, Venmo, Alipay, Sofort, or
  iDEAL payment. 
  
  The credit cards we accept are
  Visa, MasterCard, American Express, JCB,
  UnionPay, and Discover. We accept debit and gift
  cards with major card brand logos.`,
  },
  {
    question: "Who do I contact for support?",
    answer: `Once a sale has occurred, order cannot
  be canceled. This policy is in place to maintain
  marketplace integrity, as we need to ensure every
  sale is real, active, and dependable.`,
  },
  {
    question: "What are the benefits of becoming a MixR member?",
    answer: `Once a sale has occurred, order cannot
  be canceled. This policy is in place to maintain
  marketplace integrity, as we need to ensure every
  sale is real, active, and dependable.`,
  },
];

const Features = [
  {
    img: { src: "/images/sneaker.svg.png", alt: "Shoe" },
    heading: "100% Authentic",
    description:
      "Every item sold goes through our proprietary multi-step verification process with our team of verification experts.",
  },
  {
    img: {
      src: "/images/CustomerService.svg.png",
      alt: "Customer Service icon",
    },
    heading: "Membership Community",
    description:
      "Thanks to our Help Center, Chatbot, and dedicated global-support staff, you can be sure that we are always available to answer any and every question regarding our marketplace.",
  },
  {
    img: { src: "/images/globe.png", alt: "global earth" },
    heading: "U.S Shipping",
    description:
      "Whether it's pre-release, regionally limited, or “sold out” - our millions of customers from over 200 countries allow you to easily secure those hard-to-find, coveted items.",
  },
  {
    img: { src: "/images/lock.png", alt: "Lock Icon" },
    heading: "Secure",
    description:
      "No chargebacks, no taking photos, no writing catchy descriptions, and no dealing with rogue buyers or sellers. We handle everything to make sure you can buy and sell with confidence.",
  },
  {
    img: { src: "/images/no-bs.png", alt: "Profile" },
    heading: "First Class Support",
    description:
      "Preserving the integrity of our marketplace means staying a step ahead. Our security and fraud systems,powered by our world class partners, have your personal information covered 24/7.",
  },
  {
    img: { src: "/images/graph-down.png", alt: "Decreasing Graph" },
    heading: "Competitive Pricing",
    description:
      "Our real-time marketplace works just like the stock market –  allowing you to buy and sell the most coveted items at their true market price.",
  },
];

const Accessibility = [
  {
    meberships: { src: "/logo.png", alt: "MixR logo", type: "Paid Membership" },
    fees: "0%",
    rewards: { src: "/images/Verify.png", alt: "verified tickmark" },
    discord: { src: "/images/Verify.png", alt: "verified tickmark" },
    referance: { src: "/images/Verify.png", alt: "verified tickmark" },
    support: { src: "/images/Verify.png", alt: "verified tickmark" },
  },
  {
    meberships: { src: "/logo.png", alt: "MixR logo", type: "Free Membership" },
    fees: "3%",
    rewards: { src: "/images/cross.png", alt: "crossed tickmark" },
    discord: { src: "/images/Verify.png", alt: "verified tickmark" },
    referance: { src: "/images/Verify.png", alt: "verified tickmark" },
    support: { src: "/images/Verify.png", alt: "verified tickmark" },
  },
  {
    meberships: { src: "/images/Ebay.png", alt: "Ebay logo", type: "" },
    fees: "8%",
    rewards: { src: "/images/cross.png", alt: "crossed tickmark" },
    discord: { src: "/images/cross.png", alt: "crossed tickmark" },
    referance: { src: "/images/cross.png", alt: "crossed tickmark" },
    support: { src: "/images/cross.png", alt: "crossed tickmark" },
  },
  {
    meberships: { src: "/images/StockX.png", alt: "StockX logo", type: "" },
    fees: "14%+",
    rewards: { src: "/images/cross.png", alt: "crossed tickmark" },
    discord: { src: "/images/cross.png", alt: "crossed tickmark" },
    referance: { src: "/images/cross.png", alt: "crossed tickmark" },
    support: { src: "/images/cross.png", alt: "crossed tickmark" },
  },
  {
    meberships: { src: "/images/GOAT.png", alt: "GOAT logo", type: "" },
    fees: "12+%",
    rewards: { src: "/images/cross.png", alt: "crossed tickmark" },
    discord: { src: "/images/cross.png", alt: "crossed tickmark" },
    referance: { src: "/images/cross.png", alt: "crossed tickmark" },
    support: { src: "/images/cross.png", alt: "crossed tickmark" },
  },
  {
    meberships: {
      src: "/images/Stock.png",
      alt: "Stadium Goods logo",
      type: "",
    },
    fees: "20+%",
    rewards: { src: "/images/cross.png", alt: "crossed tickmark" },
    discord: { src: "/images/cross.png", alt: "crossed tickmark" },
    referance: { src: "/images/cross.png", alt: "crossed tickmark" },
    support: { src: "/images/cross.png", alt: "crossed tickmark" },
  },
];

const tableData = [
  { th: "Total Fees", td: ["0%", "3%", "8%", "14+%", "12+%", "20%+"] },
  {
    th: "Loyalty + Rewards",
    img: [
      { src: "/images/Verify.png", alt: "verified tickmark" },
      { src: "/images/cross.png", alt: "crossed tickmark" },
      { src: "/images/cross.png", alt: "crossed tickmark" },
      { src: "/images/cross.png", alt: "crossed tickmark" },
      { src: "/images/cross.png", alt: "crossed tickmark" },
      { src: "/images/cross.png", alt: "crossed tickmark" },
    ],
  },
  {
    th: "Discord Community",
    img: [
      { src: "/images/Verify.png", alt: "verified tickmark" },
      { src: "/images/Verify.png", alt: "verified tickmark" },
      { src: "/images/cross.png", alt: "crossed tickmark" },
      { src: "/images/cross.png", alt: "crossed tickmark" },
      { src: "/images/cross.png", alt: "crossed tickmark" },
      { src: "/images/cross.png", alt: "crossed tickmark" },
    ],
  },
  {
    th: "Refer to Earn",
    img: [
      { src: "/images/Verify.png", alt: "verified tickmark" },
      { src: "/images/Verify.png", alt: "verified tickmark" },
      { src: "/images/cross.png", alt: "crossed tickmark" },
      { src: "/images/cross.png", alt: "crossed tickmark" },
      { src: "/images/cross.png", alt: "crossed tickmark" },
      { src: "/images/cross.png", alt: "crossed tickmark" },
    ],
  },
  {
    th: "Directly Supports Small Businesses & Creators",
    img: [
      { src: "/images/Verify.png", alt: "verified tickmark" },
      { src: "/images/Verify.png", alt: "verified tickmark" },
      { src: "/images/cross.png", alt: "crossed tickmark" },
      { src: "/images/cross.png", alt: "crossed tickmark" },
      { src: "/images/cross.png", alt: "crossed tickmark" },
      { src: "/images/cross.png", alt: "crossed tickmark" },
    ],
  },
];

const RowHeading = [
  "Total Fees",
  "Loyalty + Rewards",
  "Discord Community",
  "Refer to Earn",
  "Directly Supports Small Businesses & Creators",
];

const AboutPage = () => {
  return (
    <div className="">
      <div className="h-[75vh]">
        <section className="flex justify-between items-center p-page gap-x- absolute top-[-0.5rem] -z-1">
          <div className="gap-y-6 flex flex-col pr-6">
            <span className="font-medium pt-10">
              Empowering Creators, Collectors and Entrepreneurs
            </span>
            <h1 className="text-4xl font-medium leading-[48px]">
              A Community First Marketplace
            </h1>
            <p className="text-base font-light text-gray-900 leading-8">
              Our mission is to build a community-focused marketplace where
              buyers can discover unique products and deals, and where small
              businesses and creators can access a wide audience without paying
              exorbitant fees.
            </p>

            <div>
              <Link
                className="border-2 inline  px-4 py-2 text-white bg-secondary rounded-lg "
                to="/register"
              >
                Get Started
              </Link>
            </div>
          </div>

          <img className="object-cover" src="/images/div.relative.png" alt="" />
        </section>
      </div>

      <section className="bg-secondary py-12 flex flex-wrap p-page relative ">
        {Features.map((data, key) => (
          <div
            className="flex flex-col w-[33%] items-center px-6 py-6 pb-12"
            key={key}
          >
            <img className="mb-6" src={data.img.src} alt={data.img.alt} />
            <h1 className="text-back font-medium text-xl mb-4">
              {data.heading}
            </h1>
            <p className="text-back font-extralight text-sm text-center leading-6">
              {data.description}
            </p>
          </div>
        ))}
      </section>

      <section className="px-32 pt-32 ">
        <div className="gap-y-5 flex-col flex border mr-2 px-8 pt-8 pb-4">
          <h1 className="text-3xl">
            Lowest fees in the game... for Buyers and Sellers.
          </h1>

          <p className="text-sm text-[#888888]">
            By keeping our fees low or at zero, sellers can offer lower prices.
            This lets us focus on making the best experience for our community
            members.
          </p>

          <table className="w-full ">
            <tr className="">
              <th className="w-[22%] "></th>
              {Accessibility.map((data, key) => (
                <th key={key} className=" w-[11%] px-2 border ">
                  <img
                    src={data.meberships.src}
                    alt={data.meberships.alt}
                    className=" object-cover border"
                  />
                  <div className="text-xs">{data.meberships.type}</div>
                </th>
              ))}
            </tr>

            {tableData.map((data, key) => (
              <tr key={key} className="">
                <th className="py-3 ">{data.th}</th>

                {data.img?.map((temp1, key) => (
                  <td>
                    <img src={temp1.src} alt={temp1.alt} />
                  </td>
                ))}

                {data.td?.map((temp2, key) => (
                  <td> {temp2} </td>
                ))}
              </tr>
            ))}
          </table>

          <div></div>

          <p className="text-sm text-[#888888] text-center">
            * Comparison applies to U.S. sellers listing Men’s and Women’s
            sneakers in the Athletic Shoes category.
          </p>
        </div>
      </section>

      <section className="flex flex-wrap w-full px-32 py-28 ">
        {QnA.map((data, key) => (
          <div
            className="flex flex-col w-[33%] px-10 h-[max(100vh,auto)] py-10 gap-y-8 border-2 border-gray-200"
            key={key}
          >
            <span className="text-lg">{data?.question}</span>
            <span className="text-sm">{data?.answer}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AboutPage;
