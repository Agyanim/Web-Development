import "./main.css"
const MainCard = ({name,email,location,phone,getData,picture,registered}) => {
  return (
    <div className="main-wrapper">
      <div className="card-wrapper">
      <div className="image-header-wrapper">
        <img src={picture?.large} alt="img" />
        <h1>{name?.first} {name?.last}</h1>
      </div>
      <div className="address-wrapper">
        <h3>{email}</h3>
        <h3>{phone}</h3>
        <h3>{location?.city}/ {location?.country}</h3>
      </div>
      <div className="card-footer">
        <p>age: {registered?.age}</p>
        <p>{new Date(registered?.date).toLocaleDateString("en-US")}</p>
      </div>
      </div>
      <button className="btn" onClick={getData}>Click</button>
    </div>
  )
}

export default MainCard