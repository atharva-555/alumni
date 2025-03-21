import { useState } from 'react'
import { Suspense, lazy } from 'react'
import { Routes,Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorPage from "./Pages/Error/ErrorPage.jsx"
import Loading from "./Components/UI/LoadingComponent/Loading.jsx"
import ErrorFallback from "./ErrorFallback";
import Layout from './Layout/Layout.jsx'
import AddJob from './Pages/AddJob/Addjob.jsx'
import Registeration from './Pages/Registeration/Registeration.jsx'
import Login from './Pages/Login/Login.jsx'
import './App.css'

// Lazy Loading compoments
// const Layout = lazy(() => import("./Layout/Layout.jsx"));
const Home = lazy(()=> import("./Pages/Home/Home.jsx"))
const Yearbook = lazy(()=> import("./Pages/Yearbook/Yearbook.jsx"))


function App() {
  const [count, setCount] = useState(0)

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Layout/>} errorElement={<ErrorPage />}>
            <Route index element={<Home />} />
            <Route path="/yearbook" element={<Yearbook />} />
            <Route path="/post-job" element={<AddJob />} />
            <Route path="/register" element={<Registeration />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
