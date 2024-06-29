import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'

import videobg from '../../../assets/img/video-bg/video-2.jpg'
import line1 from '../../../assets/img/lines/12.png'
import line2 from '../../../assets/img/lines/11.png'

function Video(props) {
    const [openVideo, setOpenVideo] = useState(false)


    const openVideoModal = () => {
        setOpenVideo(true)
    }

    return (
        <section className="video-section-two bg-img-c" style={{ backgroundImage: "url(" + videobg + ")" }}>
            <div className="container">
                <div className="row align-content-center justify-content-center">
                    <div className="col-lg-10">
                        <div className="video-cont text-center">
                            <span onClick={openVideoModal} className="play-btn popup-video wow fadeInDown"
                                data-wow-duration="1500ms" data-wow-delay="400ms" role="button"><i className="fas fa-play" />
                            </span>
                            <h2>Watch Our Latest Videos For Better Innovative Business</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line-shape-one">
                <img src={line1} alt="" />
            </div>
            <div className="line-shape-two">
                <img src={line2} alt="" />
            </div>

            <ModalVideo channel="youtube" autoplay isOpen={openVideo} videoId="fEErySYqItI" onClose={() => setOpenVideo(false)} />
        </section>
    );
}

export default Video;