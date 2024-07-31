"use client";

import MeetingTypeList from "@/components/MeetingTypeList";
import { useGetCalls } from "@/hooks/useGetCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

const Home = () => {
	const [date, setDate] = useState(new Date());
	const [timezone, setTimezone] = useState("");
	const [haveUpcomingCall, setHaveUpcomingCall] = useState(false);

	const time = date.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
	});

	useEffect(() => {
		// Detect the user's time zone
		const userTimeZone =
			Intl.DateTimeFormat().resolvedOptions().timeZone;
		setTimezone(userTimeZone);

		// Update the time every second
		const tick = () => setDate(new Date());
		const timerID = setInterval(tick, 1000);

		return () => clearInterval(timerID); // Cleanup interval on component unmount
	}, []);

	const dateNow = new Intl.DateTimeFormat("en-US", {
		dateStyle: "full",
		// @ts-ignore
		timezone,
	}).format(date);

	const { upcomingCalls } = useGetCalls();

	const upcomingCallLatestTime = (upcomingCalls as Call[])[0]?.state
		?.startsAt;

	const upcomingFormattedTime = new Intl.DateTimeFormat("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
		// @ts-ignore
		timezone,
	}).format(upcomingCallLatestTime);

	useEffect(() => {
		if (upcomingCalls.length !== 0) {
			setHaveUpcomingCall(true);
		} else {
			setHaveUpcomingCall(false);
		}
	}, [upcomingCalls]);

	return (
		<section className="flex size-full flex-col gap-10 text-white">
			<div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
				<div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
					<h2 className="glassmorphism max-w-[570px] rounded py-2 text-center text-base font-normal">
						{haveUpcomingCall
							? `Upcoming Meeting at: ${upcomingFormattedTime}`
							: "No upcoming calls"}
					</h2>
					<div className="flex flex-col gap-3">
						<h1 className="text-4xl font-extrabold lg:text-7xl">
							{time}
						</h1>
						<p className="text-lg font-medium text-sky-1 lg:text-2xl">
							{dateNow}
						</p>
					</div>
				</div>
			</div>

			<MeetingTypeList />
		</section>
	);
};
export default Home;
