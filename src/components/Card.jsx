import { useState } from "react"

function Card({ article, panier, setPanier, prix, setPrix }) {
    const [isLiked, setIsLiked] = useState(false)

    const addToCart = () => {
        setPanier(panier + 1)
        setPrix(prix + article.price)
    }

    return (
        <div>
            <div className="card">
                <img src={article.image} alt="article" />
                <div className="favitem">
                    <h3>{article.title}</h3>
                    <div className={isLiked ? "fav" : "notfav"} onClick={() => setIsLiked(!isLiked)}></div>
                </div>
                <p>{article.description}</p>
                <div className="cart">
                    <p>{article.price} €</p>
                    <button onClick={addToCart}>Ajouter au panier</button>
                </div>
            </div>
        </div>
    )
}

export default Card
