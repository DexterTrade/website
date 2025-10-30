import type React from "react";
import ClientLayout from "./client-layout";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <ClientLayout>{children}</ClientLayout>;
}

import "./globals.css";

// app/layout.js
export const metadata = {
	title: "Dexter Trades",
	description:
		"Innovative technology solutions for e-commerce, software development, media marketing, and cloud services with unmatched quality and precision.",
	openGraph: {
		type: "website",
		url: "https://www.dextertrade.co.uk/",
		title: "Dexter Trades",
		description:
			"Innovative technology solutions for e-commerce, software development, media marketing, and cloud services with unmatched quality and precision.",
		images: [
			{
				url: "https://www.dextertrade.co.uk/favicon.ico", // replace with your real image
				width: 1200,
				height: 630,
				alt: "Dexter Trades",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Dexter Trades",
		description:
			"Innovative technology solutions for e-commerce, software development, media marketing, and cloud services with unmatched quality and precision.",
		images: ["https://www.dextertrade.co.uk/favicon.ico"], // replace with your image
	},
};
