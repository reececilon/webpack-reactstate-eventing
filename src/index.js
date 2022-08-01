import React from 'react';
// import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';


// ReactDOM.render{<App name="Ash" otherName="Misty"/>, document.getElementById('trainers')}


// const name = 'Ash';

const root = createRoot(document.getElementById('root'));
root.render(<App />)

// const a = require("./imported")

// console.log(a);