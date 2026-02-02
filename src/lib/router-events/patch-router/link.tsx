'use client';

import NextLink, { LinkProps } from 'next/link';
import React, { forwardRef, ReactNode } from 'react';

import { onStart } from '../events';
import { shouldTriggerStartEvent } from './should-trigger-start-event';

type ExtendedLinkProps<RouteInferType = any> = LinkProps & {
	className?: string;
	children?: ReactNode | string;
	target?: React.HTMLAttributeAnchorTarget;
	style?: React.CSSProperties;
	id?: string;
	[key: string]: any;
	rel?: string;
	onAbort: React.ReactEventHandler<HTMLAnchorElement>;
};

export const Link = forwardRef<HTMLAnchorElement, ExtendedLinkProps>(function Link(
	{ onClick, className, children, id, href, ...rest },
	ref,
) {
	return (
		<NextLink
			href={href}
			onClick={event => {
				linkClicked(event);
				if (onClick) onClick(event);
			}}
			className={className}
			id={id}
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
