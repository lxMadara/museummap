import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Painting from './Painting'
import RicksFile from "./infosMockAPI.json"
import Pagination from './pagination'
import AppConnection from './Componote/AppConnection'


function App() {
  const [ page, setPage]= useState(1);
  const [currentData, setCurrentData] = useState([]);
  return (
    <>
<AppConnection></AppConnection>

{/* {(() => {
  let list = []
           RicksFile.artObjects.map((art) => {
              list.push(
                <Painting
                  image={art.webImage.url}
                  artist={art.principalOrFirstMaker}
                >
                  
                </Painting>
              )
           })
           return list;
          })()} */}
<Pagination 
CurrentPAge={page}
onPageChange={async (page) => {
  setPage (page);
  setCurrentData()
}
}>
</Pagination>

    </>
  )
}

export default App
