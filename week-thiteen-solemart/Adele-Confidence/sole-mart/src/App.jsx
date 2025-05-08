import NavBar from "./components/NavBar"
import Body from "./components/Body"
import Drop from "./components/Drop"

const App = () => {
  return (
    <div className="container mx-auto">
      <NavBar/>
      <Body/>
      <Drop/>
    </div>
  )
}

export default App