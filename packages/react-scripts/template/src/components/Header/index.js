import styles from './styles.scss'

export default ({ visual, heading, subheading }) => (
  <header className={ styles.container }>
    <div
      className={ styles.visual }
      children={ <div>{ visual }</div> }
    />
    <h1
      className={ styles.heading }
      children={ heading }
    />
    <h3
      className={ styles.subheading }
      children={ subheading }
    />
  </header>
)