import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items=[
  {
     title:"What is react",
      content:"React is a frontend javaScript framework"
  },
  {
      title:"Why is react",
      content:"React is a favorite JS library among engineers"
  },
  {
     title:"How do you use react",
      content:"You use React by creating components"
  }

];

const App=()=>{
  return <div>
  <Search/>
  </div>;
}

export default App;
