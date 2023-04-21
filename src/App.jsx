import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    countCoin([1, 5, 3], 24)
  },[])
  function countCoin(array, total) {
    const sortArray = array.sort()
    let remain = total
    let result = []
    for(let i = array.length - 1; i >= 0; i--) {
      let count = Math.floor(remain/sortArray[i])
      remain = remain%sortArray[i]
      console.log(sortArray[i], total, remain ,count)
      if (count > 1) {
        for(let j = 0; j < count; j++) {
          result.push(sortArray[i])
        }
      } else if (count === 1) {
        result.push(sortArray[i])
      }
    }
    console.log(result)
  }
  return (
    <>
    </>
  )
}

export default App
