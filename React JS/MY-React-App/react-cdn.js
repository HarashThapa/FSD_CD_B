const parent=document.getElementById("root");
const ele=React.createElement("h1",{},"Shopping Cart");
const root=ReactDOM.createRoot(parent);
// root.render(ele);
const ele1=React.createElement("h1",{},"my Items");
const item1=React.createElement("li",{},"Item-1");
const item2=React.createElement("li",{},"Item-2");
const list=React.createElement("ul",{},item1,item2);
const h2=<h2>This is new Heading</h2>
root.render([ele,ele1,list]);
