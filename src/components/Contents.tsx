"use client";

import {cn} from "@/lib/utils";
import {AnimatePresence, MotionProps, motion} from "framer-motion";
import React, {Fragment, ReactNode} from "react";

interface ContentsProps {
    className?: string;
    children?: ReactNode;
}

const Contents: React.FC<ContentsProps> = ({
    children,
    className,
    ...params
}) => {
    return (
        <Fragment>
            <section
                {...params}
                className={cn(
                    "relative", // default class
                    className
                )}
            >
                {children}
            </section>
        </Fragment>
    );
};

export default Contents;

interface MotionComponentProps extends MotionProps {
    className?: string;
    as?: keyof JSX.IntrinsicElements | React.ComponentType<string>;
    children?: React.ReactNode;
    onMouseMove?: any;
}

export const Motion: React.FC<MotionComponentProps> = ({
    children,
    className,
    onMouseMove,
    as = "div",
    ...params
}) => {
    // @ts-ignore
    const Component: any = typeof as === "string" ? motion[as] : motion["div"];

    return (
        <Component
            {...params}
            className={cn(
                "", // default class
                className
            )}
        >
            {children}
        </Component>
    );
};

export const Animator = AnimatePresence;
