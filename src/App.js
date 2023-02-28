
import './App.css';
import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs'
import SingleImage from './Components/SingleImage'
import UserModalData from './Components/UserModalData';
import 'react-loading-skeleton/dist/skeleton.css'
import LoadingSkeleton from './Components/LoadingSkeleton';


function App() {
  const [photos, setPhotos] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [modalData, setModalData] = useState()
  const handleClose = () => setShow(false);
  const [reload, setReload] = useState(false);
  const [showLoading, setLoading] = useState(false)

  let storedPreviousData

  const hanldeSreach = (e) => {

    e.preventDefault()
  
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${e.target.value}&client_id=JboGhJvs7_2g-VEvl9RTIzrssI17f9WvGaaRu_2jmcw`)
      .then(res =>{
        return res.json()})
      .then(data => {
        if (!data?.results?.length > 0) {
          return;
        }

        storedPreviousData = photos
        setReload(!reload)
        setLoading(false)
        return setPhotos(data.results)
      })
      .catch(err => {
        setLoading(false)
        setPhotos(storedPreviousData)
        return console.log(err.message);
      })
  }
  useEffect(() => {
    setLoading(true)
    fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_ak}`)
      .then(res => res.json())
      .then(photosData => {
        setLoading(false)
        return setPhotos(photosData)
      })
      .catch(err => {
        setLoading(false)
        return console.log(err.message)
      })

  }, []);
  return (
    <div className="App">
      {!showLoading ? 
      <div className="container pt-5">
        <div className="row">
          <div className='d-flex justify-content-between'>
            <h1 className="fw-bolder">
              {photos?.length > 0 && photos.length} {photos?.length > 1 ? 'photos' : 'photo'}
            </h1>

            <div className="d-flex border rounded-5 px-4 align-items-center">
              <input onKeyUp={hanldeSreach} placeholder='Search your Photo' type="search" id="form1" className="py-2 no-outline border-0" />

              <BsSearch></BsSearch>
            </div>
          </div>
        </div>
        <div className="row pt-4">

          {photos?.length > 0 && photos?.map(singleImageData => <SingleImage setModalData={setModalData} handleShow={handleShow} imageData={singleImageData} key={singleImageData?.id}></SingleImage>)}

        </div>
      </div> : <LoadingSkeleton></LoadingSkeleton>}
      {modalData && <UserModalData modalData={modalData} show={show} handleClose={handleClose}></UserModalData>
      }

    </div>
  );
}

export default App;
