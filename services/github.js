export async function getRepos() {

  const response = await fetch(
    "https://api.github.com/users/Luiza-Teixeira/repos"
  )

  return response.json()
}