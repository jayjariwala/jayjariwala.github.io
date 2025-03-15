import * as React from 'react';

const AboutPage = () => {
	return (
		<main>
			<h1>About me</h1>
			<p>Hello there! this is a about me page</p>
		</main>
	);
};

export const Head = () => {
	return (
		<>
			<title>About Me</title>
			<meta name="description" content="Your description" />
		</>
	);
};

export default AboutPage;
