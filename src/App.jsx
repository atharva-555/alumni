import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Suspense, lazy } from 'react'
import { Routes,Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorPage from "./Pages/Error/ErrorPage.jsx"
import Loading from "./Components/UI/LoadingComponent/Loading.jsx"
import ErrorFallback from "./ErrorFallback";
import './App.css'

// Lazy Loading compoments
const Layout = lazy(() => import("./Layout/Layout.jsx"));
const Home = lazy(()=> import("./Pages/Home/Home.jsx"))


function App() {
  const [count, setCount] = useState(0)

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Layout />} errorElement={<ErrorPage />}/>
          <Route index element={<Home />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
