import { Header } from '@/components/layout/header';
import { MobileNavbar } from '@/components/layout/mobile-navbar';
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

				<div className='flex flex-1 overflow-hidden'>
					<div className='hidden md:block w-52 shrink-0'>
						<Sidebar />
					</div>

					<main className='flex-1 flex flex-col bg-muted rounded-lg px-5 py-4 overflow-hidden'>
						{children}
					</main>
				</div>

				<div className='md:hidden'>
					<MobileNavbar />
				</div>
			</div>
		</AuthGuard>
	);
}
