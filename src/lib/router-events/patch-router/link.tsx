'use client';

import NextLink, { LinkProps } from 'next/link';
import { forwardRef, ReactNode } from 'react';

import { onStart } from '../events';
import { shouldTriggerStartEvent } from './should-trigger-start-event';

type ExtendedLinkProps<RouteInferType = any> = LinkProps & {
	className?: string;
	children?: ReactNode | string;
};

export const Link = forwardRef<HTMLAnchorElement, ExtendedLinkProps>(function Link(
	{ onClick, className, children, ...rest },
	ref,
) {
	return (
		<NextLink
			onClick={event => {
				linkClicked(event);
				if (onClick) onClick(event);
			}}
			className={className}
			{...rest}
			ref={ref}
		>
			{children}
		</NextLink>
	);
});
export function linkClicked(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
	const anchorElement = event.currentTarget as HTMLAnchorElement;
	const { href } = anchorElement;
	if (href || href.startsWith('/')) {
		if (shouldTriggerStartEvent(href, event)) onStart();
	}
}
