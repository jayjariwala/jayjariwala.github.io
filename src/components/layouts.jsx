import * as React from 'react';
import './styles/global.css';
import { layout } from './styles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';

export const Layout = ({ pageTitle, children }) => {
	return (
		<div className={layout}>
			<nav>
				<Header />
			</nav>
			<main>{children}</main>
			<Footer />
		</div>
	);
};
