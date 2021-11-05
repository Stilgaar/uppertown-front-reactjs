import { useState } from "react";
import ImageUploading from "react-images-uploading";
import "bootstrap/dist/css/bootstrap.min.css";

export function UploadPics() {
  let [images, setImages] = useState([]);
  const maxNumber = 5;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList,addUpdateIndex);
    
    setImages(imageList);
  };

  return (

    <div>

      <div>
       
       <div className="pictures" style={{alignContent:'center'}}><br/><br/>
          
            <h6>Ajoutez des photos à l'annonce</h6>

            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                <div>
                  <div>
                    <button
                      className="btn btn-primary"
                      style={isDragging ? { color: "red" } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Cliquez ou collez votre image ici
                    </button>
                    <br/><br/>

                  <button className="btn btn-danger" onClick={onImageRemoveAll}>Supprimez toutes les photos</button>
                  
                  </div>
                  {imageList.map((image, index) => (
                    <div key={index} className="col-lg-12">
                      <img src={image["data_url"]} />
                      <div className="image-item__btn-wrapper">
                        <button
                          className="btn btn-primary"
                          onClick={() => onImageUpdate(index)}
                        >
                          Modifier
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => onImageRemove(index)}
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading><br/><br/>

            <button className="btn btn-primary" onClick={() => uploadimages()}>
              Uploader les photos
            </button>

            

          </div>

      </div>
    </div>
  );
}

export default UploadPics;
