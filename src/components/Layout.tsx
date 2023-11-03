"use client";

import Link from "next/link";
import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";

import { Prose } from "@/components/Prose";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { HeroPattern } from "@/components/HeroPattern";
import { Footer } from "@/components/Footer";
import { Pattern } from "@/components/Hero";
import axios from "@/lib/axios";
import useAuthToken from "@/hooks/useAuthToken";
// import TagManager from "react-gtm-module";

export function Layout({ children = null }: LayoutProps) {
  const { authToken, clearToken } = useAuthToken();

  const [userInfo, setUserInfo] = useState(undefined);
  const pathname = usePathname();
  // const getProfileInfo = useCallback(async () => {
  //   if (authToken) {
  //     try {
  //       const response = await axios.get(`auth/customer`, {
  //         headers: {
  //           Authorization: `Bearer ${authToken}`,
  //         },
  //       });
  //       const responseData = response.data;
  //       if (responseData.status === 200) {
  //         setUserInfo(responseData?.info);
  //       }
  //     } catch (error) {
  //       setUserInfo(undefined);
  //     }
  //   }
  // }, [authToken, clearToken]);
  const getProfileInfo = async () => {
    if (authToken) {
      try {
        const response = await axios.get(`auth/customer`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        const responseData = response.data;
        if (responseData.status === 200) {
          setUserInfo(responseData?.info);
        }
      } catch (error) {
        setUserInfo(undefined);
      }
    }
  };
  useEffect(() => {
    getProfileInfo();
  }, [authToken]);

  return (
    <Fragment>
      <header className={cn("relative z-40 contents px-6 pt-4 pb-8 ")}>
        <Header auth={userInfo} />
      </header>
      <Prose
        as="main"
        className={cn(
          "relative min-h-[calc(100vh-75px)] pt-24  xl:overflow-visible overflow-hidden"
        )}
      >
        {pathname == "/" && (
          <>
            <HeroPattern /> <Pattern />
          </>
        )}
        {children}
      </Prose>
      <Footer
      // className={cn("absolute w-full bottom-0")}
      // className="py-6 lg:mt-10"
      />
    </Fragment>
  );
}
