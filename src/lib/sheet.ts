const SHEET_ID = process.env.GOOGLE_SHEET_ID; // Replace with your actual spreadsheet ID
const API_KEY = process.env.GOOGLE_API_KEY; // Replace with your actual spreadsheet ID
interface GetSheetType {
	id?: number | string;
}

export const getContactsFromSheet = async ({
	id = 1,
}: GetSheetType): Promise<{ success: boolean; data: any }> => {
	const range = `Contact!A${id}:D${id}`;
	const GET_DATA = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}:append?key=${API_KEY}`;
	try {
		const response = await fetch(GET_DATA);
		const res = await response.json();
		return {
			success: true,
			data: res,
		};
	} catch (error) {
		console.log("Error getting data from sheet", error);
		return {
			success: false,
			data: error,
		};
	}
};

interface PutSheetType {
	id?: number | string;
	data?: PutData[];
}

export const putContactsFromSheet = async ({
	id = 2,
	data = [],
}: PutSheetType): Promise<{ success: boolean; data: any }> => {
	const range = `Contact!A${id}:D${id}`;
	const type = "RAW"; // or 'USER_ENTERED' for formatting
	const PUT_DATA = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?valueInputOption=${type}&key=${API_KEY}`;

	try {
		const response = await fetch(PUT_DATA, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				values: data,
			}),
		});
		const res = await response.json();
		return {
			success: true,
			data: res,
		};
	} catch (error) {
		console.log("Error getting data from sheet", error);
		return {
			success: false,
			data: error,
		};
	}
};
