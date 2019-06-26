import React from "react";
import Mission from "./Mission";
import Services from "./services/Services";
import Testimonials from "./testimonials/TestImonials";

export default function HomePage() {
  return (
    <main>
      <Mission />
      <Services />
      <Testimonials />
    </main>
  );
}
