import Header from "../header"
import Sidebar from "../sidebar"

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="flex min-h-screen relative">
      <Sidebar/>
      <div className="flex flex-col w-full overflow-hidden sticky top-0 bg-[#F5F6FA]">
        <Header/>
        <div className={`flex-1 p-3`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
