import ReactDOM from "react-dom";

 function Tags(props) {
   return <p>Test, {props.array} </p>
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Tags array={["boomdotdev", "task", "tags", "react"]} />;
root.render(element);

export default Tags