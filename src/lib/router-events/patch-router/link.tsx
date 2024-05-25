'use client';

import NextLink, { LinkProps } from 'next/link';
import React, { forwardRef, ReactNode, CSSProperties } from 'react';

import { onStart } from '../events';
import { shouldTriggerStartEvent } from './should-trigger-start-event';

type ExtendedLinkProps<RouteInferType = any> = LinkProps & {
	className?: string;
	children?: ReactNode | string;
	target?: React.HTMLAttributeAnchorTarget;
	rel?: string;
	style?: CSSProperties;
	'aria-label'?: string;
	id?: string;
	[key: string]: any; // Allows additional data-* attributes
};

export const Link = forwardRef<HTMLAnchorElement, ExtendedLinkProps>(function Link(
	{ onClick, className, children, target, rel, style, 'aria-label': ariaLabel, id, ...rest },
	ref,
) {
	return (
		<NextLink
			onClick={event => {
				linkClicked(event);
				if (onClick) onClick(event);
			}}
			className={className}
			target={target}
			rel={rel}
			style={style}
			aria-label={ariaLabel}
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
