import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-5 flex gap-6">

      <Link href="/">Home</Link>

      <Link href="/sobre">
        Sobre
      </Link>

      <Link href="/academica">
        Acadêmica
      </Link>

      <Link href="/experiencia">
        Experiência
      </Link>

      <Link href="/projetos">
        Projetos
      </Link>

    </nav>
  )
} 