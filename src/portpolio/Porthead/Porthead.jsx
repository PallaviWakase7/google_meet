import'./Porthead.css'
import Image2 from'./Image2/office photo.jpeg'

const Porthead=()=>{
    return(
   
        <div className='Porthead'>
            
         <div id="container">
        <div class="text-center">
          <h1 id="my-name">pallavi wakase</h1>
        </div>
        <div>
          <ul class="horizontal-list ">
            <li>
              <a href="mailto:pallaviwakase@gmail">
                <i class="fa-regular fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="#">
              <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i class="fab fa-stack-overflow"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="my-image">
      <img src={Image2} alt="" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam fugiat rem tempore quod consequatur praesentium. Saepe aspernatur modi, corrupti sint quam assumenda sed pariatur accusantium! Nam iure dolorem qui odio illum esse amet. Mollitia doloremque animi voluptate vel, modi necessitatibus eius distinctio officia similique autem nam? Quos, doloremque quidem quod asperiores suscipit veniam omnis dolore, sapiente neque possimus nisi ipsa corrupti iste nobis magni. Atque, doloremque dolorum vero eum, provident blanditiis ipsum eos quae nam quisquam odio repellat natus omnis voluptatum adipisci. Ipsa eveniet rerum, aut tenetur sunt fugit unde quidem. Suscipit facilis fugit quo officiis unde eius porro voluptate?</p>
    </div>
    <section id="skills">
        <h1 class="section-heading mb75px">
          <span>
            <i class="fas fa-chalkboard-teacher"></i>
          </span>
          <span> SKILLS </span>
        </h1>

        <div class="skills-display">
          <div class="skill-progress">
            <div class="eighty-five-percent mb-blue">
              <div class="skill-name">
                <span> HTML </span>
              </div>
            </div>
          </div>

          <div class="skill-progress">
            <div class="eighty-percent mb-orange">
              <div class="skill-name">
                <span> CSS </span>
              </div>
            </div>
          </div>

          <div class="skill-progress">
            <div class="eighty-percent mb-light-purple">
              <div class="skill-name">
                <span> JavaScript </span>
              </div>
            </div>
          </div>

          <div class="skill-progress">
            <div class="seventy-five-percent mb-teal">
              <div class="skill-name">
                <span> Java </span>
              </div>
            </div>
          </div>
          <div class="skill-progress">
            <div class="eighty-percent mb-blue">
              <div class="skill-name">
                <span> Manual Testing </span>
              </div>
            </div>
          </div>
          <div class="skill-progress">
            <div class="seventy-five-percent mb-light-purple">
              <div class="skill-name">
                <span> SQL </span>
              </div>
            </div>
          </div>
        </div>
      </section>

  

        </div>
        
    )
}
export default Porthead