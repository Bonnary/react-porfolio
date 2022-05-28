import React from "react";

export default function Footer() {

 function getYear() {
    return new Date().getFullYear();
}
  return (
    <footer class="bg-light page-footer font-small mdb-color lighten-3 pt-4">
      <div class="container text-center text-md-left">
        <div class="row">
          <div class="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
            <h5 class="font-weight-bold text-uppercase mb-4">Thank You</h5>
            <p>Thank you for visiting my website. I hope you enjoy it.</p>
            <p>If you have any questions, feel free to contact me.</p>
          </div>

          <hr class="clearfix w-100 d-md-none" />

          {/* <div class="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
            <h5 class="font-weight-bold text-uppercase mb-4">About</h5>

            <ul class="list-unstyled">
              <li>
                <p>
                  <a href="#!">PROJECTS</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#!">ABOUT US</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#!">BLOG</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#!">AWARDS</a>
                </p>
              </li>
            </ul>
          </div> */}

          <hr class="clearfix w-100 d-md-none" />

          <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
            <h5 class="font-weight-bold text-uppercase mb-4">Address</h5>

            <ul class="list-unstyled">
              <li>
                <p>
                  <i class="fas fa-home mr-3"></i> Phnom Penh, Kombol, Cambodia
                </p>
              </li>
              <li>
                <p>
                  <i class="fas fa-envelope mr-3"></i> bonnarygmk2@gmail.com
                </p>
              </li>
              <li>
                <p>
                  <i class="fas fa-phone mr-3"></i> 0966879704
                </p>
              </li>
            </ul>
          </div>

          <hr class="clearfix w-100 d-md-none" />

          <div class="col-md-2 col-lg-2 text-center mx-auto my-4">
            <h5 class="font-weight-bold text-uppercase mb-4">Follow Me</h5>

            <a
              target="_blank"
              href="https://web.facebook.com/bonnary.vet"
              type="button"
              class="btn-floating btn-fb"
            >
              <i class="bi bi-facebook"></i>
            </a>
            <a type="button" class="btn-floating btn-tw">
              <i class="fab fa-twitter"></i>
            </a>
            <a type="button" class="btn-floating btn-gplus">
              <i class="fab fa-google-plus-g"></i>
            </a>
            <a type="button" class="btn-floating btn-dribbble">
              <i class="fab fa-dribbble"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-copyright text-center py-3">
        © {getYear()} Copyright:
        <a target="_blank" href="https://web.facebook.com/bonnary.vet">
          Vet Bonnary
        </a>
      </div>
    </footer>
  );
}
