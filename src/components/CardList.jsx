import Card from "./Card"
import { articles } from "../data/data.json";
import { useState } from "react";

function CardList() {
    const [page, setPage] = useState(0);
    const [type, setType] = useState("undefined");

    const changeType = (event) => {
        setType(event.target.value);
    };

    return (
        <>
            <div className="filter">
                <h2>Choisissez une Catégorie:</h2>
                <select name="type" id="type-select" onChange={changeType}>
                    <option value="undefined">Aucune</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="dystopian">Dystopian</option>
                    <option value="romance">Romance</option>
                    <option value="mystery">Mystery</option>
                </select>
            </div>

            <div className="cardlist">
                {type == "undefined" ? articles.slice(0 + (page * 6), 6 + (page * 6)).map((article) => (
                    <Card article={article} />
                )) : articles.filter((article) => article.category == type.toLowerCase()).slice(0 + (page * 6), 6 + (page * 6)).map((article) => (
                    <Card article={article} />
                ))}
            </div>

            <div className="buttons">
                {page == 0 ? <button disabled>Précédent</button> : <button onClick={() => setPage(page - 1)}>Précédent</button>}
                {type == "undefined" ? (page == 1 ? <button disabled>Suivant</button> : <button onClick={() => setPage(page + 1)}>Suivant</button>) : <button disabled>Suivant</button>}

            </div>
        </>
    )
}

export default CardList
