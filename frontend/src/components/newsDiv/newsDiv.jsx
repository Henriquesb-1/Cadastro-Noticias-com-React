import Wallpaper from "../../img/wall.jpg"
import "./newsDiv.css"

function NewsDiv(props) {
    return (
        <div className="News">
            <div className="news-title" >
                <h1>{props.title}</h1>
            </div>
            <div className="news-category">
                <h2>{props.category}</h2>
            </div>
            <div className="news-image">
                <img src={Wallpaper} alt="Imagem que ilustra a notícia" />
            </div>
            <div className="news-description">
                <p>{props.description}</p>
            </div>
        </div>
    ) 

}

export default NewsDiv