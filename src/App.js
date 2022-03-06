import React,{useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

  const [selected,setSelected]=useState(options[0]);
  return (
  <div>
    <Header />
    <Route path="/">
       <Accordion items={items}/>
    </Route>
    <Route path="/dropdown">
       <Dropdown label="Select a color" options={options} selected={selected} onSelectedChange={setSelected}/>
    </Route>
    <Route path="/list">
       <Search/>
    </Route>
    <Route path="/translate">
       <Translate/>
    </Route>
  </div>
  );
}

export default App;
