import {useState} from 'react';
import Styles from './Block.module.scss';
import {useNavigate} from "react-router-dom";

function NewThread() {
  const [title, setTitle] = useState<string>(""),
    [isSubmitDisable, setSubmitDisable] = useState<boolean>(false),
    navigate = useNavigate();
  const post = async() => {
    setSubmitDisable(true);
    const data = {title: title};
    //post data to server
    const res = {id: 0};
    navigate(`/thread/${res.id}`);
  };
  return (
    <div className={Styles.Block}>
      <form onSubmit={(e)=>{post();e.preventDefault();}}>
        <input type="text" placeholder={"title"} value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="submit" disabled={isSubmitDisable}/>
      </form>
    </div>
  )
}

export default NewThread
