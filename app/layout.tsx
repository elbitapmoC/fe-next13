import Nav from './nav';
import Footer from './footer'
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Photon Health App: Providers and pharmacists can view, create, and update patients and prescriptions." />
        <title>Photon Health | &#9764;</title>
      </head>
      <body>
        <main>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
