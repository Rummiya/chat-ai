import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';
import { AuthGuard } from '@/features/auth';

export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AuthGuard>
			<div className='h-screen flex flex-col'>
				<Header />
				<div className='flex flex-1 pt-4'>
					<Sidebar />
					<main className='flex-1 px-4'>{children}</main>
				</div>
			</div>
		</AuthGuard>
	);
}
