export default function ProjectCard({
  title,
  description
}) {
  return (
    <div className="card">

      <h2>{title}</h2>

      <p>{description}</p>

    </div>
  )
}