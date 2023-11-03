"use client";
import LoginModal from "@/components/modals/login-modal";
import Cookies from "js-cookie";
import React, { Fragment } from "react";
import { useRouter } from "next/navigation";
export default function page() {
  const router = useRouter();
  const authToken = Cookies.get("authToken");
  if (authToken) {
    router.push("/");
  }
  return (
    <Fragment>
      <LoginModal />
    </Fragment>
  );
}
