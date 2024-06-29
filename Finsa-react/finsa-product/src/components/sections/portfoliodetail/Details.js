import React from 'react'

import thumb from '../../../assets/img/details/project-big-img.jpg'

import img1 from '../../../assets/img/details/project-01.jpg'
import img2 from '../../../assets/img/details/project-02.jpg'
import img3 from '../../../assets/img/details/project-03.jpg'

const imagegallery = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
]

function Details(props) {
    return (
        <section className="project-details section-gap">
            <div className="container">
                <div className="project-thumb">
                    <img src={thumb} alt="" />
                </div>
                <div className="project-content mt-60">
                    <div className="row">
                        <div className="col-lg-8 order-2 order-lg-2">
                            <div className="content">
                                <h2>Business Strategy</h2>
                                <p className="mb-40">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                                    amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                                    nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                    consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                                    nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu
                                </p>
                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                    velit, sed quia numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                                    quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                                    suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                                    reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2">
                            <div className="details">
                                <ul>
                                    <li>
                                        <h3>Project Name</h3>
                                        <p>Business Strategy</p>
                                    </li>
                                    <li>
                                        <h3>Clients Name</h3>
                                        <p>Logan Parkinson</p>
                                    </li>
                                    <li>
                                        <h3>Project Date</h3>
                                        <p>25 Aug 2020</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 order-3">
                            <div className="thumbs">
                                <div className="row justify-content-center">
                                    {imagegallery.map((item, i) => (
                                        <div key={i} className="col-md-4 col-sm-6 text-center">
                                            <img src={item.img} alt="" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 order-4">
                            <div className="content">
                                <p>
                                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                                    pain was born and I will give you a complete account of the system, and expound the
                                    actual teachings of the great explorer of the truth, the master-builder of human
                                    happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,
                                    but because those who do not know how to pursue pleasure rationally encounter
                                    consequences that are extremely painful. Nor again is there anyone who loves or pursues
                                    or desires to obtain pain of itself, because it is pain, but because occasionally
                                    circumstances occur in which toil and pain can procure him some great pleasure. To take
                                    a trivial example, which of us ever undertakes laborious physical exercise, except to
                                    obtain some advantage from it? But who has any right to find fault with a man who
                                    chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain
                                    that produces no resultant pleasure
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Details;