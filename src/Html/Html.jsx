
import Image1 from './Images/rose.jpg'
import Audio1 from './Audio/jailer.mp3'
import video1 from './video/natural.mp4'
const Html=()=>{
    return(
       <div className="Html">
       
            <h1>Welcome to Html</h1>
            <img src="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg" alt="" height={'500px'} width={'49%'} ></img>
            <img src={Image1} alt="" height={'500px'} width={'49%'}></img>
            <h1>Anchor Tag</h1>
            <a href="https://www.flipkart.com/" target={'_blank'} rel="referrer">flipkart</a>

            <h1>Iframe Tag</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UmnCZ7-9yDY?si=Az3biALhOGycGr90" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4962920451326!2d73.91112627381995!3d18.506461769607757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1c1fceb8377%3A0xb160caad3213fedf!2sKumar%20Primus!5e0!3m2!1sen!2sin!4v1696922034267!5m2!1sen!2sin" width="600" height="450" title="map"  loading="lazy" ></iframe>
            <br />
            <h1>media tag</h1>
            <audio src={Audio1} controls loop muted ></audio>
            <video src={video1} autoPlay loop muted width={'49%'} height={'500px'} ></video>
            
            <h1>Table</h1>
            <table border={'2'} cellSpacing={'20'} >
                <thead>
                    <tr>
                        <th>slno</th>
                        <th>Name</th>
                        <th>sal</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>A</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>B</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>c</td>
                            <td>30</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan={'3'}>@gmail.com</td>
                        </tr>
                    </tfoot>
                
            </table>
        </div>
    )
}
export default Html