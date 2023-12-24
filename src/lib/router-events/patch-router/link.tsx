'use client';

import NextLink, { LinkProps } from 'next/link';
import { forwardRef } from 'react';

import { onStart } from '../events';
import { shouldTriggerStartEvent } from './should-trigger-start-event';

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
	{ onClick, ...rest },
	ref,
) {
	return (
		<NextLink
			onClick={event => {
				linkClicked(event);
				if (onClick) onClick(event);
			}}
			{...rest}
			ref={ref}
		/>
	);
});

export function linkClicked(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
	const anchorElement = event.currentTarget as HTMLAnchorElement;
	const { href } = anchorElement;
	if (href || href.startsWith('/')) {
		if (shouldTriggerStartEvent(href, event)) onStart();
	}
}
