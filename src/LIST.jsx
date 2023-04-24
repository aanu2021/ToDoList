import React ,{useState} from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const LIST = (props) => {
  
  const [line,setLine] = useState(false);

  const cutIt = ()=> {
      if(line === false){
         setLine(true);
      }
  }  

  return (
    <>
      <div className="todo_style">
        <span onClick={cutIt}>
          <DeleteIcon className="deleteIcon" />
        </span>
        <li style={{textDecoration : line ? "line-through" : "none"}}>{props.val}</li>
      </div>
    </>
  );
};

export default LIST;
