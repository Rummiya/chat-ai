import { AuthGuard } from '@/features/auth/components/auth-guard';
import { UserProfile } from '@/features/profile/user-profile';

export default function Profile() {
	return (
		<AuthGuard>
			<UserProfile />
		</AuthGuard>
	);
}
