# nextjs13-progress

![npm](https://img.shields.io/npm/v/nextjs13-progress)
[![All Contributors](https://img.shields.io/github/all-contributors/designly1/nextjs13-progress?color=ee8449&style=flat-square)](#contributors)

## Description

An implementation of n-progress for use with the Next.js 13 app router. This project is based on the [Nextjs Progressbar](https://www.npmjs.com/package/nextjs-progressbar)

project and the props are 100% compatible.  

## Installation

```bash

npm i nextjs13-progress

```

## Usage

In your `layout.tsx`:

```jsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Next13NProgress, Link } from 'nextjs13-progress';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="min-h-screen flex flex-col">
					<header className="flex items-center gap-6 justify-center text-2xl text-white bg-slate-800 py-4">
						<Link href="/">Home</Link>
						<Link href="/page2">Page2</Link>
					</header>
					{children}
				</main>
				<Next13NProgress color="red" height={5} />
			</body>
		</html>
	);
}
```


NOTE: You must use the `Link` component from this package in order to initiate the start of n-progress. This component is a wrapper for `Next/Link`.

## Default Config

If no props are passed to `<Next13NProgress />`, below is the default configuration applied.

```jsx
<Next13NProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
```

- `color`: to change the default color of progressbar. You can also use `rgb(,,)` or `rgba(,,,)`.
- `startPosition`: to set the default starting position : `0.3 = 30%`.
- `stopDelayMs`: time for delay to stop progressbar in `ms`.
- `height`: height of progressbar in `px`.
- `showOnShallow`: You can choose whether you want the progressbar to be displayed if you're using shallow routing. It takes a boolean. Learn more about shallow routing [in Next.js docs](https://nextjs.org/docs/routing/shallow-routing).

## Advanced usage

### Link

The provided `Link` component adds an `onClick` event to the links it generates. This handler will:
1. Verify the `href` attribute of the link, and the characteristics of the click event. Depending on both conditions, it will start the progress bar.
2. Fire any additional `onClick` event that you provided

In some cases, you might need a greater level of control over the `onClick` event. For that reason, the handler can be imported so as to create your own `Link` component as needed.

#### Example 1:

Don't attach the progressbar `onClick` event if we've already supplied an `onClick` event of our own.

```jsx
'use client';

import NextLink, { LinkProps } from 'next/link';
import { forwardRef } from 'react';
import { linkClicked as progressBarLinkClicked } from 'nextjs13-progress';

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((
	{ onClick, ...rest },
	ref,
) => (
	<NextLink
		onClick={event => {
			if (onClick) {
				// fire only the existing event only
				onClick(event);
			} else {
				// fire the progressbar event
				progressBarLinkClicked(event);
			}
		}}
		{...rest}
		ref={ref}
	/>
));
```

#### Example 2:

Clicking a link triggers a browser prompt. Since the link only clicks through if the user confirms, we need to also assure that the progress bar also only starts if that condition is met.

```jsx
'use client';

import NextLink, { LinkProps } from 'next/link';
import { forwardRef } from 'react';
import { linkClicked as progressBarLinkClicked } from 'nextjs13-progress';

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((
	{ ...rest },
	ref,
) => (
	<NextLink
		onClick={event => {
			const confirm = window.confirm("Are you sure?");
			if (confirm) {
				// proceed as normal
				progressBarLinkClicked(event);
			} else {
				// cancel the click
				event.preventDefault();
			}
		}}
		{...rest}
		ref={ref}
	/>
));
```

## Demo

[Click Here](https://nextjs13-progress-demo.vercel.app/) for a full working Next.js demo site.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Contributing

Contributions are always welcome! To contribute, simply fork, make your change and issue a PR.

## Thanks

Special thanks to [# Vũ Văn Dũng](https://github.com/joulev) for his [nextjs13-appdir-router-events](https://github.com/joulev/nextjs13-appdir-router-events) demo Next.js project. I borrowed much of the code from that project to make this package.

## License

[MIT](LICENSE)
