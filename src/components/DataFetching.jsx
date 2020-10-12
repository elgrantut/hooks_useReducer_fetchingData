import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        setLoading(false)
        setPost(response.data)
        setError('')
      })
      .catch((error) => {
        setLoading(false)
        setPost({})
        setError('Something went wrong!')
      })
  }, [])
  return (
    <div>
      <h4 className="font-weight-bold text-success">JSON:</h4>
      <p className="font-weight-normal font-italic h5 text-success">
        {loading ? 'Loading' : post.title} {error ? error : null}
      </p>
    </div>
  )
}

export default DataFetching
