import React from 'react'
import Create from './Create'
import List from "./List";
function Home() {
  return (
    <>
    <div className="row mt-5">
    <h3 className="d-flex justify-content-center">CRUD operation in MERN Technology</h3>
    </div>
    <div className="row mt-4">
        <div className="col-md-4">
            <Create/>
        </div>
        <div className="col-md-8">
            <List/>
        </div>
    </div>
    </>
  )
}

export default Home