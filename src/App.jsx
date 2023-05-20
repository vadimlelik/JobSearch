import { Route, Routes } from "react-router-dom";
import Favorites from "./components/Page/Favorites";
import style from "./App.module.css";
import cn from "classnames";
import AppLoader from "./components/Hoc/AppLoader";
import Layout from "./layouts/Layout";
import JobLayout from "./layouts/JobLayout";

function App() {
  return (
    <AppLoader>
      <div className={cn(style.App)}>
        <Layout>
          <Routes>
            <Route path="/:id?/:edit?" element={<JobLayout />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Layout>
      </div>
    </AppLoader>
  );
}

export default App;
