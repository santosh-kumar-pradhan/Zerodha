import React from 'react';
import{Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav
            class="navbar navbar-expand-lg border-bottom"
            style={{ backgroundColor: "#FFF" }}
        >
            <div class="container p-2">
                <Link class="navbar-brand" to="/">
                    <img
                        src="media/images/logo.svg"
                        style={{ width: "23%" }}
                        alt="Logo"
                    />
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex" role="search">
                        <ul class="navbar-nav mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link text-primary" aria-current="page" to="/signup">
                                    Signup
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-primary" to="/about">
                                    About
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-primary" to="/product">
                                    Product
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-primary" to="/pricing">
                                    Pricing
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-primary" to="/support">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(nav => nav.classList.remove("text-primary")); // remove from all
    link.classList.add("text-primary"); // add to clicked
  });
});

export default Navbar;