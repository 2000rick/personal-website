import Sidebar from "./component/sidebar";
import Footer from "./component/footer";
import { personalData } from "../data/page-data";
import './global.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="flex flex-col sm:flex-row">
        <Sidebar data={personalData} />
        <main className="grow-full p-8 sm:p-16 w-full sm:basis-2/3 ml-auto">       
          {children}
        </main>  
        <div className="sm:text-white sm:bottom-0 sm:fixed sm:font-normal font-semibold indent-8 mb-6">
          <Footer />
        </div>
      </body>
    </html>
  )
}
