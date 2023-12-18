import { Link } from "react-router-dom";
import DataForm from "../../common/DataForm";

const LoginPage = () => {
  return (
    <div className="p-page">
      <div className="w-full flex justify-center items-center py-16 ">
        <div className="flex flex-col justify-center items-center space-y-4 w-[35%] ">
          <h1 className="text-[1.7rem] font-normal pb-3 ">Log in to MixR</h1>

          <DataForm.Container
            onSubmit={(data) => {
              console.log(data);
            }}
            className="flex flex-col justify-center items-center space-y-4 w-[100%] "
          >
            <div className="w-[100%] space-y-2">
              <DataForm.Input
                required
                name="Email"
                className="w-full px-4 py-3 border-2 border-gray-400 rounded-md bg-foreground outline-0"
                type="text"
                placeholder="Enter Adressess"
              />
              <DataForm.Input
                required
                name="Password"
                className="w-full px-4 py-3 border-2 border-gray-400 rounded-md bg-foreground outline-0"
                type="password"
                placeholder="Password"
              />
            </div>

            <Link
              to="#"
              className="text-left pb-2 w-[100%] text-sm font-medium underline underline-offset-4 py-1"
            >
              Forget Password?
            </Link>

            <DataForm.Input
              type="submit"
              value={"Continue"}
              className="cursor-pointer w-full px-4 py-4 text-sm font-medium text-white bg-secondary rounded-lg hover:bg-gray-500 hover:text-black "
            />
          </DataForm.Container>

          <div className="flex justify-center items-center space-x-2 text-sm">
            <p>Didn't have a account?</p>
            <p className="hover:text-gray-500 text-black font-medium underline underline-offset-4">
              <Link to="/register">Sign up</Link>
            </p>
          </div>
          <div className="text-sm">OR</div>
          <div className="w-[100%] space-y-2">
            <button className="w-full px-4 py-4 text-sm font-medium text-gray-600 bg-foreground rounded-lg border-2 border-gray-300 ">
              CONTINUE WITH GOOGLE
            </button>
            <button className="w-full px-4 py-4 text-sm font-medium text-gray-600 bg-foreground rounded-lg border-2 border-gray-300 ">
              CONTINUE WITH WALLET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
