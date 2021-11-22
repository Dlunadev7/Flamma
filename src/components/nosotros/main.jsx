import BreadCrumbs from "../breadcrumbs";
import { useState } from "react";
import { useSelector } from "react-redux";

const Main = () => {

  return (
    <main
    // bg-zoom-in-out
      class="main main-inner bg-about"
      data-stellar-background-ratio="0.6"
    >
      {/* <div class="container">
        <header class="main-header">
          <h1>Nosotros</h1>
        </header>
        <header class="section-header wow fadeInRight">
          <strong class="fade-title-right">Trayectoria</strong>
        </header>
      </div> */}

      {/* <!-- Lines --> */}

      <div class="page-lines">
        <div class="container">
          <div class="col-line col-xs-4">
            <div class="line"></div>
          </div>
          <div class="col-line col-xs-4">
            <div class="line"></div>
          </div>
          <div class="col-line col-xs-4">
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
