import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { AiFillTwitterSquare, AiOutlineLink } from 'react-icons/ai';
import { FiInstagram, AiOutlineLike, FiTwitter } from 'react-icons/fi';

const UserModalData = ({ show, handleClose, modalData }) => {
    
    return (
        <Modal

            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered

            show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                        <div className="d-flex align-items-center gap-2">
                            <div>
                                <img src={modalData?.user?.profile_image?.small} className="rounded-circle" alt="" />
                            </div>
                            <div>
                                <h1 className="fw-bolder mb-0">
                                    {modalData?.user?.name}

                                </h1>
                                <span className="text-muted">
                                    @{modalData?.user?.username}
                                </span>
                            </div>
                        </div>
                        <div className="bio_Data">
                         {modalData?.user?.bio && <>Bio:  {modalData?.user?.bio}</>}
                        </div>
                        <div className="d-flex gap-2 mt-2">
                           {modalData?.user?.social.instagram_username &&<a target="_blank" href={`https://instagram.com/${modalData?.user?.social.instagram_username}`}><FiInstagram></FiInstagram></a>} 
                            {modalData?.user?.social.twitter_username && <a target="_blank" href={`https://instagram.com/${modalData?.user?.social.twitter_username}`}><FiTwitter></FiTwitter></a>}
                           {modalData?.user?.social.portfolio_url && <a target="_blank" href={`https://instagram.com/${modalData?.user?.social.portfolio_url}`}><AiOutlineLink></AiOutlineLink></a>}
                            
                        </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               
                <img className='img-fluid' src={modalData?.urls?.full} alt="" />
                <h2 className="fw-bolder mt-3">
                    User Details
                </h2>
                <p className="fw-bolder mb-1">
                    First name: <span className="text-muted">{modalData?.user?.first_name}</span>
                </p>
                <p className="fw-bolder mb-1">
                    Last Name: <span className="text-muted">{modalData?.user?.last_name}</span>
                </p>
                <p className="fw-bolder mb-1">
                    Username: <span className="text-muted">@{modalData?.user?.username}</span>
                </p>
               {modalData?.location && <p className="fw-bolder mb-1">
                    Location: <span className="text-muted">@{modalData?.location}</span>
                </p>}

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>

            </Modal.Footer>
        </Modal>
    );
};

export default UserModalData;