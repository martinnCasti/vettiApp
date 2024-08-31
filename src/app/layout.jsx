import { Navbar } from "../../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div>
            <Navbar />
            {children}
          </div>
        </header>
        <main></main>
        <footer></footer>
      </body>
    </html>
  );
}
