interface DateTimeObject {
    date: string;
    time: string;
}

function convertTimestampToDesiredFormat(timestamp: string): DateTimeObject {
    const dateObj = new Date(timestamp);
    const dateOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };
    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    };
    const date = dateObj.toLocaleString("en-US", dateOptions);
    const time = dateObj.toLocaleString("en-US", timeOptions);
    return {date, time};
}
export default convertTimestampToDesiredFormat;
