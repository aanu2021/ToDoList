import React ,{useState} from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import LIST from './LIST.jsx';

const TODOLIST = () => {

  const [item,setItem] = useState("");
  const [itemList,setItemList] = useState([]);

  const setInput = (event)=> {
     setItem(event.target.value);
  }

  const onClicks = ()=> {
      if(item !== ""){
        setItemList((oldItem)=>{
            return [...oldItem,item];
         })
         setItem("");
      }
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To DO LIST</h1>
          <br />
          <input type="text" placeholder="Add Items" onChange={setInput} value={item}/>
          <Button className="newBtn" onClick={onClicks}><AddIcon/></Button>
        <br/>
        <ol>
            {itemList.map((value,index)=>{
                return <LIST key={index} id={index} val={value} />
            })}
        </ol>
        <br/>
        </div>
      </div>
    </>
  );
};


export default TODOLIST;
