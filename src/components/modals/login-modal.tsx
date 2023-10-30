"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { FacebookIcon, GoogleIcon } from "@/components/Icons";
import { Modal } from "@/components/Modal";
import { Prose } from "@/components/Prose";
import axios from "@/lib/axios";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { Logo } from "../Logo";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";
import useAuthToken from "@/hooks/useAuthToken";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
type loginInput = {
  email: string;
  password: string;
};

type signupInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
};
interface SignUpProps {
  setLoginFormTab: (tab: boolean) => void;
}

const LoginModal: React.FC<PageProps> = ({ children }) => {
  const { setToken } = useAuthToken();
  const router = useRouter();
  const [loginFormTab, setLoginFormTab] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<loginInput>();
  const onSubmit: SubmitHandler<loginInput> = async (data) => {
    try {
      const request = await axios.post(
        `auth/customer/login?login_field=${data.email}&password=${data.password}`
      );
      const response: AxiosResponse = await request.data;
      if (response.status === 200) {
        setToken(response.token);
        router.back();
        reset();
        window.location.reload();
        // const secretKey = "yourSecretKey";
        // const options = {
        //   expiresIn: "1h",
        // };
        // const token = jwt.sign(response.token, secretKey, options);
        // console.log("token", token)
      }
    } catch (error) {
      toast.error('Login Failed')
    }
  };
  return (
    <React.Fragment>
      <Modal className="lg:w-[100%] overflow-clip">
        <Prose enable={false} className="py-10">
          <div className="relative w-full flex justify-center">
            <Logo className="h-auto w-28" />
          </div>

          <div className="relative flex justify-center py-4">
            <div className="relative w-full max-w-xs space-y-4">
              {/* <div className="relative">
                <p className="lead font-semibold text-base text-center">
                  Login with
                </p>
              </div> */}
              {loginFormTab ? (
                <>
                  {" "}
                  <form onSubmit={handleSubmit(onSubmit)} action="">
                    <input
                      {...register("email")}
                      className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
                      id="grid-first-name"
                      type="text"
                      placeholder="Email"
                      required
                    />

                    <input
                      {...register("password")}
                      className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
                      id="grid-first-name"
                      type="password"
                      placeholder="Password"
                      required
                    />

                    <button
                      type="submit"
                      className="appearance-none block w-full bg-primary-500 text-black rounded py-4 px-4 mb-3 leading-tight border-0  focus:border-primary-500"
                    >
                      Login
                    </button>
                  </form>
                  <div className="relative flex items-center justify-between gap-4">
                    <Button
                      variant="filled"
                      className="w-full flex justify-center items-center bg-primary-50/90 hover:bg-primary-50 rounded-md py-2.5 font-semibold text-sm text-slate-600"
                    >
                      <FacebookIcon className="h-7 w-7 mr-2" />
                      Facebook
                    </Button>
                    <Button
                      variant="filled"
                      className="w-full flex justify-center items-center bg-primary-50/90 hover:bg-primary-50 rounded-md py-2.5 font-semibold text-sm text-slate-600"
                    >
                      <GoogleIcon className="h-6 w-6 mr-2" />
                      Google
                    </Button>
                  </div>
                </>
              ) : (
                <SignUp setLoginFormTab={setLoginFormTab}/>
              )}

              <p className="text-center font-medium">
                By Signing in i agree to the{" "}
                <Link
                  href="/terms-and-conditions"
                  className="text-sky-400 hover:text-sky-400"
                >
                  Terms & Condition
                </Link>
              </p>
              <p className="text-center font-semibold">
                {loginFormTab
                  ? " Don’t have an account?"
                  : "AllReady have an account?"}
              </p>

              <div className="relative flex justify-center">
                <Button
                  className="rounded-md ring-primary-500 hover:ring-primary-600 text-sm  py-2 px-5 "
                  variant="outline"
                  onClick={() => setLoginFormTab(!loginFormTab)}
                >
                  {loginFormTab ? "Signup" : "Login"}
                </Button>
              </div>
            </div>
          </div>
        </Prose>
      </Modal>
    </React.Fragment>
  );
};

export const SignUp: React.FC<SignUpProps> = ({ setLoginFormTab }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<signupInput>();

  const signInPhoneNumberSubmit: SubmitHandler<signupInput> = async (data) => {
    setIsLoading(true);
    const postBody = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone,
      password: data.password,
      lat: "23.7452981",
      lng: "90.3897981",
    };
    try {
      const request = await axios.post(`auth/customer/register`, postBody);
      const response: AxiosResponse = await request.data;
      if (response.status === 200) {
        toast.success('Login Success')
        setIsLoading(false);
        setLoginFormTab(true)
      }
    } catch (error) {
      setIsLoading(false);
      toast.error('User AllReady Exist!')
    }
  };
  return (
    <div className="relative flex justify-center py-8">
      <div className="relative w-full max-w-xs space-y-4">
        <div className="relative">
          {/* <p className="lead font-semibold text-base text-center">Continue using mobile number</p> */}
        </div>
        <>
          <form onSubmit={handleSubmit(signInPhoneNumberSubmit)}>
            <label htmlFor="firstName">First Name</label>
            <input
              {...register("firstName")}
              className="appearance-none block w-full bg-primary-100 text-black rounded py-3 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
              id="firstName"
              type="text"
              placeholder="First Name"
              required
            />
            <label htmlFor="firstName">Last Name</label>
            <input
              {...register("lastName")}
              className="appearance-none block w-full bg-primary-100 text-black rounded py-3 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
              id="grid-first-name"
              type="text"
              placeholder="Last Name"
              required
            />
            <label htmlFor="firstName">Email</label>
            <input
              {...register("email")}
              className="appearance-none block w-full bg-primary-100 text-black rounded py-3 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
              id="grid-first-name"
              type="email"
              placeholder="email"
              required
            />

            <label htmlFor="firstName">Phone</label>
            <input
              {...register("phone")}
              className="appearance-none block w-full bg-primary-100 text-black rounded py-3 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
              id="grid-first-name"
              type="text"
              placeholder="phone"
              required
            />
            <label htmlFor="firstName">Password</label>
            <input
              {...register("password")}
              className="appearance-none block w-full bg-primary-100 text-black rounded py-3 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
              id="grid-first-name"
              type="password"
              placeholder="Password"
              required
            />

            <button
              type="submit"
              className="flex items-center justify-center w-full bg-primary-500 text-black rounded py-3 px-4 mb-3 leading-tight border-0 focus:bg-primary-500 focus:border-primary-500"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : null}
              <span>Sign up</span>
            </button>
          </form>
        </>
      </div>
    </div>
  );
};

export default LoginModal;
