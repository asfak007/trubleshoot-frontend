"use client";

import BlurImage from "@/components/BlurImage";
import {Button} from "@/components/Button";
import Contents from "@/components/Contents";
import {Heading} from "@/components/Heading";
import {PencilRuler} from "@/components/Icons";
import aboutImage from "@/images/about.png";
import {
    ChatBubbleOvalLeftEllipsisIcon,
    PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import React, {Fragment, ReactNode} from "react";

export default function About() {
    return (
        <Contents className="max-w-6xl mx-auto ">
            <div className="relative w-full">
                <Heading level={1}>About</Heading>
                <div className="relative grid xl:grid-cols-5 lg:grid-cols-4 xl:py-14 py-8">
                    <div className="relative xl:col-span-3 lg:col-span-2 col-span-1 py-4 pr-4">
                        <Heading
                            level={1}
                            className="text-balance xl:text-5xl lg:text-4xl md:text-4xl text-3xl"
                        >
                            Your IT Trouble is ours to find and solve
                        </Heading>
                        <p className="lead text-balance py-4">
                            Troubleshoot is a start-up organization offering
                            residents of Bangladesh a complete IT corporate
                            service. By developing the reputation as a
                            qualified, reasonably priced and trusted service
                            provider, troubleshoot quickly generated market
                            penetration and develop a solid foundation of repeat
                            customers. We are here to make your corporate life
                            run smoothly! We work on demand subject to
                            availability, nevertheless arrive on time, and are
                            available for a same day call-outs wherever
                            possible. Our multi-skilled troubleshooters work
                            alone unless otherwise requested by customers. We
                            are always here to help, at a time that suits you
                        </p>
                    </div>

                    <div className="relative lg:col-span-2 col-span-1 lg:p-4 p-0">
                        <div className="relative overflow-hidden flex lg:items-start lg:justify-end items-center justify-start">
                            <BlurImage
                                src={aboutImage}
                                height={400}
                                width={400}
                                alt=""
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="lg:aspect-[10/7] md:aspect-[10/4] aspect-[10/6] w-full m-0 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full">
                <Heading level={1}>Why Troubleshoot?</Heading>
                <div className="relative py-2">
                    <p className="lead text-balance">
                        As a Troubleshoot, we will offer a wide range of
                        Corporate IT repair services. The services are generally
                        minor tasks, if the problem becomes major a contractor
                        is best suited to solve the difficulty. Troubleshoot
                        will offer the value-added feature to pre-screen a
                        contractor when we are unable to perform the repair.
                        This will develop a trust bond with the customer so that
                        when a more minor issue comes up the customer is more
                        likely to call us due to the honesty displayed earlier.
                        We offer fix-it services for: Office Equipment, Servers,
                        Office Automation & Software.
                    </p>
                </div>
            </div>

            <div className="relative w-full space-y-8 py-10 xl:pt-20">
                <Card title="Service Commitment" icon={<PencilRuler />}>
                    <p className="lead text-balance mb-2 text-md">
                        Our handyman can assemble, install, repair, or improve
                        just about anything around your home. At Troubleshoot
                        Ltd, no job is too small - from Software installation or
                        Photocopy repairs to complete IT solution installation.
                        A skilled, troubleshooter can handle all of the small
                        tasks around your office or Educational Institute.
                        Troubleshoot Ltd will do all of the work on your list
                        for a reasonable price.
                    </p>
                </Card>
                <Card
                    title="Super Experience"
                    icon={<PuzzlePieceIcon className="h-6 w-6" />}
                >
                    <p className="lead text-balance mb-2 text-md">
                        At Troubleshoot LTD., we offer a range of services that
                        are designed to meet the needs of businesses of all
                        sizes. Our services include IT support, software
                        development, web design and development, cloud services,
                        cybersecurity, and more. We work closely with our
                        clients to understand their specific needs and goals,
                        and we use this information to deliver customized
                        solutions that help them to achieve their objectives.
                    </p>
                </Card>
                <Card
                    title="Dedicated Support"
                    icon={
                        <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
                    }
                >
                    <p className="lead text-balance mb-2 text-md">
                        Troubleshoot LTD. is a leading on-demand Corporate IT
                        service provider that offers high-quality solutions to
                        businesses of all sizes. Our mission is to provide
                        employment opportunities to vocational students while
                        delivering exceptional services to our clients. Our
                        unique selling point is that we are a certified provider
                        of IT services, and our main customer benefit is that we
                        help our clients to save money and reduce the hassle
                        associated with IT services. We offer a range of
                        customized solutions that are tailored to the specific
                        needs of each client, and we are committed to delivering
                        exceptional customer service.
                    </p>
                </Card>
            </div>

            <div className="relative w-full py-10 xl:pt-20">
                <Heading
                    level={1}
                    className="text-center lg:text-4xl text-3xl w-full max-w-xl mx-auto"
                >
                    Join with us to sale your service & Growth your Experience
                </Heading>
                <div className="relative py-2">
                    <p className="lead text-balance text-center text-lg font-medium w-full max-w-xl mx-auto">
                        Order any Service, anytime from anywhere
                    </p>
                </div>
                <div className="relative w-full flex justify-center">
                    <Button
                        href="#"
                        className="bg-primary-500/90 hover:bg-primary-500 text-white xl:rounded-lg px-4 py-3 w-full max-w-sm rounded-md"
                        variant="filled"
                    >
                        Become a Seller
                    </Button>
                </div>

                <div className="gradient-01 h-80 w-80 absolute top-0 right-0 opacity-50 pointer-events-none -z-10"></div>
                <div className="gradient-01 h-40 w-40 absolute bottom-0 left-0  pointer-events-none -z-10"></div>
            </div>
        </Contents>
    );
}

interface CardProps {
    title?: string;
    icon?: any;
    children?: ReactNode;
}
const Card: React.FC<CardProps> = ({title, icon, children}) => {
    return (
        <Fragment>
            <div className="relative bg-primary-50/50 xl:p-6 p-4 rounded-xl shadow cursor-pointer hover:shadow-md duration-300">
                <div className="relative flex items-center gap-5">
                    <div className="bg-white rounded-full h-12 w-12 flex justify-center items-center shadow">
                        {icon}
                    </div>
                    <h2 className="font-semibold p-0 m-0">{title}</h2>
                </div>
                {children}
            </div>
        </Fragment>
    );
};
