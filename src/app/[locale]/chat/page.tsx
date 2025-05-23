import { AuthGuard } from '@/features/auth/components/auth-guard';

export default function Chat() {
	return (
		<AuthGuard>
			<div>Chat</div>
		</AuthGuard>
	);
}
