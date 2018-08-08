import styles from './styles.scss'
import { ExternalLink } from '~/components'

export default () => (
  <div className={ styles.container }>
    <div>
      {
        [{
          href: 'https://blockstack.github.io/blockstack.js/',
          title: 'blockstack.js documentation',
          src: require('~/assets/images/dev-resources/blockstack.js-documentation.png'),
        }, {
          href: 'https://blockstack.org/tutorials/',
          title: 'Blockstack tutorials',
          src: require('~/assets/images/dev-resources/blockstack-tutorials.png'),
        }, {
          href: 'https://www.meetup.com/Blockstack-NYC/',
          title: 'Blockstack meetups',
          src: require('~/assets/images/dev-resources/blockstack-meetups.png'),
        }, {
          href: 'https://github.com/blockstack',
          title: 'Blockstack GitHub',
          src: require('~/assets/images/dev-resources/blockstack-github.png'),
        }, {
          href: 'https://app.co/',
          title: 'app.co',
          src: require('~/assets/images/dev-resources/app.co.png'),
        }, {
          href: 'https://blockstack.org/blog/',
          title: 'Blockstack Blog',
          src: require('~/assets/images/dev-resources/blockstack-blog.png'),
        }].map(({ href, title, src }) => (
          <ExternalLink
            { ...{ href } }
            className={ styles.resource }
          >
            <div
              key={ title }
              className={ styles.thumbnail }
              style={{ backgroundImage: `url(${ src })` }}
            />
          </ExternalLink>
        ))
      }
    </div>
  </div>
)