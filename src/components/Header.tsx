"use client";

import React, { Fragment, Ref, forwardRef, useState } from "react";
import Link from "next/link";
import { MotionStyle, MotionValue, motion, useScroll, useTransform } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { usePathname } from "next/navigation";
import { Button } from "@/components/Button";
import { MobileNavigation, useIsInsideMobileNavigation } from "@/components/MobileNavigation";
import { cn } from "@/lib/utils";
import { useMobileNavigationStore } from "@/hooks/use-mobile-navigation";
import { Logo } from "@/components/Logo";
import { fadeIn, slideIn, textVariant } from "@/utils/motion";

function TopLevelNavItem({ href, children, className, ...props }: { href: any; children: React.ReactNode; className?: string }) {
  const pathname = usePathname();
  return (
    <Fragment>
      <Link
        href={href}
        className={cn(
          "relative px-2.5 py-2 text-sm font-medium leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white",
          pathname == href && "text-zinc-900 dark:text-white",
          className
        )}
        {...props}
      >
        {children}
        {pathname == href && (
          <span className="absolute transition inset-x-1 -bottom-3 h-px bg-gradient-to-r from-primary-500/0 via-primary-500/40 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0" />
        )}
      </Link>
    </Fragment>
  );
}

type HeaderProps = {
  className?: string;
  auth?: any;
};

export const Header = forwardRef<HTMLHeadingElement, HeaderProps>(function Header(
  { className, auth = null },
  ref: Ref<HTMLHeadingElement>
) {
  const pathname = usePathname();
  let { isOpen: mobileNavIsOpen } = useMobileNavigationStore();
  let isInsideMobileNavigation = useIsInsideMobileNavigation();
  const [logoutLoading, setLogoutLoading] = useState(false);

  let { scrollY }: { scrollY: MotionValue<number> } = useScroll({
    layoutEffect: false,
  });
  let bgOpacityLight: MotionValue<number> = useTransform(scrollY, [0, 72], [0.5, 0.9]);
  let bgOpacityDark: MotionValue<number> = useTransform(scrollY, [0, 72], [0.2, 0.8]);

  return (
    <motion.div
      ref={ref}
      className={cn(
        className,
        "fixed inset-x-0 top-0 z-20 px-4 transition sm:px-6 lg:z-30 lg:px-8",
        "lg:justify-between",
        // !isInsideMobileNavigation && "backdrop-blur-sm dark:backdrop-blur lg:left-60 xl:left-64",
        isInsideMobileNavigation
          ? "bg-white dark:bg-zinc-900"
          : "bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]"
      )}
      style={
        {
          "--bg-opacity-light": bgOpacityLight,
          "--bg-opacity-dark": bgOpacityDark,
        } as MotionStyle
      }
    >
      <div
        className={cn(
          "absolute inset-x-0 top-full h-px transition",
          (isInsideMobileNavigation || !mobileNavIsOpen) && "bg-zinc-900/7.5 dark:bg-white/7.5"
        )}
      />
      <div className={cn("relative h-14 gap-12 flex justify-between items-center", "lg:justify-between", "max-w-7xl xl:px-8 mx-auto")}>
        <div className="flex items-center gap-3 lg:hidden">
          <MobileNavigation auth={auth} />
          <Link href="/" aria-label="Home" onClick={(e) => useMobileNavigationStore.getState().close()} className="relative block">
            <Logo className="h-9" />
          </Link>
        </div>

        <div className="hidden lg:flex">
          <Link href="/" aria-label="Home">
            <Logo className="h-9" />
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {/* {!error && (
							<Fragment>
								<TopNavigationMenu className="hidden md:block" />
								<div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
							</Fragment>
						)} */}
          <Fragment>
            <TopNavigationMenu auth={auth} className="hidden md:block" />
            {/* <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" /> */}
          </Fragment>

          {/* <div className="flex gap-4 ml-2">
							<ModeToggle />
						</div> */}
        </div>
      </div>
    </motion.div>
  );
});

const components: { title: string; href: string }[] = [
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    title: "Cookie policy",
    href: "/cookie-policy",
  },
  {
    title: "Terms And Conditions",
    href: "/terms-and-conditions",
  },
  {
    title: "Return Policy",
    href: "/return-policy",
  },
];

export function TopNavigationMenu({ ...props }) {
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <TopLevelNavItem className={navigationMenuTriggerStyle()} href="/about">
            About
          </TopLevelNavItem>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <TopLevelNavItem href="#">Pages</TopLevelNavItem>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-1 w-[220px] py-2 bg-primary-50/50">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <TopLevelNavItem className={navigationMenuTriggerStyle()} href="/services">
            All Services
          </TopLevelNavItem>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <TopLevelNavItem className={navigationMenuTriggerStyle()} href="/contact">
            Contact
          </TopLevelNavItem>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {!props?.auth ? (
            <Fragment>
              <Button
                variant="outline"
                className="border-primary-400 ring-primary-400 rounded-md px-4 text-primary-600 hover:text-primary-700"
                href="/login"
              >
                Login
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <TopLevelNavItem className={navigationMenuTriggerStyle()} href="/my-account"><img className="w-12 h-12 rounded-full" src={props?.auth?.image} alt="Profile" /></TopLevelNavItem>               
            </Fragment>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, href, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild className="max-h-[600px] overflow-x-hidden overflow">
          <Link
            ref={ref}
            href={`${href}`}
            className={cn(
              "block select-none space-y-1 rounded-md px-4 py-3 leading-none text-sm font-extralight no-underline outline-none transition-colors hover:bg-primary-50",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-6 text-sm leading-snug text-muted-foreground">{children}</p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
interface SectionProps {
  title?: string;
  intro?: string;
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, intro, children }) => {
  return (
    <Fragment>
      <motion.div className="xl:mt-14 lg:mt-10 md:mt-7 text-balance">
        <div className="max-w-4xl">
          <div className="my-1 overflow-hidden">
            <motion.div
              // initial={{ y: "120%", opacity: 0 }}
              // whileInView={{ y: 0, opacity: 1 }}
              // animate={{ y: 0, opacity: 1 }}
              // transition={{
              // 	duration: 0.75,
              // 	delay: 0.2,
              // }}
              variants={slideIn("up", "spring", 0.5, 0.75)}
              initial="hidden"
              whileInView="show"
              className="lg:text-6xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 md:text-5xl text-4xl text-balance"
            >
              {title}
            </motion.div>
          </div>
          <motion.div
            variants={textVariant(0.5)}
            initial="hidden"
            whileInView="show"
            className="lead"
            // viewport={{ once: true, amount: 0.25 }}
          >
            {intro}
          </motion.div>
        </div>
      </motion.div>
      {children}
    </Fragment>
  );
};
