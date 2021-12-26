import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Buttons from "./pages/Buttons";
import CustomCss from "./pages/CustomCss";
import Form from "./pages/Form";
import Nav from "./pages/Nav";
import Notes from "./pages/Notes";
import Typography from "./pages/Typography";
import Cards from "./pages/Card";
import ContactDynamic from "./pages/ContactDynamic";

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Switch>
        <Route exact path="/">
          <ContactDynamic />
        </Route>
        <Route path="/typography">
          <Typography />
        </Route>
        <Route path="/button">
          <Buttons />
        </Route>
        <Route path="/customcss ">
          <CustomCss />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/card">
          <Cards />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
