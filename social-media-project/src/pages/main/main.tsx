import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { Post } from "./post";

export interface Post {
    id: string;
    userId: string;
    title: string;
    username: string;
    description: string;
}

export const Main = () => {

    // making connection with the specified db
    const postsRef = collection(db, "posts");
    const [postsList, setPostsList] = useState<Post[] | null>(null);

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostsList(   
            data.docs.map((doc) => ( {...doc.data(), id: doc.id} )) as Post[]
        );
    };

    // re-render everytime there is some change
    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                {postsList?.map(
                    (post) => <Post post={post}/>
                )}
            </div>
            
        </div>
    );
}