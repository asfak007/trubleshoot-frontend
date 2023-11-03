import type { SendMailOptions, Transporter } from "nodemailer";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";

type BuildSendMailOptions<T> = {
	transport: Transporter<T>;
	defaultFrom: string;
	processHtml?: (html: string) => string;
};

type ComponentMail = SendMailOptions & {
	component?: JSX.Element;
};

export function buildSendMail<T>(options: BuildSendMailOptions<T>) {
	if (!options?.transport) {
		console.log(`❌ NodeMailer Error : missing transport `);
		throw new Error("buildSendMail options are missing transport");
	}
	if (!options?.defaultFrom) {
		console.log(`❌ NodeMailer Error : missing defaultFrom`);
		throw new Error("buildSendMail options are missing defaultFrom");
	}

	return async function sendMail(mail: ComponentMail) {
		if (!mail.html && typeof mail.component === "undefined") {
			console.log(`❌ NodeMailer Error : missing component`);
			return new Error("sendMail requires either html or a component");
		}

		const { component, ...mailOptions } = mail;
		mailOptions as SendMailOptions;
		mailOptions.from ||= options.defaultFrom;
		try {
			// Get html from the rendered component if not provided
			if (component && !mailOptions.html) {
				const html = render(component, {
					pretty: true,
				});
				mailOptions.html = html;
			}

			// Get subject from the component if not provided
			if (component && !mailOptions.subject) {
				if (typeof component.type.subject === "string") {
					mailOptions.subject = component.type.subject;
				} else if (typeof component.type.subject === "function") {
					mailOptions.subject = component.type.subject(
						component.props
					);
				}
			}

			// Send mail via nodemailer unless you are in integration tests.
			// sendMail is not mocked in integration tests, so don't call it at all, it will just fail
			// because of the invalid transport setting.
			const response: any = await options.transport.sendMail(mailOptions);
			// console.log(`✅ Mail Status: ${JSON.stringify(response, null, 2)}`);
			console.log(`✅ Mail Sent: ${response?.messageId}`);
			return response;
		} catch (err: any) {
			console.log(`❌ NodeMailer Error : ${err.message} `);
			return new Error(`❌ NodeMailer Error : ${err.message} `);
		}
	};
}

const sendMail = buildSendMail({
	transport: nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		port: parseInt(process.env.MAIL_PORT ?? "587"),
		// secure: process.env.MAIL_ENCRYPTION == "tls", // use TLS
		auth: {
			user: process.env.MAIL_USERNAME,
			pass: process.env.MAIL_PASSWORD,
		},
	}),
	defaultFrom: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`,
});

export const sendMarketingMail = buildSendMail({
	transport: nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		port: parseInt(process.env.MAIL_PORT ?? "587"),
		// secure: process.env.MAIL_ENCRYPTION == "tls", // use TLS
		auth: {
			user: process.env.MAIL_USERNAME,
			pass: process.env.MAIL_PASSWORD,
		},
	}),
	defaultFrom: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`,
});

export default sendMail;
