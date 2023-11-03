"use client";
import {Prose} from "@/components/Prose";
import {cn} from "@/lib/utils";
import {X} from "lucide-react";
import {useRouter} from "next/navigation";
import React, {
    Fragment,
    MouseEventHandler,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import {Motion} from "./Contents";

export function Modal({
    children,
    className,
    ...props
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(true);

    const onDismiss = useCallback(() => {
        setLoading(true);
        setOpen(false);
        router.back();
    }, [router]);

    const onClick: MouseEventHandler = useCallback(
        (e) => {
            if (e.target === overlay.current || e.target === wrapper.current) {
                if (onDismiss) onDismiss();
            }
        },
        [onDismiss, overlay, wrapper]
    );

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onDismiss();
        },
        [onDismiss]
    );

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown]);

    useEffect(() => {
        setLoading(false);
        setOpen(true);
    }, []);

    return (
        <Fragment>
            <Motion
                // @ts-ignore
                ref={overlay}
                key="modal"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                    duration: 0.1,
                    ease: "easeInOut",
                }}
                exit={{opacity: 0}}
                className={cn(
                    "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
                    "flex justify-center items-center "
                    // "glassmorphism"
                    // className
                )}
                onClick={onClick}
                {...props}
            >
                {/* <div
				ref={wrapper}
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6"
			>
				{children}
			</div> */}
                <Motion
                    // @ts-ignore
                    ref={wrapper}
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // transition={{
                    // 	duration: 0.75,
                    // 	ease: "easeOut",
                    // }}
                    // exit={{ opacity: 0 }}
                    className={cn(
                        // "fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 md:max-w-lg max-w-[90%] md:rounded-lg rounded-sm sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0 md:mt-0 mt-6",
                        "relative z-50 lg:w-1/2 md:w-8/12 sm:w-10/12 w-full lg:max-w-4xl max-w-[90%] md:p-6 p-4 md:m-4 m-3 border bg-background shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 data-[state=closed]:animate-out data-[state=closed]:fade-out md:rounded-lg rounded-sm sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0 md:mt-0 mt-6",
                        "max-h-[95vh] overflow-x-hidden overflow-y-scroll",
                        " bg-background/5 backdrop-blur-sm ",
                        className
                    )}
                    {...props}
                >
                    <Prose>{children}</Prose>
                    <button
                        disabled={loading}
                        type="button"
                        onClick={onDismiss}
                        className={cn(
                            "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                            loading && "pointer-events-none"
                        )}
                    >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </button>
                </Motion>
            </Motion>
        </Fragment>
    );
}
