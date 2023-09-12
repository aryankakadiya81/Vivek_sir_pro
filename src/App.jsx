import React from 'react'
import { Provider } from 'react-redux'
// import Store from './Data_Fatch_Live_Api/Store'
import Store from './Redux-Saga/Store/Store'
import Main from './Redux-Saga/Main'
import Second from './Redux-Saga/Second'
// import Container from './Data_Fatch_Live_Api/Container'




let Apps = () => {
  return (
    <>

      <Provider store={Store}>
      <Second></Second>

        <Main></Main>

      </Provider>

    </>
  )
}


// react redux thunk - saga - toolkit
// <HookContainer></HookContainer>


export default Apps
