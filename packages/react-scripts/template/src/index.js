import { Component } from 'react'
import './global-styles.scss'
import { Page, Nav, Header, Resources, Footer } from '~/components'
import styles from './styles.scss'
import BlockstackLogo from '~/assets/images/blockstack-logo.svg'
import ReactLogo from '~/assets/images/react-logo.svg'
import {
  redirectToSignIn,
  isUserSignedIn,
  isSignInPending,
  handlePendingSignIn,
  loadUserData,
  signUserOut
} from 'blockstack'
import { render } from 'react-dom'
import registerServiceWorker from '~/utilities/registerServiceWorker'

class App extends Component {

  state = {
    loggedIn: false,
    loading: true,
    username: null,
    name: null,
    profilePicture: null,
    description: null,
  }

  render() {
    return (
      <Page>
        <Nav
          loggedIn={ this.state.loggedIn }
          logIn={ this.logIn }
          logOut={ this.logOut }
        />
        <Header
          visual={
            this.state.loggedIn
              ? (
                <img
                  src={ this.state.profilePicture }
                  alt='profile'
                  className={ styles.profilePicture }
                />
              ) : [
                <BlockstackLogo className={ styles.blockstackLogo } />,
                <ReactLogo className={ styles.reactLogo } />
              ]
          }
          heading={ this.state.loggedIn ? this.state.username : 'welcome to your decentralized app!' }
          subheading={ this.state.loggedIn ? this.state.description : 'future home to something great' }
        />
        <Resources />
        <Footer />
      </Page>
    )
  }

  logIn = () => {
    const origin = window.location.origin
    redirectToSignIn(
      origin,
      `${ origin }/manifest.json`,
      [
        'store_write',
        'publish_data'
      ]
    )
    this.setState({ loading: true, })
  }

  logOut = () => {
    signUserOut(window.location.origin)
    this.resetUser()
    window.location = `${ window.location.protocol }//${ window.location.host }`
  }

  refresh = async () => {

    if(isSignInPending()) {
      const user = await handlePendingSignIn()
      if(user) this.setUser(user)
    } else {
      if(isUserSignedIn()) {
        this.setUser()
      } else {
        this.resetUser()
      }
    }
  }

  setUser = (user) => {

    const {
      username,
      profile: {
        name,
        image: {
          0: {
            contentUrl: profilePicture
          }
        },
        description
      }
    } = user || loadUserData()

    this.setState({
      username,
      name,
      profilePicture,
      description,
      loggedIn: true,
      loading: false,
    })

  }

  resetUser = () => {
    this.setState({
      username: null,
      name: null,
      profilePicture: null,
      description: null,
      loggedIn: false,
      loading: false
    })
  }

  componentDidMount = () => {
    this.refresh()
  }

}


render(<App />, document.getElementById('root'))
registerServiceWorker()
