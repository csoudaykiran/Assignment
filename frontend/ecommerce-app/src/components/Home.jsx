import React from 'react'
import NavbarComp from './NavbarComp'
import Card from './Card'
import CardTwo from './CardTwo'
import Footer from './Footer'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
      <NavbarComp />
      <div className="section-one">
        <div className="container-fluid text-center ">
          <div className="row row-cols-1" >
            <div className="col px-0 mx-0" >
              <div className='image-tag '>
                <center><div  style={{ fontsize: '24px', fontweight: 'bold'}}><h1>Discover the Power of Technology</h1></div></center>
                <center><h5> Explore Our Exquisite Range of Cutting-Edge Laptops, Crafted to Elevate Your Digital Lifestyle.</h5></center>
                <center><Link to='/products' className='shop-now'>Shop Now</Link></center>
                <div className="digits py-4">
                  <div>
                    <div className="digit">500+</div>
                    <div className="digit-tag">International Brands</div>
                  </div>
                  <div>
                    <div className="digit">5,000+</div>
                    <div className="digit-tag">High-Quality Products</div>
                  </div>
                  <div>
                    <div className="digit">50,000+</div>
                    <div className="digit-tag">Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col px-0 w-100" xs={1}>

              <img className="col px-0 w-100" src="https://img.freepik.com/free-photo/electronic-device-balancing-concept_23-2150422318.jpg?w=1480&t=st=1696552234~exp=1696552834~hmac=54e7ed5e544eeca65d0263552199b4a3269cbe7df47504ae35e2f85773574aed" alt="" />
      

            </div>
          </div>
        </div>
      </div>
      
      <div className="section-two my-5 container">
        <div className="heading">
          NEW ARRIVALS
        </div>
        <Card />
        <Link to='/products' className="btn btn-dark mt-4">View All</Link>
      </div>
      <hr />
      <div className="section-three my-5 container">
        <div className="heading">
          TOP SELLING
        </div>
        <CardTwo />
        <Link to='/products' className="btn btn-dark mt-4">View All</Link>
      </div>

      
      <div className="container section-five mt-5">
        <div className='header-five'> OUR HAPPY CUSTOMERS</div>
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
          <div class="col">
            <div class="card h-100 comment-card">
              <div class="card-body p-4">
                <div class="star-parent ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z" fill="#FFC633" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z" fill="#FFC633" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z" fill="#FFC633" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z" fill="#FFC633" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z" fill="#FFC633" />
                  </svg>
                </div>

                <div class="card-text py-2">
                  <div className="commentor">
                    Sarah M.<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path d="M12 2.8291C10.0716 2.8291 8.18657 3.40093 6.58319 4.47227C4.97982 5.54362 3.73013 7.06636 2.99218 8.84794C2.25422 10.6295 2.06114 12.5899 2.43735 14.4812C2.81355 16.3725 3.74215 18.1098 5.10571 19.4734C6.46928 20.837 8.20656 21.7656 10.0979 22.1418C11.9892 22.518 13.9496 22.3249 15.7312 21.5869C17.5127 20.849 19.0355 19.5993 20.1068 17.9959C21.1782 16.3925 21.75 14.5075 21.75 12.5791C21.7473 9.99408 20.7192 7.51571 18.8913 5.68783C17.0634 3.85994 14.585 2.83183 12 2.8291ZM16.2806 10.8597L11.0306 16.1097C10.961 16.1795 10.8783 16.2348 10.7872 16.2725C10.6962 16.3103 10.5986 16.3297 10.5 16.3297C10.4014 16.3297 10.3038 16.3103 10.2128 16.2725C10.1218 16.2348 10.039 16.1795 9.96938 16.1097L7.71938 13.8597C7.57865 13.719 7.49959 13.5281 7.49959 13.3291C7.49959 13.1301 7.57865 12.9392 7.71938 12.7985C7.86011 12.6577 8.05098 12.5787 8.25 12.5787C8.44903 12.5787 8.6399 12.6577 8.78063 12.7985L10.5 14.5188L15.2194 9.79848C15.2891 9.72879 15.3718 9.67352 15.4628 9.63581C15.5539 9.59809 15.6515 9.57868 15.75 9.57868C15.8486 9.57868 15.9461 9.59809 16.0372 9.63581C16.1282 9.67352 16.2109 9.72879 16.2806 9.79848C16.3503 9.86816 16.4056 9.95088 16.4433 10.0419C16.481 10.133 16.5004 10.2306 16.5004 10.3291C16.5004 10.4276 16.481 10.5252 16.4433 10.6163C16.4056 10.7073 16.3503 10.79 16.2806 10.8597Z" fill="#01AB31" />
                    </svg>
                  </div>
                  <div className="comment pt-3">
                    "I'm blown away by the quality and performance of the laptop I received from LaptopHaven. From everyday tasks to demanding workloads, this laptop has exceeded my expectations in terms of speed, reliability, and functionality.”
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="col">
            <div class="card h-100 comment-card">
              <div class="card-body p-4">
                <div class="star-parent ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z" fill="#FFC633" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z" fill="#FFC633" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z" fill="#FFC633" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z" fill="#FFC633" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z" fill="#FFC633" />
                  </svg>
                </div>

                <div class="card-text py-2">
                  <div className="commentor">
                    Alex K.<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path d="M12 2.8291C10.0716 2.8291 8.18657 3.40093 6.58319 4.47227C4.97982 5.54362 3.73013 7.06636 2.99218 8.84794C2.25422 10.6295 2.06114 12.5899 2.43735 14.4812C2.81355 16.3725 3.74215 18.1098 5.10571 19.4734C6.46928 20.837 8.20656 21.7656 10.0979 22.1418C11.9892 22.518 13.9496 22.3249 15.7312 21.5869C17.5127 20.849 19.0355 19.5993 20.1068 17.9959C21.1782 16.3925 21.75 14.5075 21.75 12.5791C21.7473 9.99408 20.7192 7.51571 18.8913 5.68783C17.0634 3.85994 14.585 2.83183 12 2.8291ZM16.2806 10.8597L11.0306 16.1097C10.961 16.1795 10.8783 16.2348 10.7872 16.2725C10.6962 16.3103 10.5986 16.3297 10.5 16.3297C10.4014 16.3297 10.3038 16.3103 10.2128 16.2725C10.1218 16.2348 10.039 16.1795 9.96938 16.1097L7.71938 13.8597C7.57865 13.719 7.49959 13.5281 7.49959 13.3291C7.49959 13.1301 7.57865 12.9392 7.71938 12.7985C7.86011 12.6577 8.05098 12.5787 8.25 12.5787C8.44903 12.5787 8.6399 12.6577 8.78063 12.7985L10.5 14.5188L15.2194 9.79848C15.2891 9.72879 15.3718 9.67352 15.4628 9.63581C15.5539 9.59809 15.6515 9.57868 15.75 9.57868C15.8486 9.57868 15.9461 9.59809 16.0372 9.63581C16.1282 9.67352 16.2109 9.72879 16.2806 9.79848C16.3503 9.86816 16.4056 9.95088 16.4433 10.0419C16.481 10.133 16.5004 10.2306 16.5004 10.3291C16.5004 10.4276 16.481 10.5252 16.4433 10.6163C16.4056 10.7073 16.3503 10.79 16.2806 10.8597Z" fill="#01AB31" />
                    </svg>
                  </div>
                  <div className="comment pt-3">
                    "Finding a laptop that aligns with my specific needs used to be a challenge until I discovered LaptopHaven. The range of laptop options they offer is truly remarkable, catering to a variety of preferences and computing requirements.”
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="col">
            <div class="card h-100 comment-card">
              <div class="card-body p-4">
                <div class="star-parent ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z" fill="#FFC633" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z" fill="#FFC633" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z" fill="#FFC633" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z" fill="#FFC633" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z" fill="#FFC633" />
                  </svg>
                </div>

                <div class="card-text py-2">
                  <div className="commentor">
                    James L.<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path d="M12 2.8291C10.0716 2.8291 8.18657 3.40093 6.58319 4.47227C4.97982 5.54362 3.73013 7.06636 2.99218 8.84794C2.25422 10.6295 2.06114 12.5899 2.43735 14.4812C2.81355 16.3725 3.74215 18.1098 5.10571 19.4734C6.46928 20.837 8.20656 21.7656 10.0979 22.1418C11.9892 22.518 13.9496 22.3249 15.7312 21.5869C17.5127 20.849 19.0355 19.5993 20.1068 17.9959C21.1782 16.3925 21.75 14.5075 21.75 12.5791C21.7473 9.99408 20.7192 7.51571 18.8913 5.68783C17.0634 3.85994 14.585 2.83183 12 2.8291ZM16.2806 10.8597L11.0306 16.1097C10.961 16.1795 10.8783 16.2348 10.7872 16.2725C10.6962 16.3103 10.5986 16.3297 10.5 16.3297C10.4014 16.3297 10.3038 16.3103 10.2128 16.2725C10.1218 16.2348 10.039 16.1795 9.96938 16.1097L7.71938 13.8597C7.57865 13.719 7.49959 13.5281 7.49959 13.3291C7.49959 13.1301 7.57865 12.9392 7.71938 12.7985C7.86011 12.6577 8.05098 12.5787 8.25 12.5787C8.44903 12.5787 8.6399 12.6577 8.78063 12.7985L10.5 14.5188L15.2194 9.79848C15.2891 9.72879 15.3718 9.67352 15.4628 9.63581C15.5539 9.59809 15.6515 9.57868 15.75 9.57868C15.8486 9.57868 15.9461 9.59809 16.0372 9.63581C16.1282 9.67352 16.2109 9.72879 16.2806 9.79848C16.3503 9.86816 16.4056 9.95088 16.4433 10.0419C16.481 10.133 16.5004 10.2306 16.5004 10.3291C16.5004 10.4276 16.481 10.5252 16.4433 10.6163C16.4056 10.7073 16.3503 10.79 16.2806 10.8597Z" fill="#01AB31" />
                    </svg>
                  </div>
                  <div className="comment pt-3">
                    "As someone who's always on the lookout for top-notch technology, I'm thrilled to have come across LaptopHaven. The selection of laptops is not only diverse but also up-to-date with the latest advancements in technology.”
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Home
