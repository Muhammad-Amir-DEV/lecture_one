// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }






function app() {
  return(
  <>

<section className="header">
        <a href="#" className="logo">
            <i className="fas fa-ice-cream"></i>kiss
            Ice-Cream
        </a>
        <nav  className="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">gallery</a>
            <a href="#reviews">reviews</a>
            <a href="#order">Order</a>
        </nav>
        <div className="menu-btn fas fa-bars ">
          <h5 className=''>Sing In</h5>
        </div>
    </section>

    <div class="section dish">
        <h3>About Us</h3>
        <h1>Why choose us?</h1>
        <div class="box-ab">
            <div class="box-a1">
              <h6>ABOUT</h6>
              {/* <img src="img/back.jpg" alt=""> */}
                </div>
            <div class="box-a2">
                <h2>Provide Ice-Cream </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voquam praesentium at veritatis quo voluptate. Maiores molestias incidunt minima, modi
                    eos ea consequuntur officia corrupti, eaque, dolore nihil voluptatem?</p>
                <div class="icon cont">
                    <a href="#" class="bt-a">Fast Delivery</a>
                    <a href="#" class="bt-a">Easy Payment</a>
                    <a href="#" class="bt-a">24/7 Service</a>
                </div>
  
            </div>
        </div>

    </div>


   
  </>
  );
}
export default app;