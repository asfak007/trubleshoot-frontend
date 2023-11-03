"use client";

import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import heroImage from "@/images/hero.png";
import { useEffect, useState } from "react";
interface BlurImageProps extends ImageProps {
	noblur?: "true" | "false";
}
export default function BlurImage(props: BlurImageProps) {
	const [loading, setLoading] = useState(true);
	const [src, setSrc] = useState(props.src);
	useEffect(() => setSrc(props.src), [props.src]); // update the `src` value when the `prop.src` value changes

	return (
		<Image
			{...props}
			src={src ?? heroImage}
			alt={props.alt}
			className={cn(
				props?.noblur == "true"
					? ""
					: loading
					? "blur-[2px]"
					: "blur-0",
				props?.className
			)}
			onLoadingComplete={async () => {
				setLoading(false);
			}}
			onError={() => {
				setSrc(heroImage); // if the image fails to load, use the default avatar
			}}
		/>
	);
}
