"use client";

import React, { Fragment } from "react";

import { useHydration } from "@/hooks/hydration";
import { useAlertModal } from "@/hooks/use-alert-modal";
import { AlertModal } from "@/components/modals/alert-modal";
import { toast } from "sonner";

interface useAlertModalStore {
	onConfirm: () => void;
}

const Confirm: React.FC<useAlertModalStore> = ({ onConfirm }) => {
	const { isOpen, isLoading, onClose } = useAlertModal();

	const action = () => {
		try {
			onConfirm();
			onClose();
		} catch (error) {
			toast.error("Something went wrong!");
			onClose();
		}
	};

	return (
		<Fragment>
			{useHydration(
				<AlertModal
					isOpen={isOpen}
					loading={isLoading}
					onClose={onClose}
					onConfirm={action}
				/>
				// <Loading />
			)}
		</Fragment>
	);
};

export default Confirm;
