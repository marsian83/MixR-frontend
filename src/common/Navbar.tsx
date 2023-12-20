import { Link } from "react-router-dom";
import DataForm from "./DataForm";
import Icon from "./Icon";
import { useState } from "react";

const NavbarCategory = [
  "Footwear",
  "Men",
  "Women",
  "Children",
  "Rising",
  "Shop by City",
  "Creators",
];

export default function Navbar() {

  

  return (
    <nav>
      <section className="p-page flex justify-between  py-6 ">
        <div className="flex w-[55%] justify-between items-center">
          <div className="py-2">
            <Link to="/">
              <img
                src="/logo.png"
                alt="logo of mixr"
                className="h-[3em] scale-150"
              />
            </Link>
          </div>

          <DataForm.Container
            onSubmit={(data) => {
              console.log(data);
            }}
            className="flex border-2 border-secondary w-[80%] rounded "
          >
            <div className="bg-foreground px-3 py-3 text-2xl">
              <Icon icon="search" />
            </div>

            <form className="w-[80%]" action="#">
              <DataForm.Input
                name="Search"
                type="text"
                placeholder=""
                required
                className="px-2 py-2 w-[100%] h-full outline-none"
              />
            </form>

            <DataForm.Input
              type="submit"
              value="Search"
              className="cursor-pointer bg-foreground px-3 py-2 text-sm font-medium"
            />
          </DataForm.Container>
        </div>

        <ul className="flex justify-between w-[35%] text-s items-center  ">
          <li className="font-medium py-2">
            <Link to="/membership"> Community</Link>{" "}
          </li>
          <li className="font-medium py-2">
            <Link to="/loyalty"> Loyalty</Link>{" "}
          </li>
          <li className="font-medium py-2">
            <Link to="/login"> Sign In</Link>
          </li>
          <li className="border-2 px-4 py-2 text-white bg-secondary rounded-lg ">
            <Link to="/register"> Sign Up</Link>
          </li>
          <li className="font-medium py-2 ">
            <Link to="/cart" className="flex justify-center items-center">
              <Icon icon="cart" className="text-3xl" />
              <div>Cart</div>
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <ul className="p-page flex justify-between bg-foreground py-2 font-poppins">
          <li className="flex justify-between w-[55%]">
            {NavbarCategory.map((data, i) => (
              <button className="flex items-center" key={i}>
                {data} <Icon icon="expand_more"></Icon>
              </button>
            ))}
          </li>
          <li>
            <button>Leaderboard</button>
          </li>
        </ul>
      </section>
    </nav>
  );
}
