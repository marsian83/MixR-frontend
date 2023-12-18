// import Icon from "./Icon";

import { Link } from "react-router-dom";

const links = [
  {
    title: "About Us",
    items: [
      { to: "/carrers", title: "Careers" },
      { to: "/ourStores", title: "Our stores" },
      { to: "/", title: "Our Cares" },
      { to: "/", title: "Terms & Conditions" },
      { to: "/", title: "Privacy Policy" },
    ],
  },
  {
    title: "Customer Care",
    items: [
      { to: "/about", title: "Help Center" },
      { to: "/lorem", title: "How to Buy" },
      { to: "/", title: "Track Your Order" },
      { to: "/", title: "Corporate &Bulk Purchasing " },
      { to: "/", title: "Return & Refunds " },
    ],
  },
  {
    title: "Contact Us",
    items: [
      { to: "#", title: `Corner View Subudhbazar,` },
      { to: "#", title: "Sylhet, Bangladesh." },
      { to: "#", title: "Email: uilib@gmail.com" },
      { to: "#", title: "Phone: +880 1123 456 780" },
      { to: "#", title: "Icons" },
    ],
  },
];

export default function Footer() {
  return (
    <footer>

      <section className="flex p-page flex-col justify-center bg-foreground text-center items-center py-20 gap-y-8 ">
        <h1 className="text-3xl font-semibold">Join the community</h1>
        <h2 className="font-light"> We're here to create the{" "} <i className="font-normal"> <b>best</b> </i>{" "}
            market place in game by putting community first. <br />
            Starting with the use support - You can message us any time, and
            we'll get back to you asap
          </h2>

      <div className="flex ">
        
          <div className="flex flex-col justify-between items-center gap-y-8 px-8 border-r border-gray-300 ">
            <div className="text-3xl">Discord</div>
            <div className="text-gray-400 pb-3"><Link to="#">Join</Link></div>
          </div>

          <div className="flex flex-col justify-between items-center gap-y-8 px-8 border-r border-gray-300">
            <div className="text-3xl"><Link to="/membership">Membership</Link></div>
            <div className="text-gray-400 pb-3"><Link to="/register">Sign up</Link></div>
          </div>

          <div className="flex flex-col justify-between items-center gap-y-8 px-8 ">
            <div className="text-3xl"><Link to="#">Instagram</Link></div>
            <div className="text-gray-400 pb-3">Follow us</div>
          </div>
      </div>

      </section>



      <section className="flex p-page bg-secondary py-16 text-white gap-x-8">
        <div className="w-[30%] text-sm self-center pr-4 leading-6 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          maiores exercitationem quos pariatur optio! Reprehenderit ad fugit
          sapiente doloribus accusamus placeat sint ratione dolores,
        </div>
        <div className="flex flex-1 justify-between">
          {links.map((section, i) => (
            <div key={i} className="flex flex-col gap-y-5 w-[33%]">
              <h1 className="text-2xl">{section.title}</h1>
              <div className="flex flex-col gap-y-2 text-base font-light text-gray-300">
                {section.items.map((item, key) => (
                  <Link key={key} to={item.to}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </footer>
  );
}
