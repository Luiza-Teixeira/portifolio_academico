export default function Academica() {
  return (
    <div className="container">

      <span className="section-title">
        EXPERIÊNCIA ACADÊMICA
      </span>

      <h1>
        Projetos e experiências desenvolvidas durante minha formação.
      </h1>

      <p className="description">
        Desenvolvimento de projetos acadêmicos voltados para
        programação orientada a objetos, desenvolvimento web,
        modelagem de sistemas e construção de APIs REST.
      </p>

      <div className="grid">

        <div className="card">

          <h2>
            Sistema de Biblioteca
          </h2>

          <p>
            Projeto desenvolvido utilizando Java
            e Programação Orientada a Objetos,
            aplicando conceitos de encapsulamento,
            herança, tratamento de exceções
            e organização em camadas.
          </p>

        </div>

        <div className="card">

          <h2>
            Desenvolvimento Web
          </h2>

          <p>
            Criação de interfaces modernas
            utilizando React, Next.js,
            HTML, CSS e integração
            com APIs REST.
          </p>

        </div>

        <div className="card">

          <h2>
            Modelagem de Sistemas
          </h2>

          <p>
            Experiência com levantamento
            de requisitos, diagramas UML,
            casos de uso e análise
            de sistemas orientados a objetos.
          </p>

        </div>

      </div>

    </div>
  )
}