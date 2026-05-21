export default function Sobre() {
  return (
    <div className="container">

      <span className="section-title">
        SOBRE MIM
      </span>

      <h1>
        Desenvolvedora apaixonada por tecnologia e desenvolvimento web.
      </h1>

      <p
        style={{
          marginTop: "20px",
          maxWidth: "800px",
          lineHeight: "1.8",
          opacity: 0.8
        }}
      >
        Atualmente estudo e desenvolvo projetos utilizando
        Java, Spring Boot, React e Angular,
        buscando criar aplicações modernas,
        organizadas e funcionais.
        Tenho interesse em desenvolvimento full stack,
        APIs REST e interfaces responsivas.
      </p>

      <div className="techs">

        <div className="tech">Java</div>

        <div className="tech">Spring Boot</div>

        <div className="tech">Angular</div>

        <div className="tech">React</div>

        <div className="tech">PostgreSQL</div>

        <div className="tech">Git/GitHub</div>

        <div className="tech">REST API</div>

      </div>

    </div>
  )
}