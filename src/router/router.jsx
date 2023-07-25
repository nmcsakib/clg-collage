import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../Pages/Homepage";
import CollegeDetails from "../Pages/CollegeCards/CollegeDetails";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import ErrorPage from "../Pages/Error/ErrorPage";
import Profile from "../Pages/Profile/Profile";
import AllColleges from "../Pages/AllColleges/AllColleges";
import Addmission from "../Pages/Addmission/Addmission";
import AdmissionDetails from "../Pages/AdmissionDetails/AdmissionDetails";
import MyCollege from "../Pages/MyCollege/MyCollege";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Homepage/>
            },
            {
                path: '/college/:id',
                element: <PrivateRoute><CollegeDetails/></PrivateRoute>,
               
            },
            {
                path: '/all-college',
                element: <AllColleges/>,
               
            },
            {
                path: '/admission',
                element: <Addmission/>,
               
            },
            {
                path: '/my-college/',
                element: <PrivateRoute><MyCollege/></PrivateRoute>,
               
            },
            {
                path: '/admission-details/:id',
                element: <PrivateRoute><AdmissionDetails/></PrivateRoute>,
               
            },
            {
                path: 'profile',
                element: <Profile/>,
               
            },
            {
                path: 'login',
                element: <Login/>,
               
            },
            {
                path: 'register',
                element: <Register/>,
               
            },
        ],
        errorElement: <ErrorPage/>
    }
])