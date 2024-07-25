import React, { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";

export function SelectPicture({ setI }: { setI: any }) {
  const [images, setImages] = useState([]);
  const maxNumber = 4;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
    setI(imageList);
  };

  return (
    <div className="App">
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
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              type="button"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
              className="bg-green-500 text-white p-1 rounded-md"
            >
              click ou glisser une image
            </button>
            &nbsp;
            <button
              type="button"
              onClick={onImageRemoveAll}
              className="bg-black text-white p-1 rounded-md"
            >
              Effacer toute les images
            </button>
            {imageList.map((image, index) => (
              <div
                key={index}
                className="image-item w-full flex justify-start m-8"
              >
                <img
                  src={image["data_url"]}
                  alt=""
                  width="100"
                  height="100"
                  className="mr-2"
                />
                <div className="image-item__btn-wrapper">
                  <button
                    type="button"
                    onClick={() => onImageUpdate(index)}
                    className="mr-2 bg-gray-500 text-white p-1 rounded-md"
                  >
                    Mettre a jour
                  </button>
                  <button
                    type="button"
                    onClick={() => onImageRemove(index)}
                    className="mr-2 bg-red-600 text-white p-1 rounded-md"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
