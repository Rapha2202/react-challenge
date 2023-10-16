import { useState } from "react"

//                <div className={isLiked ? "fav" : "notfav"} onClick={() => setIsLiked(!isLiked)}></div>
function Card({ article }) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div>
            <div className="card">
                <img src={article.image} alt="article" />
                <h3>{article.title}</h3>
                <p>{article.description}</p>
            </div>
        </div>
    )
}

export default Card
