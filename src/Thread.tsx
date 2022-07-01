import {useEffect, useState} from 'react';
import Styles from './Block.module.scss';
import {useParams} from 'react-router-dom';


function Thread() {
  const params = useParams();
  const [data, setData] = useState<Thread|undefined>(undefined),
    [name, setName] = useState<string>("仕様書無しさん"),
    [content, setContent] = useState<string>(""),
    [isSubmitDisable, setSubmitDisable] = useState<boolean>(false);
  const load = async()=>{
    //const req = await fetch("hoge");
    //const res = await req.json();
    const res = {id:0,title:"hoge",posts:[{id:0,content:"hogehoge\ntest",name:"aaaa",date:1656671474}]} as Thread;
    setData(res);
    setSubmitDisable(false);
  }
  const post = async() => {
    setSubmitDisable(true);
    const data = {name:name,content:content};
    //send post
    load();
  }
  useEffect(()=>{
    load();
  },[]);
  if (data===undefined)return <></>;

  return (
    <>
      <div className={Styles.Block}>
        {data.posts.map((post)=>{
          return <div key={`post${post.id}`}>
            <h3>{post.id} 名前: {post.name} : {new Date(post.date*1000).toLocaleString()}</h3>
            {post.content.split("\n").map((string,key)=>{
              return <p key={`postContent-${post.id}-${key}`}>{string}</p>;
            })}
          </div>
        })}
      </div>
      <div className={Styles.Block}>
        <form onSubmit={(e)=>{post();e.preventDefault();}}>
          <p><input type="text" placeholder={"name"} value={name} onChange={(e)=>setName(e.target.value)}/></p>
          <textarea onChange={(e)=>setContent(e.target.value)}>{content}</textarea>
          <p><input type="submit" disabled={isSubmitDisable} placeholder={"内容"}/></p>
        </form>
      </div>
    </>
  )
}

export default Thread
