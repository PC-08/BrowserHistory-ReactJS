import {Component} from 'react'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const GiveList = props => {
  const {uid, ondeleteReq, timeAccessed, logoUrl, title, domainUrl} = props

  const onClickDelete = () => {
    ondeleteReq(uid)
  }

  return (
    <li className="list-item">
      <div className="list-item-container">
        <p className="time">{timeAccessed}</p>
        <div className="box-4">
          <img className="logo" alt="domain logo" src={logoUrl} />
          <p className="title">{title}</p>
          <p className="link">{domainUrl}</p>
        </div>
      </div>
      <button
        onClick={onClickDelete}
        data-testid="delete"
        className="btn"
        type="button"
      >
        <img
          className="delete"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

// Replace your code here
class App extends Component {
  state = {userInpput: '', initialHistoryListc: initialHistoryList}

  onInputChamge = event => {
    this.setState({userInpput: event.target.value})
  }

  ondeleteReq = uid => {
    const {initialHistoryListc} = this.state
    const fillteredData = initialHistoryListc.filter(each => each.id !== uid)
    this.setState({initialHistoryListc: fillteredData})
  }

  render() {
    const {userInpput, initialHistoryListc} = this.state
    const searchedData = initialHistoryListc.filter(each =>
      each.title.toLowerCase().includes(userInpput.toLowerCase()),
    )

    return (
      <div>
        <nav className="nav">
          <img
            className="nav-logo"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <div className="search-container">
            <img
              className="search-img"
              alt="search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />
            <input
              value={userInpput}
              onChange={this.onInputChamge}
              className="input"
              type="search"
              placeholder="Search history"
            />
          </div>
        </nav>
        <div className="box2">
          {searchedData.length === 0 ? (
            <ul className="list-container">
              <p className="nohistory">There is no history to show</p>
            </ul>
          ) : (
            <ul className="list-container">
              {searchedData.map(each => (
                <GiveList
                  key={each.id}
                  uid={each.id}
                  timeAccessed={each.timeAccessed}
                  logoUrl={each.logoUrl}
                  title={each.title}
                  domainUrl={each.domainUrl}
                  ondeleteReq={this.ondeleteReq}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
