"use client";

import React, { Fragment, useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";
import { useHydration } from "@/hooks/hydration";
import Loading from "@/app/loading";

export const ModalProvider = () => {
	return (
		<Fragment>
			{useHydration(
				<StoreModal />
				// <Loading />
			)}
		</Fragment>
	);
};
