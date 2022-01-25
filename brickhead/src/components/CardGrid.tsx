import "./CardGrid.css"
import CardComponent from "./CardComponent"

interface Card{
    category: string;
    title: string;
    company: string;
    director: string;
}
let testGridData = [
    {
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
        <li key={card.title} className="card-object">
            <CardComponent
            cardCategory={card.category}
            cardTitle={card.title}
            cardCompany={card.company}
            cardDirector={card.director}

            />
         
        </li>
        
  ));
  let gridContent = <ul className="card-wrapper">{cardContent}</ul>

function CardGrid(){
    return(
        <div className="cardgrid-wrapper">{gridContent}</div>
    )
}
export default CardGrid