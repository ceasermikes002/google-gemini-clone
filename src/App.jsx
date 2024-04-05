import Main from "./components/Main/Main"
import Sidebar from "./components/Sidebar/Sidebar"

const App = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <Main/>
    </div>
  )
}

export default App