import React, { Component } from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { Routes, Route } from 'react-router'
import LoadingBar from "react-top-loading-bar";
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

export default class App extends Component {
pageSize=5;
ApiKey = import.meta.env.VITE_NEWS_API;

state={
      progress:0,
    }
 SetProgress=(progress)=>{
  this.setState({progress:progress})
 }
  render() {

   console.log(import.meta.env)
    return (
        <>
        <LoadingBar
        color="#f11946"
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      {/* <News SetProgress=({this.state.progress})) pageSize={5} country="in" category="sports"/> */}

      <Routes>
        <Route path="/"   element={<News SetProgress={this.SetProgress} ApiKey={this.ApiKey} key="general"   pageSize={this.pageSize}category="General"/>}/>
        <Route path="/sports" element={<News SetProgress={this.SetProgress} key="sports"  pageSize={this.pageSize} category="sports" />} />
        <Route path="/business" element={<News SetProgress={this.SetProgress} key="business"  pageSize={this.pageSize} category="business" />} />
        <Route path="/entertainment" element={<News SetProgress={this.SetProgress} key="entertainment"  pageSize={this.pageSize} category="entertainment" />} />
        <Route path="/general" element={<News SetProgress={this.SetProgress} key="general"  pageSize={this.pageSize} category="general" />} />
        <Route path="/health" element={<News SetProgress={this.SetProgress} key="health"  pageSize={this.pageSize} category="health" />} />
        <Route path="/science" element={<News SetProgress={this.SetProgress} key="science"  pageSize={this.pageSize} category="science" />} />
        <Route path="/technology" element={<News SetProgress={this.SetProgress} key="technology"  pageSize={this.pageSize} category="technology" />} />
      </Routes>
    </>
    // <>
    // business
    // entertainment
    // general
    // health
    // science
    // sports
    // technology
    //     <section id="center">
    //     <div className="hero">
    //       <img src={heroImg} className="base" width="170" height="179" alt="" />
    //       <img src={reactLogo} className="framework" alt="React logo" />
    //       <img src={viteLogo} className="vite" alt="Vite logo" />
    //     </div>
    //     <div>
    //       <h1>Get started</h1>
    //       <p>
    //         Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
    //       </p>
    //     </div>
    //     <button
    //       type="button"
    //       className="counter"
    //       onClick={() => setCount((count) => count + 1)}
    //     >
    //       Count is {count}
    //     </button>
    //   </section>

    //   <div className="ticks"></div>

    //   <section id="next-steps">
    //     <div id="docs">
    //       <svg className="icon" role="presentation" aria-hidden="true">
    //         <use href="/icons.svg#documentation-icon"></use>
    //       </svg>
    //       <h2>Documentation</h2>
    //       <p>Your questions, answered</p>
    //       <ul>
    //         <li>
    //           <a href="https://vite.dev/" target="_blank">
    //             <img className="logo" src={viteLogo} alt="" />
    //             Explore Vite
    //           </a>
    //         </li>
    //         <li>
    //           <a href="https://react.dev/" target="_blank">
    //             <img className="button-icon" src={reactLogo} alt="" />
    //             Learn more
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div id="social">
    //       <svg className="icon" role="presentation" aria-hidden="true">
    //         <use href="/icons.svg#social-icon"></use>
    //       </svg>
    //       <h2>Connect with us</h2>
    //       <p>Join the Vite community</p>
    //       <ul>
    //         <li>
    //           <a href="https://github.com/vitejs/vite" target="_blank">
    //             <svg
    //               className="button-icon"
    //               role="presentation"
    //               aria-hidden="true"
    //             >
    //               <use href="/icons.svg#github-icon"></use>
    //             </svg>
    //             GitHub
    //           </a>
    //         </li>
    //         <li>
    //           <a href="https://chat.vite.dev/" target="_blank">
    //             <svg
    //               className="button-icon"
    //               role="presentation"
    //               aria-hidden="true"
    //             >
    //               <use href="/icons.svg#discord-icon"></use>
    //             </svg>
    //             Discord
    //           </a>
    //         </li>
    //         <li>
    //           <a href="https://x.com/vite_js" target="_blank">
    //             <svg
    //               className="button-icon"
    //               role="presentation"
    //               aria-hidden="true"
    //             >
    //               <use href="/icons.svg#x-icon"></use>
    //             </svg>
    //             X.com
    //           </a>
    //         </li>
    //         <li>
    //           <a href="https://bsky.app/profile/vite.dev" target="_blank">
    //             <svg
    //               className="button-icon"
    //               role="presentation"
    //               aria-hidden="true"
    //             >
    //               <use href="/icons.svg#bluesky-icon"></use>
    //             </svg>
    //             Bluesky
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </section>

    //   <div className="ticks"></div>
    //   <section id="spacer"></section>
    // </>
     
    )
  }
}

// import { useState } from 'react'
// import Navbar from './components/Navbar'
// import News from './components/News'
// import { Routes, Route } from 'react-router'
// import LoadingBar from "react-top-loading-bar";
// // import heroImg from './assets/hero.png'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from './assets/vite.svg'
// // import './App.css'

// function App() {
 

//   return (
//     <>
//         <LoadingBar
//         color="#f11946"
//         progress={10}
//         // onLoaderFinished={() => setProgress(0)}
//       />
//       <Navbar />
//       {/* <News SetProgress=({this.state.progress})) pageSize={5} country="in" category="sports"/> */}

//       <Routes>
//         <Route path="/"   element={ <News SetProgress=({this.state.progress})) key="general"       pageSize={this.pageSize}category="General"/>}/>
//         <Route path="/sports" element=<News<News SetProgress={this.SetProgress}}} key="sports"  pageSize={this.pageSize} category="sports" />} />
//         <Route path="/business" element=<News<News SetProgress={this.SetProgress}}} key="business"  pageSize={this.pageSize} category="business" />} />
//         <Route path="/entertainment" element=<News<News SetProgress={this.SetProgress}}} key="entertainment"  pageSize={this.pageSize} category="entertainment" />} />
//         <Route path="/general" element=<News<News SetProgress={this.SetProgress}}} key="general"  pageSize={this.pageSize} category="general" />} />
//         <Route path="/health" element=<News<News SetProgress={this.SetProgress}}} key="health"  pageSize={this.pageSize} category="health" />} />
//         <Route path="/science" element=<News<News SetProgress={this.SetProgress}}} key="science"  pageSize={this.pageSize} category="science" />} />
//         <Route path="/technology" element=<News<News SetProgress={this.SetProgress}}} key="technology"  pageSize={this.pageSize} category="technology" />} />
//       </Routes>
//     </>
//     // <>
//     // business
//     // entertainment
//     // general
//     // health
//     // science
//     // sports
//     // technology
//     //     <section id="center">
//     //     <div className="hero">
//     //       <img src={heroImg} className="base" width="170" height="179" alt="" />
//     //       <img src={reactLogo} className="framework" alt="React logo" />
//     //       <img src={viteLogo} className="vite" alt="Vite logo" />
//     //     </div>
//     //     <div>
//     //       <h1>Get started</h1>
//     //       <p>
//     //         Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//     //       </p>
//     //     </div>
//     //     <button
//     //       type="button"
//     //       className="counter"
//     //       onClick={() => setCount((count) => count + 1)}
//     //     >
//     //       Count is {count}
//     //     </button>
//     //   </section>

//     //   <div className="ticks"></div>

//     //   <section id="next-steps">
//     //     <div id="docs">
//     //       <svg className="icon" role="presentation" aria-hidden="true">
//     //         <use href="/icons.svg#documentation-icon"></use>
//     //       </svg>
//     //       <h2>Documentation</h2>
//     //       <p>Your questions, answered</p>
//     //       <ul>
//     //         <li>
//     //           <a href="https://vite.dev/" target="_blank">
//     //             <img className="logo" src={viteLogo} alt="" />
//     //             Explore Vite
//     //           </a>
//     //         </li>
//     //         <li>
//     //           <a href="https://react.dev/" target="_blank">
//     //             <img className="button-icon" src={reactLogo} alt="" />
//     //             Learn more
//     //           </a>
//     //         </li>
//     //       </ul>
//     //     </div>
//     //     <div id="social">
//     //       <svg className="icon" role="presentation" aria-hidden="true">
//     //         <use href="/icons.svg#social-icon"></use>
//     //       </svg>
//     //       <h2>Connect with us</h2>
//     //       <p>Join the Vite community</p>
//     //       <ul>
//     //         <li>
//     //           <a href="https://github.com/vitejs/vite" target="_blank">
//     //             <svg
//     //               className="button-icon"
//     //               role="presentation"
//     //               aria-hidden="true"
//     //             >
//     //               <use href="/icons.svg#github-icon"></use>
//     //             </svg>
//     //             GitHub
//     //           </a>
//     //         </li>
//     //         <li>
//     //           <a href="https://chat.vite.dev/" target="_blank">
//     //             <svg
//     //               className="button-icon"
//     //               role="presentation"
//     //               aria-hidden="true"
//     //             >
//     //               <use href="/icons.svg#discord-icon"></use>
//     //             </svg>
//     //             Discord
//     //           </a>
//     //         </li>
//     //         <li>
//     //           <a href="https://x.com/vite_js" target="_blank">
//     //             <svg
//     //               className="button-icon"
//     //               role="presentation"
//     //               aria-hidden="true"
//     //             >
//     //               <use href="/icons.svg#x-icon"></use>
//     //             </svg>
//     //             X.com
//     //           </a>
//     //         </li>
//     //         <li>
//     //           <a href="https://bsky.app/profile/vite.dev" target="_blank">
//     //             <svg
//     //               className="button-icon"
//     //               role="presentation"
//     //               aria-hidden="true"
//     //             >
//     //               <use href="/icons.svg#bluesky-icon"></use>
//     //             </svg>
//     //             Bluesky
//     //           </a>
//     //         </li>
//     //       </ul>
//     //     </div>
//     //   </section>

//     //   <div className="ticks"></div>
//     //   <section id="spacer"></section>
//     // </>
//   )
// }

// export default App
