import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Home } from "./HomeComponent";
import { NotFound } from "./NotFound";
import { Connect } from "./Connect";
import { AboutMe } from "./About";

import {
    Route,
    Routes,
    useLocation,
    useNavigate,
    useParams,
    Navigate,
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
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/connect" element={<Connect />} />
                <Route exact path="/aboutme" element={<AboutMe />} />
                <Route path="/portfolio/*" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default withRouter(Main);

