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
                <Route exact path="" element={<Navigate to="/home" />} />
                <Route exact path="/" element={<Navigate to="/home" />} />
                <Route exact path="/portfolio" element={<Navigate to="/home" />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default withRouter(Main);

