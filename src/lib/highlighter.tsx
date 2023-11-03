"use client";
// import "highlight.js/styles/github.css";
import hljs from "highlight.js";

export function highlight(code: any, lang?: any): string {
	const output = hljs.highlightAuto(code).value;

	return output.replaceAll("hljs-", "code-");
}
