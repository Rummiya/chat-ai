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
				<div className='flex gap-5 flex-1 md:pt-5 max-md:pb-[60px] max-md:flex-col max-md:gap-0'>
					<Sidebar />
					<main className='flex-1 px-9 max-md:px-5 py-5 bg-muted rounded-lg'>
						{children}
					</main>
					<MobileNavbar />
				</div>
			</div>
		</AuthGuard>
	);
}
