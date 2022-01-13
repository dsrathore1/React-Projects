import React from 'react'
function Cards(props) {
    return (
        <>
        <div className="container">
                <div className="card">
                    <div className="card_img">
                        <img src={props.imgsrc} alt="#" />
                    </div>
                    <div className="card_details">
                        <div className="title">
                            <h2>{props.title}</h2>
                        </div>
                        <div className="sub_title">
                            <h3>{props.sname}</h3>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates impedit quis vel dolorum commodi illo harum nostrum tempore, deleniti 
                        </div>
                        <div className="button">
                            <a href={props.link}>
                                <button>Watch Now</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cards;