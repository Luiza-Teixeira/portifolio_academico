import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="hero-container">

      <div className="hero-content">

        <div className="hero-text">

          <span className="badge">
            ✨ Portfólio Acadêmico
          </span>

          <h1>
            Olá, eu sou <span>Dandália Teixeira</span>
          </h1>

          <h2>
            Desenvolvedora Fullstack e estudante de tecnologia.
          </h2>

          <p>
            Apaixonada por desenvolvimento web,
            interfaces modernas e criação
            de soluções criativas utilizando
            Java, React, Spring Boot e APIs REST.
          </p>

          <div className="buttons">

            <Link href="/projetos">
              <button className="btn">
                Ver Projetos
              </button>
            </Link>

            <Link href="/sobre">
              <button className="btn-outline">
                Sobre Mim
              </button>
            </Link>

          </div>

        </div>

        <div className="hero-image">

          <Image
            src="/assets/foto.jpeg"
            width={320}
            height={320}
            alt="Foto perfil"
            className="profile-image"
          />

        </div>

      </div>

    </main>
  )
}