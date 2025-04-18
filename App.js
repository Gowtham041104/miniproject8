import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import SignupScreen from "./components/screen/SignupScreen";
import LoginScreen from "./components/screen/LoginScreen";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/signup" element={<SignupScreen />} />
            </Routes>
            <Routes>
              <Route path="/login" element={<LoginScreen />} />
            </Routes>
          </Container>
        </main>
      </BrowserRouter>
    </>
  );
}
