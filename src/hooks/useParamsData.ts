import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function useParamsData(key = 'keyword') {
  const [searchParams] = useSearchParams()
  const keywordRef = useRef<string>(key)
  const [searchValue, setSearchValue] = useState(
    searchParams.get(keywordRef.current) ?? ''
  )

  useEffect(() => {
    setSearchValue(searchParams.get(keywordRef.current) ?? '')
  }, [searchParams.get(keywordRef.current)])
  return {
    searchValue
  }
}
