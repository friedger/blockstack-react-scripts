import styles from './styles.scss'
import { ExternalLink } from '~/components'

export default () => (
  <div className={ styles.container }>
    <div className={ styles.links }>
      <ExternalLink
        href='http://blockstack.org/'
        children='blockstack.org'
      />
      |
      <ExternalLink
        href='https://github.com/harrysolovay/create-blockstack-dapp/tree/next/packages/react-scripts'
        children='blockstack-react-scripts'
      />
    </div>
    <span
      children={ `copyright © ${ (new Date()).getFullYear() }, you` }
      className={ styles.copyright }
    />
  </div>
)