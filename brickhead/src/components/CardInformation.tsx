import "./CardInformation.css"
function CardInformation(props:any){

    return(
        <div className="information-wrapper">
            <div className="information">
                <h1 className="information__brand">Brand</h1>
                <h1 className="information__title">Title</h1> 
                <p className="information__director">Director</p>
           </div>

        </div>
    )
}

export default CardInformation