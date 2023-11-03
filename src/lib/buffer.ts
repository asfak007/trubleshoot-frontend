export const encode = (str: any) => Buffer.from(str).toString("base64");
export const decode = (str: any) =>
    Buffer.from(`${str}`, "base64").toString("ascii");

export const getUserFromSession = (token?: any) => {
    if (token) {
        try {
            const session = JSON.parse(decode(`${token.split(".")[1]}`));
            if (session?.email) {
                // return JSON.stringify(session);
                return session;
            }
        } catch (error) {
            // unauthorized
        }
    }
    return null;
};
