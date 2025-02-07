
import './App.css'
import Button from './components/context/Button'
import Text from './components/context/Text'
import Fetch from './components/Fetch'
import LoginComponent from './components/Form/LoginComponent'
import RegisterComponent from './components/Form/RegisterComponent'
import MapFilter from './components/MapFilter'
import Reducer from './components/Reducer/Reducer'
import Routing from './components/Routes/Routing'
import State from './components/State'
import UseState from './components/UseState'

function App() {

  return (
    <>
    {/* <State/> */}
    {/* <UseState/> */}
    {/* <MapFilter/> */}
    {/* <Fetch/> */}
    {/* <Button/> */}
    {/* <Text/> */}
    {/* <Reducer/> */}
    {/* <div style={{display:"flex", gap:"30px", justifyContent: "center", paddingTop: "50px"}}>
      <LoginComponent/>
      <RegisterComponent/>
    </div> */}
    <Routing/>

    </>
  )
}

export default App
