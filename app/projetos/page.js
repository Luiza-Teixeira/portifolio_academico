import { getRepos } from "@/services/github"
import ProjectCard from "@/components/ProjectCard"

export default async function Projetos() {

  const repos = await getRepos()

  return (
    <div className="container">

      <h1>Projetos</h1>

      <div className="grid">

        {repos?.map((repo) => (

          <ProjectCard
            key={repo.id}
            title={repo.name}
            description={
              repo.description ||
              "Projeto desenvolvido"
            }
          />

        ))}

      </div>

    </div>
  )
}