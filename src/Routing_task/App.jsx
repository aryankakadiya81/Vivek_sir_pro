import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Compo_main from './Compo/Compo_main'
import Section1 from './Compo/Section1/Section1';
import Section2 from './Compo/Section1/Section2';
import Section3 from './Compo/Section1/Section3';



const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Compo_main></Compo_main>}>
                        <Route path='' element={<Section1></Section1>}></Route>
                        <Route path='sec2' element={<Section2></Section2>}></Route>
                        <Route path='sec3' element={<Section3></Section3>}></Route>


                    </Route>

                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default App
