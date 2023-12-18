import { Link } from "react-router-dom";
import DataForm from "./DataForm";
import Icon from "./Icon";

export default function Navbar() {
  return (
    <nav>
      <section className="p-page flex justify-between  py-6 ">
        <div className="flex w-[55%] justify-between ">
          <div className=" py-2">
            <Link to="/">Mixr LoGO</Link>
          </div>

          <DataForm.Container
            onSubmit={(data) => {
              console.log(data);
            }}
            className="flex border-2 border-secondary w-[80%] rounded "
          >
            <DataForm.Input
              type="submit"
              value="Icon"
              className="cursor-pointer bg-foreground px-3 py-3 text-xs"
            />

            <form className="w-[80%]" action="#">
              <DataForm.Input
                name="Search"
                type="text"
                placeholder=""
                required
                className="px-2 py-2 w-[100%] outline-none"
              />
            </form>

            <DataForm.Input
              type="submit"
              value="Search"
              className="cursor-pointer bg-foreground px-3 py-2 text-xs font-medium"
            />
           
          </DataForm.Container>
        </div>

        <ul className="flex justify-between w-[35%] text-s   ">
          <li className="font-medium py-2">
            <Link to="/community"> Community</Link>{" "}
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
          <li className="font-medium py-2">
            <Link to="/cart"> Ic Cart</Link>
          </li>
        </ul>
      </section>

      <section>
        <ul className="p-page flex justify-between bg-foreground py-2 font-poppins">
          <li className="flex justify-between w-[55%]">
            <div className="flex items-center ">Footwear <Icon icon="expand_more"></Icon></div>
            <div className="flex items-center ">Men <Icon icon="expand_more"></Icon></div>
            <div className="flex items-center ">Women <Icon icon="expand_more"></Icon></div>
            <div className="flex items-center ">Children <Icon icon="expand_more"></Icon></div>
            <div className="flex items-center ">Rising <Icon icon="expand_more"></Icon></div>
            <div className="flex items-center ">Shop by City <Icon icon="expand_more"></Icon></div>
            <div className="flex items-center ">Creators <Icon icon="expand_more"></Icon></div>
          </li>
          <li>Leaderboard</li>
        </ul>
      </section>
    </nav>
  );
}
