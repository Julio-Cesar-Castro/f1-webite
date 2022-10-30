import * as Checkbox from "@radix-ui/react-checkbox";
import {
  Envelope,
  LockKey,
  Check,
  TwitterLogo,
  GoogleLogo,
  InstagramLogo,
} from "phosphor-react";

import Logo from "../../assets/F1-Logo.svg";

export default function Login() {
  return (
    <div className="w-full h-[100vh] flex bg-grey-800">
      <div className="w-[50%] h-full bg-F1 bg-cover bg-center bg-no-repeat"></div>
      <div className="w-[50%] h-full flex items-center justify-center">
        <div className="w-[501px] h-[750px]">
          <div className="w-full h-[180px] flex flex-col items-center">
            <img src={Logo} alt="LogoType F1" />
            <h2 className="text-3xl text-grey-400 mt-16">
              Welcome to our website
            </h2>
            <p className="text-lg text-grey-400 mt-2">Login with an account</p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col mt-9 text-grey-100"
          >
            <div className="flex flex-col gap-3">
              <label htmlFor="Email">E-mail</label>
              <div className="w-full h-[55px] flex items-center gap-3 px-6 py-6 bg-grey-600 rounded focus-within:ring-2 ring-White">
                <Envelope size={24} />
                <input
                  id="Email"
                  type="text"
                  placeholder="Youremailhere@gmail.com"
                  name="Email"
                  className="w-full bg-transparent  placeholder:text-grey-100  text-sm outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <label htmlFor="Password">Password</label>
              <div className="w-full h-[55px] flex items-center gap-3 px-6 py-6 bg-grey-600 rounded focus-within:ring-2 ring-White">
                <LockKey size={24} />
                <input
                  id="Password"
                  type="Password"
                  placeholder="******************"
                  name="Password"
                  className="w-full bg-transparent  placeholder:text-grey-100  text-sm outline-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <Checkbox.Root className="w-6 h-6 p-[2px] rounded bg-grey-600">
                <Checkbox.Indicator>
                  <Check className="w-5 h-5 text-red-300" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className="text-grey-100">Lembre-se de mim</label>
            </div>

            <button className="w-[500px] h-[55px] bg-red-300 hover:bg-red-600 rounded mt-8">
              <span className="text-lg text-White">Login</span>
            </button>

            <div className="text-sm text-grey-100 underline mt-10 flex flex-col items-center justify-center">
              <p className="cursor-pointer">Forget your password? Click here</p>
              <p className="mt-4 cursor-pointer">Need an account? Sign In</p>
            </div>

            <div className="w-full flex items-center justify-center gap-16 mt-9">
              <div className="w-[55px] h-[55px] bg-red-300 rounded-full flex items-center justify-center">
                <TwitterLogo
                  size={35}
                  color="#fff"
                  className="cursor-pointer"
                />
              </div>
              <div className="w-[55px] h-[55px] bg-red-300 rounded-full flex items-center justify-center">
                <GoogleLogo size={35} color="#fff" className="cursor-pointer" />
              </div>
              <div className="w-[55px] h-[55px] bg-red-300 rounded-full flex items-center justify-center">
                <InstagramLogo
                  size={35}
                  color="#fff"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
