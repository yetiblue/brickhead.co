import "./CardInformation.css"
function CardInformation(props:any){

    return(
        <div className="information-wrapper">
            <div className="information">
                <h1 className="information__brand">{props.companyName}</h1>
                <h1 className="information__title">{props.videoTitle}</h1> 
                <p className="information__director">{props.directorName}</p>
           </div>

        </div>
    )
}

export default CardInformation