import styles from './styles.scss'
import { ExternalLink } from '~/components'
import BlockstackLogo from '~/assets/images/blockstack-logo.svg'

export default ({ loggedIn, logIn, logOut }) => (
  <div className={ styles.container }>
    <div>
      <ExternalLink
        href={
          loggedIn
            ? "http://localhost:8888"
            : 'https://blockstack.org'
        }
        className={ styles.blockstackLink }
      >
        <BlockstackLogo />
      </ExternalLink>
      <button
        onClick={
          loggedIn
            ? logOut
            : logIn
        }
        children={
          loggedIn
            ? 'Log Out'
            : 'Log In'
        }
        className={ styles.active }
      />
    </div>
  </div>
)