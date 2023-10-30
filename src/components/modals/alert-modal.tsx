"use client";

import React, { Fragment, useEffect, useState } from "react";
import { toast } from "sonner";

import { Modal } from "@/components/ui/modal";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useHydration } from "@/hooks/hydration";

export const AlertModal: React.FC<AlertModalProps> = ({
	isOpen,
	onClose,
	onConfirm,
	loading,
}) => {
	return (
		<Fragment>
			<AlertDialog onOpenChange={() => {}} open={isOpen}>
				{/* <AlertDialogTrigger asChild>
					<Button variant="outline">Show Dialog</Button>
				</AlertDialogTrigger> */}
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>
							Are you absolutely sure?
						</AlertDialogTitle>
						<AlertDialogDescription>
							This action cannot be undone. This will permanently
							delete your account and remove your data from our
							servers.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel onClick={onClose} disabled={loading}>
							Cancel
						</AlertDialogCancel>
						<AlertDialogAction
							className="bg-red-400 hover:bg-red-500"
							onClick={onConfirm}
							disabled={loading}
						>
							Continue
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</Fragment>
	);
};

export default AlertModal;

// export const AlertModal: React.FC<AlertModalProps> = ({
// 	isOpen,
// 	onClose,
// 	onConfirm,
// 	loading,
// }) => {
// 	return (
// 		<Modal
// 			title="Are you sure?"
// 			description="This action cannot be undone."
// 			isOpen={isOpen}
// 			onClose={onClose}
// 		>
// 			<div className="pt-6 space-x-2 flex items-center justify-end w-full">
// 				<Button disabled={loading} variant="outline" onClick={onClose}>
// 					Cancel
// 				</Button>
// 				<Button
// 					disabled={loading}
// 					variant="destructive"
// 					onClick={onConfirm}
// 				>
// 					Continue
// 				</Button>
// 			</div>
// 		</Modal>
// 	);
// };
