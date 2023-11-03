"use client";
import userDemoProfile from "@/images/Ellipse298.png";
import logoutIcon from "@/images/icons/enter1.png";
import menIcon from "@/images/icons/man1.png";
import notificationIcon from "@/images/icons/notification1.png";
import addressIcon from "@/images/icons/placeholder1.png";
import shield from "@/images/icons/shield.png";
import { ChevronDown, Home, LogOut } from "lucide-react";
import Image from "next/image";
import { Dispatch, Fragment, SetStateAction, useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { Heading } from "../Heading";
import axios from "@/lib/axios";
import Loading from "@/app/loading";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import useAuthToken from "@/hooks/useAuthToken";
import { useRouter } from "next/navigation";

export const MyAccount = () => {
  const initialProfile: Profile = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    image: "",
    address: {
      apartment_name: "",
      zip: "",
    },
  };

  const [tab, setTab] = useState<string>("my-account");
  const [tab1, setTab1] = useState<string>("general");
  const [loading, setLoading] = useState<boolean>(true);
  const [profile, setProfile] = useState<Profile>(initialProfile);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const request = await axios.get(`/auth/customer`);
        const response: AxiosResponse = await request.data;

        if (response.status) {
          const ProfileInfo = response.info;

          setProfile(ProfileInfo);
        }
      } catch (error) {
        setProfile(initialProfile);
      }
      setLoading(false);
    };
    getProfile();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-4 grid-flow-col gap-20 relative w-full py-10 xl:pt-10">
      <UserAccountTab setTab={setTab} tab={tab} />
      <div className="col-span-3">
        <UserProfileImage profile={profile} />
        {/* <FormChangeTabBTN setTab={setTab1} tab={tab1} /> */}
        {tab === "my-account" && <GeneralInfo profile={profile} />}
        {tab === "my-address" && <Address />}
        {tab === "password" && <AccountInfo />}
        {tab === "notification" && <Notification />}
        {tab === "logout" && <Logout />}
        {tab1 === "info" && <AccountInfo />}
      </div>
    </div>
  );
};

export const UserAccountTab = ({ tab, setTab }: { tab: string; setTab: Dispatch<SetStateAction<string>> }) => {
  return (
    <div className=" -mb-px text-sm font-medium text-gray-500 dark:text-gray-400">
      <li className={`mr-2 list-none cursor-pointer ${tab === "my-account" && "bg-primary-100"} `}>
        <div
          onClick={() => setTab("my-account")}
          className="inline-flex  items-center justify-start	 p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
        >
          <Image src={menIcon} alt="Description" width={25} height={25} className="mt-0 mb-0" />
          <span className="ml-2"> My Account</span>
        </div>
      </li>
      <li className={`mr-2 list-none cursor-pointer ${tab === "my-address" && "bg-primary-100"} `}>
        <div
          onClick={() => setTab("my-address")}
          className="inline-flex items-center justify-start  p-4 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
          aria-current="page"
        >
          <Image src={addressIcon} alt="Description" width={25} height={25} className="mt-0 mb-0" />
          <span className="ml-2"> My addresses</span>
        </div>
      </li>

      <li className={`mr-2 list-none cursor-pointer ${tab === "password" && "bg-primary-100"}`}>
        <div
          onClick={() => setTab("password")}
          className="inline-flex items-center justify-start  p-4 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
          aria-current="page"
        >
          <Image src={shield} alt="Description" width={25} height={25} className="mt-0 mb-0" />
          <span className="ml-2"> Change password</span>
        </div>
      </li>

      <li className={`mr-2 list-none cursor-pointer ${tab === "notification" && "bg-primary-100"}`}>
        <div
          onClick={() => setTab("notification")}
          className="inline-flex items-center justify-start	 p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
        >
          <Image src={notificationIcon} alt="Description" width={25} height={25} className="mt-0 mb-0" />
          <span className="ml-2">Notification</span>
        </div>
      </li>
      <li className={`mr-2 list-none cursor-pointer ${tab === "logout" && "bg-primary-100"}`}>
        <div
          onClick={() => setTab("logout")}
          className="inline-flex items-center justify-start	 p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
        >
          <Image src={logoutIcon} alt="Description" width={25} height={25} className="mt-0 mb-0" />
          <span className="ml-2"> Logout</span>
        </div>
      </li>
    </div>
  );
};

export const UserProfileImage = ({ profile }: { profile: Profile }) => {
  const {
    first_name,
    last_name,
    image,
    address: { apartment_name, zip },
    phone,
    email,
  } = profile;

  return (
    <div className="flex items-center space-x-4 ">
      <label htmlFor="fileInput" className="cursor-pointer">
        <Image src={image} alt="Image" height={24} width={24} className="w-24 h-24 m-0 rounded-ful" />
      </label>
      {/* accept={allowedTypes.join(",")} */}
      <input type="file" id="fileInput" className="hidden" />
      <div className=" dark:text-white">
        <h4 className="text-xl font-medium capitalize">{first_name + " " + last_name}</h4>
        <h6 className="">
          {apartment_name || "No Name"}, {zip || "0"}
        </h6>
      </div>
    </div>
  );
};

export const GeneralInfo = ({ profile }: { profile: Profile }) => {
  const {
    first_name,
    last_name,
    image,
    address: { apartment_name, zip },
    phone,
    email,
  } = profile;

  type accountFormData = {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    refer_code: string;
  };

  const [generalInfoData, setGeneralInfoData] = useState<accountFormData>({
    first_name,
    last_name,
    email,
    phone,
    refer_code: "",
  });
  // TODO=> Working User Info Form Update

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<accountFormData>();

  const onSubmit: SubmitHandler<accountFormData> = async (data) => {
    try {
      const request = await axios.post(
        `auth/customer/update?first_name=${data.first_name}&last_name=${data.last_name}&email=${data.email}`
      );
      const response: AxiosResponse = await request.data;

      if (response.status === 200) {
        toast.success(response.message);
      }
    } catch (error) {}

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="grid-first-name">
            First Name
          </label>
          <input
            {...register("first_name")}
            className="appearance-none capitalize block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="First Name"
            defaultValue={generalInfoData.first_name}
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="grid-first-name">
            Last Name
          </label>
          <input
            {...register("last_name")}
            className="appearance-none capitalize block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            defaultValue={generalInfoData.last_name}
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="grid-first-name">
            Email Address
          </label>
          <input
            {...register("email")}
            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            defaultValue={generalInfoData.email}
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="grid-first-name">
            Phone number
          </label>
          <input
            {...register("phone")}
            disabled
            className="appearance-none block w-full bg-gray-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            defaultValue={generalInfoData.phone}
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="grid-first-name">
            Reference Code
          </label>
          <input
            {...register("refer_code")}
            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
      </div>
      <div className="w-full text-center">
        <Button className="font-semibold mx-auto bg-primary-500/90 hover:bg-primary-500 text-white rounded px-16 py-2" variant="filled">
          Save Changes
        </Button>
      </div>
    </form>
  );
};

export const AccountInfo = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<{
    old_password: string;
    new_password: string;
  }>();

  const onSubmit: SubmitHandler<{
    old_password: string;
    new_password: string;
  }> = async (data) => {
    try {
      const request = await axios.post(`auth/customer/change-password?old-password=${data.old_password}&password=${data.new_password}`);
      const response: AxiosResponse = await request.data;
      console.log(response);

      if (response.status === 200) {
        toast.success(response.message);
      }
    } catch (error) {}

    reset();
  };

  return (
    <form className="w-full ">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="grid-first-name">
            Old Password
          </label>
          <input
            {...register("old_password")}
            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="Old password"
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="grid-first-name">
            New Password
          </label>
          <input
            {...register("new_password")}
            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="New password"
          />
        </div>
      </div>
      <div className="w-full text-center">
        <Button className="font-semibold mx-auto bg-primary-500/90 hover:bg-primary-500 text-white rounded px-16 py-2" variant="filled">
          Save Changes
        </Button>
      </div>
    </form>
  );
};

export const Address = () => {
  return (
    <Fragment>
      <div className="flex items-center">
        <Button className="font-semibold bg-primary-500/90 hover:bg-primary-500 text-white rounded py-2 mr-2">
          <Home />
        </Button>
        <p className="text-black">Address</p>
      </div>
      <h4 className="text-black py-2">Expert will arrive at the address given below</h4>
      <form className="w-full ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="grid-first-name">
              House No.
            </label>
            <input
              className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
              id="grid-first-name"
              type="text"
              placeholder="House number"
            />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="grid-first-name">
              Road no or number
            </label>
            <input
              className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
              id="grid-first-name"
              type="text"
              placeholder="Road number"
            />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="grid-first-name">
              Block No.
            </label>
            <input
              className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
              id="grid-first-name"
              type="text"
              placeholder="Block No."
            />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="grid-first-name">
              Sector No.
            </label>
            <input
              className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
              id="grid-first-name"
              type="text"
              placeholder="Sector No"
            />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="grid-first-name">
              Area
            </label>
            <input
              className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
              id="grid-first-name"
              type="text"
              placeholder="Area"
            />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
        </div>
        <div className="w-full text-center">
          <Button className="font-semibold mx-auto bg-primary-500/90 hover:bg-primary-500 text-white rounded px-16 py-2" variant="filled">
            Save Changes
          </Button>
        </div>
      </form>
    </Fragment>
  );
};
export const Notification = () => {
  return (
    <Fragment>
      <Heading level={1}>All Notification</Heading>
      <div className="grid flex-col w-full border   rounded-lg  dark:bg-gray-800 dark:border-gray-700 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-primary-500"></div>
            <h4 className="ml-5 text-lg	 text-black">Network setup and maintenace</h4>
          </div>
          <div className="flex">
            <h4 className="mr-3">
              August
              <span className="text-primary-500 mx-1 mr-3">09/2021</span>
              Time
              <span className="text-primary-500 mx-1"> 01:00</span>
              PM
            </h4>
            <ChevronDown />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export const Logout = () => {
  const { authToken, clearToken } = useAuthToken();
  const handleLogout = () => {
    clearToken();
    axios
      .post(`auth/customer/logout`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        window.location.href="/"
      })
      .catch((error) => {
        console.error("Logout failed");
      });
  };
  return (
    <Fragment>
      <div className="grid w-full  flex justify-center items-center dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full max-w-md p-4">
          <div className="w-full flex justify-center items-center mb-8">
            <LogOut />
          </div>
          <h4 className="text-center mb-8">Are you sure want to logout?</h4>
          <div className="flex justify-center mb-8">
            <Button className="font-semibold bg-slate-100 hover:bg-primary-500 text-black rounded px-10 py-2 border mx-5" variant="filled">
              No
            </Button>
            <Button
              onClick={handleLogout}
              className="font-semibold bg-primary-500/90 hover:bg-primary-500 text-white rounded px-10 py-2 mx-5"
              variant="filled"
            >
              Yes
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export const FormChangeTabBTN = ({ tab, setTab }: { tab: string; setTab: Dispatch<SetStateAction<string>> }) => {
  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Button
          onClick={() => setTab("general")}
          className={` ${
            tab === "general" ? "bg-primary-500/90 text-white" : "bg-slate-100 text-black"
          } font-semibold  hover:bg-primary-500  rounded px-16 py-2 border`}
          variant="filled"
        >
          General Info
        </Button>
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Button
          onClick={() => setTab("info")}
          className={` ${
            tab === "info" ? "bg-primary-500/90 text-white" : "bg-slate-100 text-black"
          } font-semibold  hover:bg-primary-500  rounded px-16 py-2 border`}
          variant="filled"
        >
          Account Info
        </Button>
      </div>
    </div>
  );
};
