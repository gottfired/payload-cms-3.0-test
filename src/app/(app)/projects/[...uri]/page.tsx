import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

// Test a page with RSC
export default async function Page(props: { params: { uri: string[] } }) {
  const payload = await getPayloadHMR({ config })
  const id = props.params.uri[0]

  const project = await payload.find({
    collection: 'projects',
    limit: 1,
    where: {
      id: {
        equals: id,
      },
    },
  })

  const found = project.totalDocs > 0

  return (
    <div style={{ whiteSpace: 'pre' }}>
      {found ? JSON.stringify(project.docs[0], null, 4) : 'not found'}
    </div>
  )
}
