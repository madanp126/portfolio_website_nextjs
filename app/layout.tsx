import "./globals.css"
import Sidebar from "@/components/Sidebar"
import Navbar from "@/components/Navbar"

export const metadata ={
  title:"Next Dashboard",
  description:"Dashboard by madan",
};

export default function RootLayout({ children}:{children:React.ReactNode}){
  return(
    <html lang="en">
      <body className="flex">
        <Sidebar/>
        <div className="flex-1 flex flex-col">
          <Navbar/>
          <main className="p-6  min-h-screen">{children}</main>

        </div>

      </body>
    </html>
  );
}