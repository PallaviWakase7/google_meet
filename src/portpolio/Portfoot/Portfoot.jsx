import'./Portfoot.css'

const Portfoot=()=>{
    return(
        <div className="Portfoot">
        <h3 class="go"><a href="#"> Go Back To Home </a></h3>
        <section id="contact">
        <h1 class="section-heading mb50px">
          <span>
            <i class="far fa-address-card"></i>
          </span>
          <span> Contact </span>
        </h1>
        <div id="contact-container">
          <div id="contact-form-container">
            <form id="contact-form">
              <input
                id="input-name"
                name="name"
                type="text"
                placeholder="Your Name"
              />
              <input
                id="input-email"
                name="input-email"
                type="text"
                required
                placeholder="Your Email"
              />
              <textarea
                id="input-message"
                name="input-message"
                rows="2"
                cols="40"
                placeholder="Message"
              ></textarea>
              <button class="sub-btn" type="submit">SEND MESSAGE</button>
            </form>
          </div>
          <div id="my-details-container">
            <h3>Get In touch</h3>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>

            <h3>My Address</h3>
            <div class="my-details-info-container">
              <i class="fas fa-map-marker-alt"></i>
              <span>Akluj, Maharashtra, India</span>
            </div>
            <div class="my-details-info-container">
              <i class="fas fa-mobile-alt"></i>
              <span>7776822670</span>
            </div>
            <div class="my-details-info-container">
              <i class="far fa-envelope"></i>
              <span>pallaviwakase@gmail.com</span>
            </div>
          </div>
        </div>

        <div class="text-center social-icons">
          <ul class="horizontal-list">
            <li>
              <a href="mailto:omkarraut11015@gmail">
                <i class="fa-regular fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/omkar-raut-1078231a0">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/OmkarRaut5050">
                <i class="fab fa-github"></i>
              </a>
            </li>

            <li>
              <a href="https://stackoverflow.com/users/19843647/omkar-raut">
                <i class="fab fa-stack-overflow"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
        </div>
    )
}
export default Portfoot