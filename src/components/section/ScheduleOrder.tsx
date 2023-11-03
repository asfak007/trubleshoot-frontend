"use client";
import useAuthToken from "@/hooks/useAuthToken";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { MapPin } from "lucide-react";

interface ScheduleDatesProps {
  setSelectedDay: React.Dispatch<React.SetStateAction<string>>;
  selectedDay: string;
}

type Inputs = {
  address: string;
  coponCode: string;
  hint: string;
};
function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed, so add 1
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}
export const ScheduleOrder = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const [selectedDay, setSelectedDay] = useState("");
  const [activeTab, setActiveTab] = useState("schedule");
  const [loading, setLoading] = useState<boolean>(false);
  const [userAddress, setUserAddess] = useState("");

  const handleFetchAddress = () => {};
  useEffect(() => {
    const handleFetchAddress = async () => {
      try {
        const request = await axios.get(`/auth/customer/address`);
        const response: AxiosResponse = await request.data;
        if (response.status) {
          const addressInfo = response.data.address;
          console.log("addressInfo", addressInfo);
          const { apartment_number, apartment_name, street_one, street_two, city, zip } = addressInfo;
          setUserAddess(`${apartment_number}, ${apartment_name} ${street_one} ${street_two} ${city} ${zip}`);
        }
      } catch (error) {
        console.log("error", error);
        // setProfile(initialProfile);
      }
    };
    handleFetchAddress();
  }, []);
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
    setSelectedDay("");
    if (tabName === "emergency") {
      const currentDate = new Date();
      const formattedDate = formatDate(currentDate);
      setSelectedDay(formattedDate);
    }
  };
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (selectedDay === "") {
      toast.error("Please Select Your Schedule Date");
      return;
    }
    const postBody = {
      service_id: 80,
      quantity: 1,
      schedule: selectedDay,
      payment_method: "cod",
      coupon: data.coponCode,
      hint: data.hint,
    };
    setLoading(true);
    try {
      const request = await axios.post(`/auth/customer/booking/register`, postBody);
      const response: AxiosResponse = await request.data;
      if (response.status) {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Schedule Order</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div className="py-5 rounded-md border shadow-xl w-full px-5">
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Addresses
            </label>
            <div className="flex items-center	gap-4   text-gray-900 border-0 text-sm rounded-lg focus:ring-0 focus:border-0  w-full px-2.5 py-5 dark:bg-gray-700 dark:placeholder-gray-400 ">
              <MapPin color="#319942" />
              <div>
                <h2 className="my-0 text-base	">Service in</h2>
                <h2 className="my-0">{userAddress}</h2>
              </div>
            </div>
          </div>
          <div className="py-5 rounded-md border shadow-xl w-full px-5">
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Coupon Code
            </label>
            <input
              {...register("coponCode")}
              type="text"
              id="first_name"
              className=" bg-gray-50  text-gray-900 border-0 text-sm rounded-lg focus:ring-0 focus:border-0 block w-full px-2.5 py-3 dark:bg-gray-700 dark:placeholder-gray-400 "
              placeholder="Type here..."
            />
          </div>
          <div className="py-5 rounded-md border shadow-xl w-full px-5 col-span-2">
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Hint
            </label>
            <textarea
              {...register("hint", {
                minLength: {
                  value: 10,
                  message: "Hint must be at least 10 characters long",
                },
                maxLength: {
                  value: 100,
                  message: "Hint cannot exceed 100 characters",
                },
              })}
              id="first_name"
              rows={4}
              className={`bg-gray-50 text-gray-900 border-0 text-sm rounded-lg focus:ring-0 focus:border-0 block w-full px-2.5 dark:bg-gray-700 dark:placeholder-gray-400 ${
                errors.hint ? "border-red-500" : "" // Add red border for invalid input
              }`}
              placeholder="Type here..."
              required
            />
            {errors.hint && <span className="text-red-500 text-sm">{errors.hint.message}</span>}
          </div>

          <div
            onClick={() => handleTabChange("schedule")}
            className={`cursor-pointer text-white ${
              activeTab === "schedule" ? "bg-primary-500" : "bg-gray-200 text-black"
            } hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-blue-300 text-left font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3`}
          >
            <input type="radio" checked={activeTab === "schedule"} onChange={() => handleTabChange("schedule")} className="mr-3 w-4 h-4" />
            Schedule on Order
          </div>
          <div
            onClick={() => handleTabChange("emergency")}
            className={`cursor-pointer text-white ${
              activeTab === "emergency" ? "bg-primary-500" : "bg-gray-200 text-black"
            } hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-blue-300 text-left font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3`}
          >
            <input
              type="radio"
              checked={activeTab === "emergency"}
              onChange={() => handleTabChange("emergency")}
              className="mr-3 w-4 h-4"
            />
            As Soon as Possible
          </div>
        </div>
        {activeTab === "emergency" ? <AsSoonAsPossible /> : <ScheduleDates selectedDay={selectedDay} setSelectedDay={setSelectedDay} />}
        <div className="w-full">
          <button
            type="submit"
            className="mt-5 text-lg	 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg  w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-5 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Schedule
          </button>
          
        </div>
      </form>
    </div>
  );
};

export const AsSoonAsPossible = () => {
  function formatDate(date: Date): string {
    const months: string[] = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month: string = months[date.getMonth()] ?? "Unknown Month";
    const day: number = date.getDate();
    const year: number = date.getFullYear();

    const formattedDate: string = `${month} ${day}/${year}`;
    return formattedDate;
  }
  const currentDate: Date = new Date();
  const formattedDate: string = formatDate(currentDate);
  return (
    <div>
      <h2 className="my-0">Today</h2>
      <h2 className="my-0">{formattedDate}</h2>
    </div>
  );
};

export const ScheduleDates: React.FC<ScheduleDatesProps> = ({ selectedDay, setSelectedDay }) => {
  const handleDayClick = (day: string) => {
    setSelectedDay(day);
  };
  const today = new Date();
  const nextFiveDays = Array.from({ length: 5 }, (_, index) => {
    const day = new Date();
    day.setDate(today.getDate() + index);
    const year = day.getFullYear();
    const month = String(day.getMonth() + 1).padStart(2, "0");
    const dayOfMonth = String(day.getDate()).padStart(2, "0");
    return {
      day: day.toLocaleDateString("en-US", { weekday: "long" }),
      date: `${year}-${month}-${dayOfMonth}`,
    };
  });
  return (
    <div>
      <h1>When would you like your service?</h1>
      <div className="bg-priamry-100 flex gap-2">
        {nextFiveDays.map((day, index) => (
          <div
            key={index}
            className={`w-40 cursor-pointer p-4 border border-gray-500 rounded-md ${
              selectedDay === day.date ? "bg-primary-100" : "bg-white"
            }`}
            onClick={() => handleDayClick(day.date)}
          >
            <h4 className="text-black font-bold">{day.day}</h4>
            <h4 className="text-black font-bold">{day.date}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
