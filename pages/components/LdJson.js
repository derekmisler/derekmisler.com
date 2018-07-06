import PropTypes from 'prop-types'

const JsonLd = ({ data }) => (
  <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
)
JsonLd.propTypes = { data: PropTypes.shape.isRequired }
export default JsonLd
