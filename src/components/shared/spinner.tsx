import { cn } from '@/lib/utils/cn';

export const Spinner = ({ className }: { className?: string }) => {
	return (
		<div
			className={cn(
				'max-w-10 max-h-10 size-full border-4 border-sky-700 border-t-transparent rounded-full animate-spin',
				className
			)}
		></div>
	);
};
