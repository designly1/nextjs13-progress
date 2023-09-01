import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import { onComplete } from './events';

function Innards() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	useEffect(() => onComplete(), [pathname, searchParams]);
	return null;
}

export function NextJs13Progress() {
	return (
		<Suspense fallback={null}>
			<Innards />
		</Suspense>
	);
}
