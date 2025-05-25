import axios from 'axios'

const BASE_URL = 'https://gopoke-production.up.railway.app/api/v1'

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
