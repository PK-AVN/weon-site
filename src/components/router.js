import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./signUp";
import Signin from "./signIn";
import Hero from "./hero";
import PrivateRoute from "./privateRoute";
import Header from "./header"
export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/dash" element={<Hero />} />
          {/* <Route path="/" element={<Header />} /> */}
        </Route>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
