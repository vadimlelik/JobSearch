import { Route, Routes } from "react-router-dom";
import Favorites from "./components/Page/Favorites";
import style from "./App.module.css";
import cn from "classnames";
import AppAuth from "./components/Hoc/AppAuth";
import Layout from "./layouts/Layout";
import JobLayout from "./layouts/JobLayout";
import AppLoadData from "./components/Hoc/AppLoadData";

function App() {
  return (
    <AppAuth>
      <AppLoadData>
        <div className={cn(style.App)}>
          <Layout>
            <Routes>
              <Route path="/:id?/:edit?" element={<JobLayout />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </Layout>
        </div>
      </AppLoadData>
    </AppAuth>
  );
}

export default App;
