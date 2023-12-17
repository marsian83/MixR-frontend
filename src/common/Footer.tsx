// import Icon from "./Icon";

import { Link } from "react-router-dom";

const links = [
  {
    title: "About Us",
    items: [
      { to: "/about", title: "abott" },
      { to: "/lorem", title: "ipsum" },
    ],
  },
  {
    title: "About Us",
    items: [
      { to: "/about", title: "abott" },
      { to: "/lorem", title: "ipsum" },
    ],
  },
  {
    title: "About Us",
    items: [
      { to: "/about", title: "abott" },
      { to: "/lorem", title: "ipsum" },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <section className="flex flex-col bg-foreground justify-between items-center py-24 gap-y-10 font-poppins  ">
        <div className="text-3xl font-semibold"> Join the Community</div>
        <div className="flex flex-col items-center ">
          <p>
            We're here to create the{" "}
            <i>
              <b>best</b>
            </i>{" "}
            market place in game by putting community first.
          </p>
          <p>
            Starting with the use support - You can message us any time, and
            we'll get back to you asap{" "}
          </p>
        </div>

        <div className="grid grid-cols-3  font-sans ">
          <div className="flex flex-col justify-between items-center gap-y-8 px-8 border-r border-gray-300 ">
            <div className="text-3xl">Discord</div>
            <div className="text-gray-400 pb-3">Join</div>
          </div>

          <div className="flex flex-col justify-between items-center gap-y-8 px-8 border-r border-gray-300">
            <div className="text-3xl">Membership</div>
            <div className="text-gray-400 pb-3">Sign up</div>
          </div>

          <div className="flex flex-col justify-between items-center gap-y-8 px-8 ">
            <div className="text-3xl">Instagram</div>
            <div className="text-gray-400 pb-3">Follow us</div>
          </div>
        </div>
      </section>

      <section className="flex p-page bg-secondary py-14">
        <div className="w-[30%] text-sm self-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          maiores exercitationem quos pariatur optio! Reprehenderit ad fugit
          sapiente doloribus accusamus placeat sint ratione dolores,
        </div>
        <div className="flex flex-1 justify-between">
          {links.map((section, i) => (
            <div key={i} className="flex flex-col gap-y-5 w-[33%]">
              <h1>{section.title}</h1>
              <div className="flex flex-col gap-y-2">{section.items.map((item, key)=><Link key={key} to={item.to}>{item.title}</Link>)}</div>
            </div>
          ))}
        </div>
      </section>
    </footer>
  );
}
/*
<div className="w-full pb-6 flex mobile:flex-col gap-x-12 text-2xl font-poppins ">
<div className="w-96"></div>
<div className="flex-auto ">About Us</div>
<div className="flex-auto pl-4">Customer Care</div>
<div className="flex-auto pr-9">Contact Us</div>
</div>

<div className="flex flex-row gap-x-12 text-[0.95rem] w-full leading-8 font-normal">
<div className=" w-96 pl-2">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora in facere sequi, corporis rerum dolore autem explicabo ipsam volupt atum omnis at unde molestias sunt commodi vel atque, quae aliquid laboriosam?
</div>

<div className=" flex-auto text-gray-300">
  <div className=" ">
    <div>Careers</div>
    <div>Our Stores</div>
    <div className="text-white">Our Cares</div>
    <div>Terms & Conditions</div>
    <div>Privacy Policy</div>
  </div>
</div>

<div className="flex-auto  text-gray-300 pl-4">

<div className="">
  <div>Help Center</div>
  <div>How to Buy</div>
  <div className="text-white">Track Your Order</div>
  <div>Corporate & Bulk Purchasing</div>
  <div>Returns & Refunds</div>
</div>
</div>

<div className="flex-auto  text-gray-300">
  <div className="">
    <div>Corner View Subudhbazar,</div>
    <div>Sylhet,Bangladesh.</div>
    <div>Email: uilib@gmail.com</div>
    <div>Phone: +91 324324236 </div>
  </div>
  <div className="icons flex flex-row">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
</div> 
*/
