import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import BlogNavbar from "./components/blogNavbar.component";
import UserAuthForm from "./pages/userAuthForm.page";
import { createContext, useEffect, useState } from "react";
import { lookInSession } from "./common/session";
import Editor from "./pages/editor.pages";
import SearchPage from "./pages/search.page";
import ProfilePage from "./pages/profile.page";
import BlogPage from "./pages/blog.page";
import SideNav from "./components/sidenavbar.component";
import ChangePassword from "./pages/change-password.page";
import EditProfile from "./pages/edit-profile.page";
import Notifications from "./pages/notifications.page";
import ManageBlogs from "./pages/manage-blogs.page";
import BlogHomePage from "./pages/blog.home.page";
import ManageUsers from "./components/manageUsersCard";
import HomePage from "./pages/home.page";
import PrivacyPolicyPage from "./pages/privacy.policy";


export const UserContext = createContext({});
export const ThemeContext = createContext({});

const darkThemePreference = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

const App = () => {
  const [userAuth, setUserAuth] = useState({});
  const [theme, setTheme] = useState(() => darkThemePreference() ? "dark" : "light");

  useEffect(() => {
    let userInSession = lookInSession("user");
    let themeInSession = lookInSession("theme");

    userInSession
      ? setUserAuth(userInSession)
      : setUserAuth({ accessToken: null });

    if (themeInSession) {
      setTheme(() => {
        document.body.setAttribute("data-theme", themeInSession);
        return themeInSession;
      });
    } else {
      document.body.setAttribute("data-theme", theme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserContext.Provider value={{ userAuth, setUserAuth }}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage/>} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/editor/:blog_id" element={<Editor />} />
            <Route element={<BlogNavbar />}>
              <Route path="/blog" element={<BlogHomePage />} />
              <Route path="blog/dashboard" element={<SideNav />}>
                <Route path="blogs" element={<ManageBlogs />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="manage-users" element={<ManageUsers />} />
              </Route>
              <Route path="blog/settings" element={<SideNav />}>
                <Route path="edit-profile" element={<EditProfile />} />
                <Route path="change-password" element={<ChangePassword />} />
              </Route>
              <Route path="blog/search/:query" element={<SearchPage />} />
              <Route path="blog/user/:username" element={<ProfilePage />} />
              <Route
                path="blog/signin"
                element={<UserAuthForm type="sign-in" />}
              />
              <Route
                path="blog/signup"
                element={<UserAuthForm type="sign-up" />}
              />
              <Route path="blog/:blog_id" element={<BlogPage />} />
            </Route>
          </Routes>
        </Router>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
