import "./CardComponent.css"
import CardCategory from "./CardCategory"
import CardInformation from "./CardInformation"
function CardComponent(props:any){

    return(
        <div className="card-wrapper">
            <div className="card">
                <div className="card__text-wrapper">
                    <div className="card__category"><CardCategory categoryName={props.cardCategory} /></div>
                    <div className="card__information"><CardInformation companyName={props.cardCompany} videoTitle={props.cardTitle} directorName={props.cardDirector} /></div>
                </div>
                 <div className="card__thumbnail"><img src="https://independentmusicawards.com/wp-content/uploads/2015/07/awolnation-music-band-group.jpg"></img></div>
           </div>

        </div>
    )
}

export default CardComponent