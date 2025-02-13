"use client";

import {
	useCall,
	useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";

const EndCallButton = () => {
	const call = useCall();
	const router = useRouter();
	const { toast } = useToast();

	const { useLocalParticipant } = useCallStateHooks();
	const localParticipant = useLocalParticipant();

	const isMeetingOwner =
		localParticipant &&
		call?.state.createdBy &&
		localParticipant.userId === call.state.createdBy.id;

	if (!isMeetingOwner) return null;

	return (
		<Button
			onClick={async () => {
				toast({
					title: "Meeting Ended",
				});
				await call.endCall();
				router.push("/");
			}}
			className="bg-red-500"
		>
			End call for everyone
		</Button>
	);
};
export default EndCallButton;
