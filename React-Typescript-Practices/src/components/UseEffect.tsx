import { useEffect, useState } from "react";

const UseEffect = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(json => console.log(json))
        };
        fetchData();
    }, [])
    return (
        <div>
            <div>

            </div>
        </div>
    );
}

export default UseEffect;
