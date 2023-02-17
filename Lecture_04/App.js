import React from "react"
import ReactDOM from "react-dom/client"

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="food-logo"
        src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
      />
    </a>
  )
}
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}



 const KFC = {
  name: "KFC",
   image: "https://www.bighospitality.co.uk/var/wrbm_gb_hospitality/storage/images/_aliases/wrbm_large/publications/hospitality/bighospitality.co.uk/article/2018/03/01/a-week-after-running-out-of-chicken-kfc-runs-out-of-gravy/2759203-1-eng-GB/A-week-after-running-out-of-chicken-KFC-runs-out-of-gravy.png",
   cuisines: ["American", "Burgers"],
   travel: 10,
 }

console.log(restroList)

const RestroCard = () => { (props)
  console.log(props)
  return (
    <div className="restro-card">
      <img
        alt="food-image"
        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill" + restroList[0].data?.data.cloudinaryImageID}
      ></img>
      <h2>{restroList[0].data?.name}</h2>
      <h3>{restroList[0].data.cuisines.join(", ")}</h3>
      <h4>{restroList[0].data.lastMileTravel} mins</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="restro-list">
      <RestroCard restro={...restroList}/>
      <RestroCard />
      <RestroCard />
      <RestroCard />
      <RestroCard />
    </div>
  )
}

const Footer = () => {
  return <h4>Footerrrrrrrrrrrr</h4>
}

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)
