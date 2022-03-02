import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

const options=[
  {
    label:'This is Red',
    value:'red'
  },
  {
    label:'This is Green',
    value:'green'
  },
  {
    label:'This is Blue',
    value:'blue'
  }
];

const App=()=>{
  return <div>
  <Dropdown options={options}/>
  </div>;
}

export default App;
