import {ChangeEvent, FormEvent, useCallback, useState} from 'react';
import Styles from './Block.module.scss';
import {useNavigate} from "react-router-dom";

function NewThread() {
  const [title, setTitle] = useState<string>(""),
    [isSubmitDisable, setSubmitDisable] = useState<boolean>(false),
    navigate = useNavigate();
  const post = useCallback(async(e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitDisable(true);
    const data = {title: title};
    const req = await fetch(`https://railway-react-bulletin-board.herokuapp.com/threads`,{method:"POST",headers:{'Content-Type': 'application/json'},body:JSON.stringify(data)});
    const res = await req.json() as NewThread;
    navigate(`/thread/${res.threadId}`);
  },[title]),
      onTitleChange = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
      },[title]);
  return (
    <div className={Styles.Block}>
      <form onSubmit={post}>
        <input type="text" placeholder={"title"} value={title} onChange={onTitleChange}/>
        <input type="submit" disabled={isSubmitDisable}/>
      </form>
    </div>
  )
}

export default NewThread
