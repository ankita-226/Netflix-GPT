import {Provider} from "react-redux"
import React from 'react'
import Body from "./components/Body"
import { applyActionCode } from "firebase/auth"
import appStore from "./utils/appStore"

const App = () => {
  return (
    <Provider store ={appStore}>
      <Body/>
    </Provider>
  )
}

export default App