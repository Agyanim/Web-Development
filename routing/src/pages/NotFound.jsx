import { useNavigate } from "react-router-dom"
import pageNotFound from "../img/404-error.png"
import "./pages.css"
const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="image-wrapper">
      <img src={pageNotFound} alt="img" />
      <button onClick={()=>navigate('/')}>Go To Home</button>
    </div>
  )
}

export default NotFound