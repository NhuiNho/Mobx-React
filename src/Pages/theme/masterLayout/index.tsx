import { ReactNode } from "react"
import Footer from "../footer"
import Header from "../header"

const MasterLayout = ({ children, ...props }: { children: ReactNode }) => {
     return (
          <div {...props}>
               <Header />
               {children}
               <Footer />
          </div>
     )
}

export default MasterLayout