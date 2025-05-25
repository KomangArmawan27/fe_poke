import axios from 'axios'

const BASE_URL = 'https://gopoke-production.up.railway.app/api/v1'

// get
export async function fetchFavoritePokemons(token, page = 1, limit = 20) {
  try {
    const res = await fetch(`${BASE_URL}/pokemons?page=${page}&limit=${limit}`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    const json = await res.json()
    if (json.success) {
      return {
        items: json.data.items,
        currentPage: json.data.currentPage,
        totalPages: json.data.totalPages,
      }
    } else {
      throw new Error(json.message)
    }
  } catch (error) {
    console.error('Error fetching favorite Pokémons:', error)
    throw error
  }
}


// create
export async function createFavoritePokemon({ name, notes, sprite, type, userEmail }) {
  const token = localStorage.getItem('token') 

  if (!token) throw new Error('User is not authenticated')

  try {
    const response = await axios.post(
      `${BASE_URL}/pokemon/create`,
      {
        name,
        notes,
        sprite,
        type,
        userEmail
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }
    )

    return response.data
  } catch (error) {
    console.error('Error favoriting Pokémon:', error)
    throw error
  }
}

// update
export async function updateFavoritePokemon(id, data) {
  const token = localStorage.getItem('token')
  if (!token) throw new Error('User is not authenticated')

  const response = await axios.put(
    `${BASE_URL}/pokemon/update/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }
  )

  return response.data
}
