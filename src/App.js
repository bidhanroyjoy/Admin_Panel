import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Login,Home, List, Single, New } from './pages';
// import {  } from './components';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>
            <Route path="login" element={<Login />} />
          </Route>
          <Route path='users'>
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} title='Add New User'/>
          </Route>
          <Route path='products'>
            <Route index element={<List />} />
            <Route path=':productId' element={<Single />} />
            <Route path='new' element={<New />} title='Add New Product'/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
