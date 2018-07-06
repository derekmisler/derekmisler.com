import PropTypes from 'prop-types'
import css from '../../static/styles/components/header.scss'
import { fixWidow } from '../utils/helpers/stringFormat'

const Header = props => {
  const { heading, subheading } = props
  return (
    <header>
      <div className={css.container}>
        <h1 className={css.heading}>
          {heading}
          {
            subheading &&
            <>
              <br />
              <small className={css.subheading}>
                {fixWidow(subheading)}
              </small>
            </>
          }
        </h1>
      </div>
      <div className={css.overlay} />
    </header>
  )
}

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string
}

Header.defaultProps ={ subheading: null }

export default Header
