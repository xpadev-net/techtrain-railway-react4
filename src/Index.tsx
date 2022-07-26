import React, {useState} from 'react'

function Index() {
    const [count,setCount] = useState<number>(0);
    return (
        <div>
            <h1>hello world</h1>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    )
}

export default Index
