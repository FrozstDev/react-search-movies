import { useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const getMovies = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      // ? Esta linea se ejecutara tanto en el try como en el catch, al finalizar
      setIsLoading(false)
    }
  }

  return { movies, getMovies, isLoading, error }
}
