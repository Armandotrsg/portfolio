import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Home } from "./HomeComponent";
import { NotFound } from "./NotFound";

import {
    Route,
    Routes,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    }

    return ComponentWithRouterProp;
}

const Main = () => {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<NotFound />} />{/* <Navigate to="/home" /> */}
            </Routes>
            <Footer />
        </div>
    );
};

export default withRouter(Main);

