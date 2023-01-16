import "../styles/globals.css";

import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-base  ">
          <Header />
          <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
            <SideBar />

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
