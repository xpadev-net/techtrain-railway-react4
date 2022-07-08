import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import Styles from './Block.module.scss';
import {Link, useParams} from 'react-router-dom';


function Thread() {
    const params = useParams();
    const [data, setData] = useState<Posts | undefined>(undefined),
        [content, setContent] = useState<string>(""),
        [isSubmitDisable, setSubmitDisable] = useState<boolean>(false),
        [offset, setOffset] = useState<number>(0);
    const load = async (of = offset) => {
            if (of < 0) return;
            const req = await fetch(`https://railway-react-bulletin-board.herokuapp.com/threads/${params.id}/posts?offset=${of * 10}`);
            const res = await req.json();
            setData(res);
            setSubmitDisable(false);
            setOffset(res.length === 10 ? of + 1 : -1);
        },
        post = async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setSubmitDisable(true);
            const data = {post: content};
            const req = await fetch(`https://railway-react-bulletin-board.herokuapp.com/threads/${params.id}/posts`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            await req.text();
            setContent("");
            setData(undefined);
            void load(0);
        },
        onContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            setContent(e.target.value)
        };
    useEffect(() => {
        void load();
    }, []);
    if (!data) return <></>;

    return (
        <>
            <h2><Link to={"/"}>戻る</Link></h2>
            <h2>{data.threadId}</h2>
            <div className={Styles.Block}>
                {data.posts.map((post) => {
                    return <div key={`post${post.id}`}>
                        <h3>{post.id}</h3>
                        {post.post.split("\n").map((string, key) => {
                            return <p key={`postContent-${post.id}-${key}`}>{string}</p>;
                        })}
                    </div>
                })}
            </div>
            {(data?.posts.length % 10 === 0) ? <button onClick={() => load()}>読み込む</button> : ""}
            <div className={Styles.Block}>
                <form onSubmit={post}>
                    <textarea placeholder={"content"} onChange={onContentChange} value={content}></textarea>
                    <p><input type="submit" disabled={isSubmitDisable} placeholder={"投稿"}/></p>
                </form>
            </div>
        </>
    )
}

export default Thread
