import React from 'react';
import Skeleton from 'react-loading-skeleton';

const LoadingSkeleton = () => {
    return (
        <div className="skeelton-div pt-5">
        <div className="container">
          <div className="row">
            
            <div className="col-md-4">
            <Skeleton height="300px"></Skeleton>
            </div>
            <div className="col-md-4">
            <Skeleton height="300px"></Skeleton>
            </div>
            <div className="col-md-4">
            <Skeleton height="300px"></Skeleton>
            </div>
            <div className="col-md-4">
            <Skeleton height="300px"></Skeleton>
            </div>
            <div className="col-md-4">
            <Skeleton height="300px"></Skeleton>
            </div>
            <div className="col-md-4">
            <Skeleton height="300px"></Skeleton>
            </div>
          </div>
          
        </div>
    </div>
    );
};

export default LoadingSkeleton;