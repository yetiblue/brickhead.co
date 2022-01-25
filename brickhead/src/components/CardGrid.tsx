import "./CardGrid.css"
import CardComponent from "./CardComponent"

interface Card{
    category: string;
    title: string;
    company: string;
    director: string;
}
let testGridData = [{
    category: "Music Video",
    title: "why Hello darkness",
    company: "MTV",
     director: "Adrian Sobrado"
},{
    category: "Music Video",
    title: "why Hello darkness",
    company: "MTV",
    director: "Adrian Sobrado"
},{
    category: "Music Video",
    title: "why Hello darkness",
    company: "MTV",
     director: "Adrian Sobrado"
},{
    category: "Music Video",
    title: "why Hello darkness",
    company: "MTV",
     director: "Adrian Sobrado"
}
]
 let cardContent = testGridData.map((card) => (
    <ul className="card-wrapper">
        <li key={card.title} className="card-object">
            <CardComponent
            cardCategory={card.category}
            cardTitle={card.title}
            cardCompany={card.company}
            cardDirector={card.director}

            />
        </li>
        
    </ul>
  ));


function CardGrid(){
    return(
        <div className="cardgrid-wrapper">{cardContent}</div>
    )
}
export default CardGrid