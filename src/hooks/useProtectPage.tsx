import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
const useProtectedPage = () => {
  const authToken = Cookies.get("authToken");
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (authToken === undefined || authToken === "undefined") {
      router.push("/login");
    } else if (authToken !== undefined && pathname === "/login") {
      router.push("/");
    }
  }, [router, authToken]);
};

export default useProtectedPage;
