class Status {
	static HTTP_CONTINUE = 100;
	static HTTP_SWITCHING_PROTOCOLS = 101;
	static HTTP_PROCESSING = 102; // RFC2518
	static HTTP_EARLY_HINTS = 103; // RFC8297
	static HTTP_OK = 200;
	static HTTP_CREATED = 201;
	static HTTP_ACCEPTED = 202;
	static HTTP_NON_AUTHORITATIVE_INFORMATION = 203;
	static HTTP_NO_CONTENT = 204;
	static HTTP_RESET_CONTENT = 205;
	static HTTP_PARTIAL_CONTENT = 206;
	static HTTP_MULTI_STATUS = 207; // RFC4918
	static HTTP_ALREADY_REPORTED = 208; // RFC5842
	static HTTP_IM_USED = 226; // RFC3229
	static HTTP_MULTIPLE_CHOICES = 300;
	static HTTP_MOVED_PERMANENTLY = 301;
	static HTTP_FOUND = 302;
	static HTTP_SEE_OTHER = 303;
	static HTTP_NOT_MODIFIED = 304;
	static HTTP_USE_PROXY = 305;
	static HTTP_RESERVED = 306;
	static HTTP_TEMPORARY_REDIRECT = 307;
	static HTTP_PERMANENTLY_REDIRECT = 308; // RFC7238
	static HTTP_BAD_REQUEST = 400;
	static HTTP_UNAUTHORIZED = 401;
	static HTTP_PAYMENT_REQUIRED = 402;
	static HTTP_FORBIDDEN = 403;
	static HTTP_NOT_FOUND = 404;
	static HTTP_METHOD_NOT_ALLOWED = 405;
	static HTTP_NOT_ACCEPTABLE = 406;
	static HTTP_PROXY_AUTHENTICATION_REQUIRED = 407;
	static HTTP_REQUEST_TIMEOUT = 408;
	static HTTP_CONFLICT = 409;
	static HTTP_GONE = 410;
	static HTTP_LENGTH_REQUIRED = 411;
	static HTTP_PRECONDITION_FAILED = 412;
	static HTTP_REQUEST_ENTITY_TOO_LARGE = 413;
	static HTTP_REQUEST_URI_TOO_LONG = 414;
	static HTTP_UNSUPPORTED_MEDIA_TYPE = 415;
	static HTTP_REQUESTED_RANGE_NOT_SATISFIABLE = 416;
	static HTTP_EXPECTATION_FAILED = 417;
	static HTTP_I_AM_A_TEAPOT = 418; // RFC2324
	static HTTP_MISDIRECTED_REQUEST = 421; // RFC7540
	static HTTP_UNPROCESSABLE_ENTITY = 422; // RFC4918
	static HTTP_LOCKED = 423; // RFC4918
	static HTTP_FAILED_DEPENDENCY = 424; // RFC4918
	static HTTP_TOO_EARLY = 425; // RFC-ietf-httpbis-replay-04
	static HTTP_UPGRADE_REQUIRED = 426; // RFC2817
	static HTTP_PRECONDITION_REQUIRED = 428; // RFC6585
	static HTTP_TOO_MANY_REQUESTS = 429; // RFC6585
	static HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE = 431; // RFC6585
	static HTTP_UNAVAILABLE_FOR_LEGAL_REASONS = 451; // RFC7725
	static HTTP_INTERNAL_SERVER_ERROR = 500;
	static HTTP_NOT_IMPLEMENTED = 501;
	static HTTP_BAD_GATEWAY = 502;
	static HTTP_SERVICE_UNAVAILABLE = 503;
	static HTTP_GATEWAY_TIMEOUT = 504;
	static HTTP_VERSION_NOT_SUPPORTED = 505;
	static HTTP_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL = 506; // RFC2295
	static HTTP_INSUFFICIENT_STORAGE = 507; // RFC4918
	static HTTP_LOOP_DETECTED = 508; // RFC5842
	static HTTP_NOT_EXTENDED = 510; // RFC2774
	static HTTP_NETWORK_AUTHENTICATION_REQUIRED = 511; // RFC6585

	static HTTP_MESSAGE_CONTINUE = "Continue";
	static HTTP_MESSAGE_SWITCHING_PROTOCOLS = "Switching Protocols";
	static HTTP_MESSAGE_PROCESSING = "Processing"; // RFC2518
	static HTTP_MESSAGE_EARLY_HINTS = "Early Hints";
	static HTTP_MESSAGE_OK = "OK";
	static HTTP_MESSAGE_CREATED = "Created";
	static HTTP_MESSAGE_ACCEPTED = "Accepted";
	static HTTP_MESSAGE_NON_AUTHORITATIVE_INFORMATION =
		"Non-Authoritative Information";
	static HTTP_MESSAGE_NO_CONTENT = "No Content";
	static HTTP_MESSAGE_RESET_CONTENT = "Reset Content";
	static HTTP_MESSAGE_PARTIAL_CONTENT = "Partial Content";
	static HTTP_MESSAGE_MULTI_STATUS = "Multi-Status"; // RFC4918
	static HTTP_MESSAGE_ALREADY_REPORTED = "Already Reported"; // RFC5842
	static HTTP_MESSAGE_IM_USED = "IM Used"; // RFC3229
	static HTTP_MESSAGE_MULTIPLE_CHOICES = "Multiple Choices";
	static HTTP_MESSAGE_MOVED_PERMANENTLY = "Moved Permanently";
	static HTTP_MESSAGE_FOUND = "Found";
	static HTTP_MESSAGE_SEE_OTHER = "See Other";
	static HTTP_MESSAGE_NOT_MODIFIED = "Not Modified";
	static HTTP_MESSAGE_USE_PROXY = "Use Proxy";
	static HTTP_MESSAGE_RESERVED = 306;

	static HTTP_MESSAGE_TEMPORARY_REDIRECT = "Temporary Redirect";
	static HTTP_MESSAGE_PERMANENTLY_REDIRECT = "Permanent Redirect"; // RFC7238
	static HTTP_MESSAGE_BAD_REQUEST = "Bad Request";
	static HTTP_MESSAGE_UNAUTHORIZED = "Unauthorized";
	static HTTP_MESSAGE_PAYMENT_REQUIRED = "Payment Required";
	static HTTP_MESSAGE_FORBIDDEN = "Forbidden";
	static HTTP_MESSAGE_NOT_FOUND = "Not Found";
	static HTTP_MESSAGE_METHOD_NOT_ALLOWED = "Method Not Allowed";
	static HTTP_MESSAGE_NOT_ACCEPTABLE = "Not Acceptable";
	static HTTP_MESSAGE_PROXY_AUTHENTICATION_REQUIRED =
		"Proxy Authentication Required";
	static HTTP_MESSAGE_REQUEST_TIMEOUT = "Request Timeout";
	static HTTP_MESSAGE_CONFLICT = "Conflict";
	static HTTP_MESSAGE_GONE = "Gone";
	static HTTP_MESSAGE_LENGTH_REQUIRED = "Length Required";
	static HTTP_MESSAGE_PRECONDITION_FAILED = "Precondition Failed";
	static HTTP_MESSAGE_REQUEST_ENTITY_TOO_LARGE = "Content Too Large"; // RFC-ietf-httpbis-semantics
	static HTTP_MESSAGE_REQUEST_URI_TOO_LONG = "URI Too Long";
	static HTTP_MESSAGE_UNSUPPORTED_MEDIA_TYPE = "Unsupported Media Type";
	static HTTP_MESSAGE_REQUESTED_RANGE_NOT_SATISFIABLE =
		"Range Not Satisfiable";
	static HTTP_MESSAGE_EXPECTATION_FAILED = "Expectation Failed";
	static HTTP_MESSAGE_I_AM_A_TEAPOT = "I'm a teapot"; // RFC2324
	static HTTP_MESSAGE_MISDIRECTED_REQUEST = "Misdirected Request"; // RFC7540
	static HTTP_MESSAGE_UNPROCESSABLE_ENTITY = "Unprocessable Content"; // RFC-ietf-httpbis-semantics
	static HTTP_MESSAGE_LOCKED = "Locked"; // RFC4918
	static HTTP_MESSAGE_FAILED_DEPENDENCY = "Failed Dependency"; // RFC4918
	static HTTP_MESSAGE_TOO_EARLY = "Too Early"; // RFC-ietf-httpbis-replay-04
	static HTTP_MESSAGE_UPGRADE_REQUIRED = "Upgrade Required"; // RFC2817
	static HTTP_MESSAGE_PRECONDITION_REQUIRED = "Precondition Required"; // RFC6585
	static HTTP_MESSAGE_TOO_MANY_REQUESTS = "Too Many Requests"; // RFC6585
	static HTTP_MESSAGE_REQUEST_HEADER_FIELDS_TOO_LARGE =
		"Request Header Fields Too Large"; // RFC6585
	static HTTP_MESSAGE_UNAVAILABLE_FOR_LEGAL_REASONS =
		"Unavailable For Legal Reasons"; // RFC7725
	static HTTP_MESSAGE_INTERNAL_SERVER_ERROR = "Internal Server Error";
	static HTTP_MESSAGE_NOT_IMPLEMENTED = "Not Implemented";
	static HTTP_MESSAGE_BAD_GATEWAY = "Bad Gateway";
	static HTTP_MESSAGE_SERVICE_UNAVAILABLE = "Service Unavailable";
	static HTTP_MESSAGE_GATEWAY_TIMEOUT = "Gateway Timeout";
	static HTTP_MESSAGE_VERSION_NOT_SUPPORTED = "HTTP Version Not Supported";
	static HTTP_MESSAGE_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL =
		"Variant Also Negotiates"; // RFC2295
	static HTTP_MESSAGE_INSUFFICIENT_STORAGE = "Insufficient Storage"; // RFC4918
	static HTTP_MESSAGE_LOOP_DETECTED = "Loop Detected"; // RFC5842
	static HTTP_MESSAGE_NOT_EXTENDED = "Not Extended"; // RFC2774
	static HTTP_MESSAGE_NETWORK_AUTHENTICATION_REQUIRED =
		"Network Authentication Required"; // RFC6585
	static HTTP_MESSAGE_NETWORK_UNASSIGNED = "Unassigned"; // RFC6585
}

export { Status };
export default Status;

export async function MethodNotALlowed(headers: any = {}) {
	return new Response(
		JSON.stringify({
			success: false,
			status: Status.HTTP_METHOD_NOT_ALLOWED,
			message: "Method Not Allowed.",
		}),
		{
			status: Status.HTTP_METHOD_NOT_ALLOWED,
			headers,
			// headers: {
			// 	"Set-Cookie": `dev=ibrahim`,
			// },
		}
	);
}
