import { container as containerStyle } from './styles.scss'

export default (props) => (
  <div
    { ...props }
    className={[
      containerStyle,
      props.className || ''
    ].join(' ')}
  />
)