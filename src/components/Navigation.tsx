"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { Button } from "@/components/Button";
import { useIsInsideMobileNavigation } from "@/components/MobileNavigation";
import { Tag } from "@/components/Tag";
import { remToPx } from "@/lib/remToPx";
import { usePathname } from "next/navigation";
import {
  LinkIcon,
  HomeIcon,
  Cog6ToothIcon,
  BellAlertIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  BanknotesIcon,
  UserCircleIcon,
  ArrowUpOnSquareStackIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import { LoadingDots } from "@/components/animation/Loading";
import { cn } from "@/lib/utils";
import { useMobileNavigationStore } from "@/hooks/use-mobile-navigation";
import { Boxes, CheckCheck, GitCompare, HardDrive, Info, LayoutList, MousePointerClick, Phone, Server, Terminal } from "lucide-react";
import { useOrigin } from "@/hooks/use-origin";
import { navigations } from "@/lib/const";

function useInitialValue(value: any, condition = true) {
  let initialValue = useRef(value).current;
  return condition ? initialValue : value;
}

function TopLevelNavItem({ href, children }: TopLevelNavItemProps) {
  return (
    <li className="md:hidden">
      <Link
        href={href}
        onClick={(e) => useMobileNavigationStore.getState().close()}
        className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}

function NavLink({ href, tag, active, isAnchorLink = false, children }: NavLinkProps) {
  return (
    <Fragment>
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        onClick={(e) => useMobileNavigationStore.getState().close()}
        className={cn(
          "flex justify-between gap-2 py-1 pr-3 text-sm transition",
          isAnchorLink ? "pl-7" : "pl-2",
          active ? "text-zinc-900 dark:text-white" : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        )}
      >
        <span className="truncate">{children}</span>
        {tag && (
          <Tag variant="small" color="zinc">
            {tag}
          </Tag>
        )}
      </Link>
    </Fragment>
  );
}

function VisibleSectionHighlight({ group, pathname }: GroupPathProps) {
  let [sections, visibleSections] = useInitialValue([[], []], useIsInsideMobileNavigation());

  let isPresent = useIsPresent();
  let firstVisibleSectionIndex = Math.max(
    0,
    [{ id: "_top" }, ...sections].findIndex((section) => section.id === visibleSections[0])
  );
  let itemHeight = remToPx(2);
  let height = isPresent ? Math.max(1, visibleSections.length) * itemHeight : itemHeight;
  let top = group.links.findIndex((link: any) => link.href === pathname) * itemHeight + firstVisibleSectionIndex * itemHeight;

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"
      style={{ borderRadius: 8, height, top }}
    />
  );
}

function ActivePageMarker({ group, pathname }: GroupPathProps) {
  let itemHeight = remToPx(2);
  let offset = remToPx(0.25);
  let activePageIndex = group.links.findIndex((link: any) => link.href === pathname);
  let top = offset + activePageIndex * itemHeight;

  return (
    <motion.div
      layout
      className="absolute left-2 h-6 w-px bg-primary-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      style={{ top }}
    />
  );
}
function NavigationGroup({ group, className }: GroupPathProps) {
  const pathname = usePathname();
  const { hash } = useOrigin();

  // If this is the mobile navigation then we always render the initial
  // state, so that the state does not change during the close animation.
  // The state will still update when we re-open (re-render) the navigation.
  let isInsideMobileNavigation = useIsInsideMobileNavigation();
  // let [router, sections] = useInitialValue(
  // 	[useRouter(), useSectionStore((s) => s.sections)],
  // 	isInsideMobileNavigation
  // );

  let [router, sections] = useInitialValue([pathname, []], isInsideMobileNavigation);

  let isActiveGroup = group.links.findIndex((link: any) => link?.href === pathname) !== -1;

  return (
    <li className={cn("relative", className)}>
      <motion.h2 layout="position" className="text-xs font-semibold text-zinc-900 dark:text-white">
        {group.title}
      </motion.h2>
      <div className="relative mt-3 pl-2">
        <AnimatePresence initial={!isInsideMobileNavigation}>
          {isActiveGroup && <VisibleSectionHighlight group={group} pathname={pathname} />}
        </AnimatePresence>
        <motion.div layout className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5" />
        <AnimatePresence initial={false}>{isActiveGroup && <ActivePageMarker group={group} pathname={pathname} />}</AnimatePresence>
        <ul role="list" className="border-l border-transparent">
          {group.links.map((link: any) => (
            <motion.li key={link.href} layout="position" className="relative">
              <NavLink href={link.href} active={link.href === pathname || link.href == `${pathname}/${hash}`} tag={link?.tag}>
                <span className="flex items-center">
                  {link.icon && <link.icon className="h-4 w-4 mr-1.5" />}
                  {link.title}
                </span>
              </NavLink>
              <AnimatePresence mode="popLayout" initial={false}>
                {link.href === pathname && link.sections && link.sections.length > 0 && (
                  <Fragment>
                    {link.sections?.map(
                      (
                        section: {
                          title: string;
                          links: [];
                        },
                        sectionIndex: number
                      ) => (
                        <Fragment key={sectionIndex}>
                          {section.links.length > 0 && (
                            <div className="relative pl-2">
                              <motion.h2 layout="position" className="text-xs font-semibold text-zinc-900 dark:text-white">
                                {section.title}
                              </motion.h2>
                              <motion.ul
                                role="list"
                                initial={{
                                  opacity: 0,
                                }}
                                animate={{
                                  opacity: 1,
                                  transition: {
                                    delay: 0.1,
                                  },
                                }}
                                exit={{
                                  opacity: 0,
                                  transition: {
                                    duration: 0.15,
                                  },
                                }}
                              >
                                {section.links?.map((link: any, index) => (
                                  <li key={`${link.href}${index}`}>
                                    <NavLink href={`${link.href}`} tag={link.tag} isAnchorLink>
                                      <span className="flex items-center">
                                        {link.icon && <link.icon className="h-4 w-4 mr-1.5" />}
                                        {link.title}
                                      </span>
                                    </NavLink>
                                  </li>
                                ))}
                              </motion.ul>
                            </div>
                          )}
                        </Fragment>
                      )
                    )}
                  </Fragment>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
    </li>
  );
}

type HeaderProps = {
  auth?: any;
  className?: any;
  cart?: any;
  sensitive?: boolean;
};

export function Navigation({ auth = false, cart = null, sensitive = false, className, ...props }: HeaderProps) {
  return (
    <nav className={cn(className)}>
      <ul role="list">
        <Fragment>
          <TopLevelNavItem href="/about">About</TopLevelNavItem>
          <TopLevelNavItem href="/services">All Services</TopLevelNavItem>
          <TopLevelNavItem href="/contact">Projects</TopLevelNavItem>
          <TopLevelNavItem href="/testimonials">Testimonials</TopLevelNavItem>
          <TopLevelNavItem href="/contact">Contact</TopLevelNavItem>
		  <TopLevelNavItem href="/privacy-policy">Privacy policy</TopLevelNavItem>
          <TopLevelNavItem href="/cookie-policy">Cookie policy</TopLevelNavItem>
          <TopLevelNavItem href="/terms-and-conditions">Terms and conditions</TopLevelNavItem>
		  <TopLevelNavItem href="/return-policy">Return policy</TopLevelNavItem>
          <Button
            variant="outline"
            className="border-primary-400 ring-primary-400 rounded-md px-4 text-primary-600 hover:text-primary-700"
            href="/login"
          >
            Login
          </Button>
        </Fragment>

        {/* {navigations.map((group, groupIndex) => (
					<NavigationGroup
						key={group.title}
						group={group}

						className={cn(
							groupIndex === 0 && "md:mt-0"
							// !auth && "hidden",
							// !sensitive && "md:block hidden"
						)}
					/>
				))} */}

        {/* <li
					className={cn(
						// "sticky bottom-0 z-10 mt-6 min-[416px]:hidden",
						"sticky bottom-0 z-10 mt-6 md:hidden"
					)}
				>
					<Button variant="filled" className="w-full" href="/cv.pdf">
						Download CV
					</Button>
				</li> */}
      </ul>
    </nav>
  );
}
