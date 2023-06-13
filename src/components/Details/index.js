import './index.css'

const Details = props => {
  const {each} = props
  const {name, imageUrl, description} = each
  return (
    <li className="li-cont">
      <img src={imageUrl} className="image" alt={name} />
      <h1 className="name">{name}</h1>
      <p className="desc">{description}</p>
    </li>
  )
}

export default Details
