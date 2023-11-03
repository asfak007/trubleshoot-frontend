import axios from "axios";
import Cookies from "js-cookie";

// Get the token from cookies
const token = Cookies.get("authToken"); // Replace 'yourCookieName' with the actual name of your cookie

if (token) {
    axios.defaults.headers["Authorization"] = `Bearer ${token}`;
}

export default axios.create({
    baseURL: "https://troubleshootprovider.asthaall.com/api/v1/",
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
