
import { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Star from '@mui/icons-material/Star';

function App() {
  
  const [card, setcard] = useState(0)
 
  const [select,setselect]=useState(true)
  const[select1,setselect1]=useState(true)
  const[select3,setselect3]=useState(true)
  const[select4,setselect4]=useState(true)


  return <>
    <Navbar data = {{card:card}} />
    <Header />
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Product image--> */}
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">IPHONE</h5>
                  {/* <!-- Product price--> */}
                   $6000
                </div>
              </div>
              <Star></Star>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  {
                  select?<button className="btn btn-outline-dark mt-auto" onClick={()=>{setcard(card+1) 
                  setselect((prve)=>!prve)}} >ADD</button>:
                  <button className="btn btn-outline-dark mt-auto"onClick={()=>{setcard(card-1)
                  setselect((prve)=>!prve)}}>REMOVE</button>
                  }              
                  </div>
              </div>
            </div>
          </div>
           
          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Product image--> */}
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">IPHONE</h5>
                  {/* <!-- Product price--> */}
                   $6000
                </div>
              </div>
              <Star></Star>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                {
                  select1?<button className="btn btn-outline-dark mt-auto" onClick={()=>{setcard(card+1) 
                  setselect1((prve)=>!prve)}} >ADD</button>:
                  <button className="btn btn-outline-dark mt-auto"onClick={()=>{setcard(card-1)
                  setselect1((prve)=>!prve)}}>REMOVE</button>
                  }              
                </div>
              </div>
            </div>
          </div>

          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Product image--> */}
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">IPHONE</h5>
                  {/* <!-- Product price--> */}
                   $6000
                </div>
              </div>
              <Star></Star>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  {
                  select3?<button className="btn btn-outline-dark mt-auto" onClick={()=>{setcard(card+1) 
                    setselect3((prve)=>!prve)}} >ADD</button>:
                    <button className="btn btn-outline-dark mt-auto"onClick={()=>{setcard(card-1)
                    setselect3((prve)=>!prve)}}>REMOVE</button>
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Product image--> */}
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">IPHONE</h5>
                  {/* <!-- Product price--> */}
                   $6000
                </div>
              </div>
              <Star></Star>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  {    select4?<button className="btn btn-outline-dark mt-auto" onClick={()=>{setcard(card+1) 
                    setselect4((prve)=>!prve)}} >ADD</button>:
                    <button className="btn btn-outline-dark mt-auto"onClick={()=>{setcard(card-1)
                    setselect4((prve)=>!prve)}}>REMOVE</button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p>
      </div>
    </footer>
  </>

}

export default App;
