"use client";

import React, { Fragment, useEffect, useState } from "react";

import { ThemeProvider } from "@/providers/theme-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { ModalProvider } from "@/providers/modal-provider";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Animator } from "@/components/Contents";
import { Layout } from "@/components/Layout";
import useAuth from "@/hooks/use-auth";
import Cookie from "@/components/Cookie";

const BaseLayout: React.FC<PageProps> = ({
	children = null,
	modal,
	auth = null,
}) => {
	const onOpen = useStoreModal((state) => state.onOpen);
	const isOpen = useStoreModal((state) => state.isOpen);
	const { user } = useAuth();

	useEffect(() => {
		if (auth && !auth.phone_verify) {
			if (!isOpen) {
				onOpen();
			}
		}
	}, [isOpen, onOpen]);

	return (
		<Fragment>
			<Animator>{modal}</Animator>

			<ToastProvider />
			<ModalProvider />
			<Layout auth={auth}>{children}</Layout>
			<Cookie />
		</Fragment>
	);
};

export default BaseLayout;
