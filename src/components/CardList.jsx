import Card from "./Card"
import { articles } from "../data/data.json";
import { useState } from "react";

function CardList() {
    const [page, setPage] = useState(0);

    return (
        <>
            <div className="cardlist">
                {articles.filter((article) => article.id >= 1 + (page * 6) && article.id <= 6 + (page * 6)).map((article) => (
                    <Card article={article} />
                ))}
            </div>
            <div className="buttons">
                {page == 0 ? <button disabled>Précédent</button> : <button onClick={() => setPage(page - 1)}>Précédent</button>}
                {page == 1 ? <button disabled>Suivant</button> : <button onClick={() => setPage(page + 1)}>Suivant</button>}

            </div>
        </>
    )
}

export default CardList
