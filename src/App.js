import React, { useState } from "react";

import Salutations from "./components/Salutations";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function App(props) {
  return (
    <div>
      <Navigation />
      <Salutations values={props} />
      <Footer />
    </div>
  );
}
