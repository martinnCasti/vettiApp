import Link from "next/link";

export function Navbar() {
  return (
    <nav>
      Navbar
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/user/login">Login</Link>
        </li>
        <li>
          <Link href="/user/register">Registrarse</Link>
        </li>
      </ul>
    </nav>
  );
}
