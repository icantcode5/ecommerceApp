// import axios from "axios"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"


function App() {


  return (
    <>
    <Routes>
      <Route  path = "/" element = {<Home />}/>
      <Route  path = "/products" element = {<Home />}/>
      <Route  path = "/product/:id" element = {<Home />}/>
      <Route  path = "/cart" element = {<Home />}/>
    </Routes>
    </>
  )
}

export default App

// const [usersData, setUserData] = useState([])
// console.log(usersData)

// useEffect(() => {
//   axios.get("http://localhost:5000/products")
//   .then((response) => {
//     setUserData(response.data)
//   })
// },[])

// const user  = usersData.map(user => {
//   return(
//     <>
//     <p>{user.id}</p>
//     <p>{user.name}</p>
//     <p>{user.description}</p>
//     <p>{user.imageurl}</p>
//     </>
//   )
// })

//   return (
//     <div className="App">
//       {user}
//     </div>
//   )
// }
