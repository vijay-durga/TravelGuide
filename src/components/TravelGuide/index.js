import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Details from '../Details/index'

import './index.css'

class TravelGuide extends Component {
  state = {isLoading: true, information: []}

  componentDidMount() {
    this.getInformation()
  }

  getInformation = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    // console.log(response)

    if (response.ok === true) {
      const data = await response.json()
      // console.log(data)
      const formatData = data.packages.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
        description: each.description,
      }))
      this.setState({isLoading: false, information: formatData})
      // console.log(formatData)
    }
  }

  loadingView = () => (
    <div data-testid="loader">
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={50}
        width={50}
        className="loader-spinner"
      />
    </div>
  )

  successView = () => {
    const {information} = this.state
    return (
      <ul className="subCont">
        {information.map(each => (
          <Details each={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="bg-main-cont">
        <div>
          <h1 className="heading">Travel Guide</h1>
        </div>
        <div className="subCont">
          {isLoading === true ? this.loadingView() : this.successView()}
        </div>
      </div>
    )
  }
}

export default TravelGuide
