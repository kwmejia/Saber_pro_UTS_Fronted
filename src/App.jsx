import { Suspense } from "react";
import { Router } from './router/Router';
import { Loader } from './common/loader/Loader';
import { AuthProvider } from "./context/AuthContext";


function App() {

  return (
    <AuthProvider>
      <Suspense fallback={<Loader />}>
        <Router />
      </Suspense>
    </AuthProvider>
  )
}

export default App;
