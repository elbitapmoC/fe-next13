import Nav from './nav';
import Footer from './footer'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <Nav/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
