import { Logo } from "@/components/Logo";
import ProviderTitle from "@/components/provider/register/title";
import RegisterForm from "@/components/section/RegisterForm";
import React from "react";

export default function ProviderRegisterPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative flex justify-center ">
        <Logo className="h-20 w-20 object-contain" />
      </div>
      <div className="relative flex flex-col !w-full gap-2">
        <ProviderTitle />
        <RegisterForm />
      </div>
    </div>
  );
}
