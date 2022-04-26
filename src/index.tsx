import React from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
// import { render } from 'react-dom';
// import { App } from './App';

import { App } from './App';

// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// render(<App />, document.getElementById('root'));
