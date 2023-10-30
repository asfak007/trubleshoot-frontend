"use client";

import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { Button } from "./Button";
import googlePlay from "@/images/google-play1.png";
import apple from "@/images/apple1.png";

export function Footer() {
  return (
    <footer className="w-full border-t bg-primary-100 py-10">
      <section
        id="footer-content"
        aria-labelledby="footer-content-heading"
        className="flex flex-col gap-10 lg:flex-row lg:gap-20 lg:justify-around relative mx-auto w-full max-w-7xl xl:px-8 "
      >
        <section
          id="footer-links"
          aria-labelledby="footer-links-heading"
          className="grid flex-1 grid-cols-1 gap-10 xs:grid-cols-2 sm:grid-cols-5"
        >
          <div className="space-y-3 col-span-2">
            <Image className="mr-4" src={siteConfig?.logo} width={130} height={73} alt="Picture of the author" />
            <h4 className=" text-lg text-black">{siteConfig?.Download_text}</h4>

            <div className="my-14 flex space-x-4 my-">
              <Button className="flex items-center  bg-black  text-white rounded-md px-5 py-2">
                <Image src={googlePlay} alt="Description" width={32} height={32} />
                <p className="text-lg "> Google play</p>
              </Button>
              <Button className="flex items-center  bg-black  text-white rounded-md px-5 py-2">
                <Image src={apple} alt="Description" width={32} height={32} />
                <p className="text-lg"> App Store</p>
              </Button>
            </div>
            <h4 className=" text-lg text-black">{siteConfig?.connected_us_text}</h4>
            <ul className="space-y-3 flex items-end">
              {siteConfig.socialLink.map((item, index) => [
                <Link key={item.item} href={item.link}>
                  <Image className="mr-4" src={item?.icon} width={40} height={40} alt="Picture of the author" />
                </Link>,
              ])}
            </ul>
          </div>

          {siteConfig.footerNav.map((item) => (
            <div key={item.title} className="space-y-3">
              <h4 className=" font-bold text-lg text-black">{item.title}</h4>
              <ul className="space-y-3">
                {item.items.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      target={link?.external ? "_blank" : undefined}
                      rel={link?.external ? "noreferrer" : undefined}
                      className=" text-white transition-colors hover:text-foreground"
                    >
                      <div className="flex items-start">
                        {link?.icon && <Image className="mr-4" src={link?.icon} width={20} height={20} alt="Picture of the author" />}
                        <p className="text-black">{link.title}</p>
                        <span className="sr-only">{link.title}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </section>
    </footer>
  );
}
