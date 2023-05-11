import Userprofile from "./Userprofile"
import './App.css'
const userDetailsList = [{
        uniqueNo: 1,
        imageUrl:'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
        name:'Mahender',
        role:'Full stack developer',
},
{
  uniqueNo: 2,
  imageUrl:
    'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
  name: 'Floyd Miles',
  role: 'Software Developer'
},
{
  uniqueNo: 3,
  imageUrl:
    'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
  name: 'Jacob Jones',
  role: 'Software Developer'
},
{
  uniqueNo: 4,
  imageUrl:
    'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
  name: 'Devon Lane',
  role: 'Software Developer'
}
]


const App = ()=> (
  <div className="list-container">
  <h1 className="title">Users List</h1>
  <ul>
  {userDetailsList.map((eachitem) =>(
  <Userprofile userDetails ={eachitem} key={eachitem.uniqueNo}/>
  
    ))}
  </ul>
  </div>
)
 
  


export default App