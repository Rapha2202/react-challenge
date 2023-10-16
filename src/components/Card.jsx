

function Card({ article }) {


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
