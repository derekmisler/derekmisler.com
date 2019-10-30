interface JsonTypes {}

export const JsonLd = ({ data }: { data: JsonTypes }) => (
  <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
)
