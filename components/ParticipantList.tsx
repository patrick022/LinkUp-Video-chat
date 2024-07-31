import {
	CallSessionResponse,
	useCallStateHooks,
} from "@stream-io/video-react-sdk";

const ParticipantList = () => {
	const { useCallSession } = useCallStateHooks();
	const session: CallSessionResponse | undefined = useCallSession();

	console.log("SESSION", session);

	if (session?.participants.length === 0) return null;

	return (
		<div>
			<div>{`Participants already in call : ${
				session?.participants ? session.participants.length : 0
			}`}</div>
		</div>
	);
};
export default ParticipantList;
