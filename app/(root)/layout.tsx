import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "LINKUP",
	description: "Video calling app by Patrick De Guzman",
	icons: {
		icon: "/icons/logo_favicon.svg",
	},
};

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<main>
			<StreamVideoProvider>{children}</StreamVideoProvider>
		</main>
	);
};
export default RootLayout;
