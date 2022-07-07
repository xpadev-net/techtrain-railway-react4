import {useEffect, useState} from 'react'
import Styles from './Block.module.scss';
import {Link} from "react-router-dom";


function Index() {
  const [data, setData] = useState<Thread[]>([]),
    [offset,setOffset] = useState<number>(0),
    [isLoading,setIsLoading] = useState(true);
  const load = async()=>{
    setIsLoading(true);
    const req = await fetch(`https://virtserver.swaggerhub.com/INFO_3/BulletinBoardApplication/1.0.0/threads?offset=${offset*10}`);
    const res = await req.json() as Thread[];
    setData([...data,...res]);
    setOffset(res.length===10?offset+1:-1);
    setIsLoading(false);
  }
  useEffect(()=>{
    void load();
  },[]);

  return (
    <div>
      <div className={Styles.Block}>
        {data.map((thread)=>{
          return <p><Link key={`threadList${thread.id}`} to={`/thread/${thread.id}`}>{thread.id}: {thread.title}</Link></p>
        })}
        {(!isLoading&&offset>0)?<button onClick={()=>load()}>読み込む</button>:""}
      </div>
    </div>
  )
}

export default Index
