import { IMAGE_CDN_LINK } from "./constants"

const RestroCard = ({ name, cloudinaryImageId, cuisines, lastMileTravel }) => {
  return (
    <div className="restro-card">
      <img alt="food-image" src={IMAGE_CDN_LINK + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{lastMileTravel} mins</h4>
    </div>
  )
}

export default RestroCard
