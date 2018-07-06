import Link from 'next/link'
import PropTypes from 'prop-types'
import css from '../../static/styles/components/header.scss'
import { fixWidow } from '../utils/helpers/stringFormat'

const Header = props => {
  const { profile } = props
  return (
    <header>
      <div className={css.container}>
        <h1 className={css.heading}>
          {profile.firstName}
          {' '}
          {profile.lastName}
          <br />
          <small className={css.subheading}>
            {fixWidow(profile.description)}
          </small>
        </h1>
      </div>
      <div className={css.overlay} />
      <Link href='#about-derek-misler'>
        <button type='button' className={css.downArrow}>Down</button>
      </Link>
    </header>
  )
}

Header.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}

export default Header
