import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
	return (
		<nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
			<Link href="/" className="flex items-center gap-1">
				<Image
					src="/icons/logo_new.svg"
					alt="LinkUp"
					width={130}
					height={130}
				/>
			</Link>

			<div className="flex-between gap-5">
				{/*Clerk - User Management*/}
				<SignedIn>
					<UserButton />
				</SignedIn>
				<MobileNav />
			</div>
		</nav>
	);
};
export default Navbar;
