import React from "react";
import "../Styles/reviews.css";
import Image1 from'../Assets/imggrp.jpg'
import Image2 from'../Assets/mathi.jpg'
import Image3 from '../Assets/sus.jpg'

function Reviews() {


    return (
        <div className="reviews">
            <h3 className="review-heading bg-dark text-white border-primary">REVIEWS</h3>
            <div className="row review-cards">
                <div className="col-4">
                    <div className="card">
                        <img src={Image1} alt="" />
                        <div className="card-body">
                            <h5 className="card-title text-center">My Review</h5>
                            <p className="card-text">very nice hotel . Lost myself while staying here.</p>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                    <img src={Image2} alt="" />
                        <div className="card-body">
                            <h5 className="card-title text-center">My Review</h5>
                            <p className="card-text">Me and my lover stayed and multiplied ourself </p>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                    <img src={Image3} alt="" />
                        <div className="card-body">
                            <h5 className="card-title text-center">My Review</h5>
                            <p className="card-text">Me and my student prasanna visited here during conference and had a very good stay experience.</p>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;