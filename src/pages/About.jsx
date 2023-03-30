import { NavLink, Outlet } from 'react-router-dom';
const About = () => {
  return (
    <>
      <h1>About page.</h1>
      <div className="about">
        <ul className="about_list">
          <li>
            <NavLink to="about-app">About app</NavLink>
          </li>
          <li>
            <NavLink to="about-developer">About developer</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
export default About;
// Because the <Route path="about"> implements nested routing, any path in the About component that starts without a preceding forward slash / like to="about-app" will build on the about/ to generate about/about-app route. If we add a forward slash / like to="/about-app", it will be relative to the root like http://localhost:***/about-app.

//Remember that the about/:slug will render a SinglePage component. So, any matching path like about/about-app will render the SinglePage.

//If we save the files, the nested links in the about page should render the content of the SinglePage component.*/