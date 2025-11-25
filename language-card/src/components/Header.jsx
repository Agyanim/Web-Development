import  '../index.css'
import headerImage from "../assets/headerImage.png"
const Header =()=>{

    return (
        <div className="header-wrapper">
            <img className="image" src={headerImage} alt="logo" />
        </div>
    )
}

export default Header