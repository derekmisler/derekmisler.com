export const JsonLd = ({ data }: { data: {} }) => (
  <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
)
