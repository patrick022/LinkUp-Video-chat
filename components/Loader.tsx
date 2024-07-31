import Image from "next/image";

const Loader = () => {
	return (
		<div className="flex-center h-screen w-full">
			<Image
				src="/icons/loading.svg"
				alt="loading"
				width={100}
				height={100}
			/>
		</div>
	);
};
export default Loader;
