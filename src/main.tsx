import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Index';
import Thread from './Thread';
import NewThread from "./NewThread";
import { BrowserRouter,Routes,Route,Outlet } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
        </Route>
        <Route path="thread" element={<Outlet/>}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path={"new"} element={<NewThread/>}/>
          <Route path={":id"} element={<Thread/>}/>
        </Route>
        <Route path={"*"} element={<></>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
