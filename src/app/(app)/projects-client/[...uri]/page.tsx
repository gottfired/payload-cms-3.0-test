'use client'

import { useEffect, useState } from 'react'

// Test a page with client side data fetching
export default function Page(props: { params: { uri: string[] } }) {
  const [result, setResult] = useState()

  useEffect(() => {
    const load = async () => {
      try {
        const API_BASE = window.location.origin

        const res = await fetch(
          `${API_BASE}/api/projects/${props.params.uri}}?depth=1&draft=false&locale=undefined`,
        )
        setResult(await res.json())
      } catch (error) {
        console.log(error)
      }
    }

    load()
  }, [props.params.uri])

  const found = !!result

  return (
    <div style={{ whiteSpace: 'pre' }}>{found ? JSON.stringify(result, null, 4) : 'not found'}</div>
  )
}
