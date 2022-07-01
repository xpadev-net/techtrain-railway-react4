import {useEffect, useState} from 'react'
import Styles from './Block.module.scss';
import {Link} from "react-router-dom";


function Index() {
  const [data, setData] = useState<Thread[]>([]);
  const load = async()=>{
    //const req = await fetch("hoge");
    //const res = await req.json();
    const res = [{id:0,title:"hoge",posts:[{id:0,content:"hogehoge\ntest",name:"aaaa",date:1656671474}]}] as Thread[];
    setData(res);
  }
  useEffect(()=>{
    load();
  },[]);

  return (
    <div>
      <div className={Styles.Block}>
        {data.map((thread)=>{
          return <Link key={`threadList${thread.id}`} to={`/thread/${thread.id}`}>{thread.id}: {thread.title}</Link>
        })}
      </div>
      {data.map((thread)=>{
        return<div key={`thread${thread.id}`} className={Styles.Block}>
          <h2>{thread.id}: {thread.title}</h2>
          {thread.posts.slice(-10).map((post)=>{
            return <div key={`post${thread.id}-${post.id}`}>
              <h3>{post.id} 名前: {post.name} : {new Date(post.date*1000).toLocaleString()}</h3>
              {post.content.split("\n").map((string,key)=>{
                return <p key={`postContent-${thread.id}-${post.id}-${key}`}>{string}</p>;
              })}
            </div>
          })}
        </div>
      })}
    </div>
  )
}

export default Index
