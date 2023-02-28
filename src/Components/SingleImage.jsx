import React from 'react';
import { Card } from 'react-bootstrap';
import { AiOutlineLike } from 'react-icons/ai'


const singleImage = ({ imageData, handleShow, setModalData }) => {

    const handleClickOnImage = (data) => {
        handleShow();
        setModalData(imageData)
    }
    console.log(imageData)
    return (
        <div className='p-0 col-md-4'>
            <Card className='m-2'>
                <Card.Img onClick={handleClickOnImage} variant="top" className='img-fluid' src={imageData?.urls.thumb} />
                <Card.Body className='d-flex justify-content-between align-items-center'>
                    <div className="d-flex align-items-center gap-2">
                        <div>
                            <img src={imageData?.user.profile_image?.small} className="rounded-circle" alt="" />
                        </div>
                        <div>
                            <p className="fw-bolder mb-0">
                                {imageData?.user?.name}

                            </p>
                            <span className="text-muted">
                                @{imageData?.user?.username}
                            </span>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className='me-1'>
                            <AiOutlineLike></AiOutlineLike>
                        </div>
                        <div>
                            {imageData?.likes}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );


};

export default singleImage;