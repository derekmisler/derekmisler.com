interface JsonTypes {}

const JsonLd = ({ data }: { data: JsonTypes }) => (
  <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
)
export default JsonLd
