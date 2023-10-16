import Card from "./Card"
import { articles } from "../data/data.json";

function CardList() {


    return (
        <div className="cardlist">
            {articles.map((article) => (
                <Card article={article} />
            ))}
        </div>
    )
}

export default CardList
