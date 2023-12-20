import DataForm from "../../../common/DataForm";
import { Link } from "react-router-dom";
import Icon from "../../../common/Icon";

export default function Hero() {
  return (
    <div className="p-page font-RedRose">
      <div className="py-20 h-[65vh] w-full ">
        <div className="flex flex-col h-full gap-12">
          <div>
            <h1 className="text-5xl font-medium leading-[3.5rem]">
              One Maketplace to Discover <br /> Countless Stores & Brands
            </h1>
          </div>

          <div className=" w-full flex flex-col gap-y-6 ">
            <h2 className="text-xl"> Shop new sneakers and Clothing</h2>
            <DataForm.Container   onSubmit={(data) => {
              console.log(data);
            }} className="flex gap-x-3 w-full">
              <div className="w-[30%]  border-1 border-blue-300 shadow-[0_0px_2px_2px_rgba(96,165,250,0.3)] flex">
                <span className="p-2 w-[12%] flex justify-center items-center"><Icon icon="search" className="text-2xl" /></span>
                
                                
                <DataForm.Input
                  name="search_query"
                  type="text"
                  placeholder="Search for shoes, cloths and more..."
                  required
                  className="px-2 py-2 outline-none text-xs w-[88%]"
                />
              </div>
              
              <DataForm.Input
              type="submit"
              value="Search MixR"
              className="cursor-pointer py-2 px-6 text-sm bg-primary text-back rounded"
            />

              <Link to="/register" className="py-2 px-3 text-sm bg-white border-2 border-primary text-black rounded">
                {" "}
                Sign in / Sign Up{" "}
              </Link>
            </DataForm.Container>
          </div>
        </div>
      </div>
    </div>
  );
}
