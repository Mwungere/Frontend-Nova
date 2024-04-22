"use client";
import React, { useRef, useState, ChangeEvent, DragEvent } from "react";
import { CustomHeader, Sidebar } from "@/components";
import { LocalFlorist, MoreVert } from "@mui/icons-material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import Image from "next/image";
import HealthNavbar from "./HealthNavbar";
import { HealthSlidesData } from "@/constants";

interface ImageData {
  name: string;
  url: string;
}

const Health = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  function selectFiles() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  function onFileSelect(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (!files) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function deleteImage(index: number) {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }

  function onDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  }
  function onDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }
  function onDragLeave(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
  }

  function handleSlideChange(index: number) {
    setCurrentSlide(index);
  }


  return (
    <div className=" w-screen h-screen flex">
      <div className=" w-1/4 h-screen">
        <Sidebar />
      </div>
      <div className=" w-3/4 flex flex-col">
        <div className=" w-full h-[10%]">
          <CustomHeader
            heading="Health"
            icon={<LocalFlorist color="success" />}
            menuIcon={<MoreVert color="success" />}
          />
        </div>
        <div className=" w-full h-[90%] flex flex-col bg-[#EDF2FA] p-2">
          <div className=" lg:w-[60%] lg:pl-10 lg:mt-10 lg:mb-16">
            <HealthNavbar />
          </div>
          <div className=" flex flex-col lg:flex-row lg:px-8">
            <div className=" card lg:w-[40%]">
              <div
                className="drag-area h-[170px] lg:h-[500px] "
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
              >
                {isDragging ? (
                  <span className="select">Drop images here</span>
                ) : (
                  <div
                    className=" flex flex-col items-center cursor-pointer"
                    onClick={selectFiles}
                  >
                    <span className="select opacity-25 mb-5">
                      <AddPhotoAlternateOutlinedIcon
                        sx={{
                          width: "100px",
                          height: "100px",
                          color: "#4C535F",
                        }}
                      />
                    </span>
                    <span className="select font-body" role="button">
                      {" "}
                      Upload an Image
                    </span>
                  </div>
                )}
                <input
                  name="file"
                  type="file"
                  className="file"
                  multiple
                  ref={fileInputRef}
                  onChange={onFileSelect}
                />
              </div>
              <div className="container">
                {images.map((image, index) => (
                  <div key={index} className="image">
                    <span className="delete" onClick={() => deleteImage(index)}>
                      &times;
                    </span>
                    <img src={image.url} alt={image.name} />
                  </div>
                ))}
              </div>
              <div className=" w-full flex">
                <div className=" flex-1 pr-2">
                  <button
                    type="button"
                    onClick={selectFiles}
                    className=" font-body"
                  >
                    Webcam
                  </button>
                </div>
                <div className=" flex-1">
                  <button
                    type="button"
                    onClick={selectFiles}
                    className=" font-body"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-[500px] lg:w-[60%] lg:h-[100%] lg:pl-8 mt-4 lg:mt-0 overflow-x-auto relative">
              <div className=" w-full h-full relative overflow-x-auto flex">
              {HealthSlidesData.map(
                  ({ title, description, imageUrl }, index) => {
                    const divStyle = {
                      backgroundImage: `url(${imageUrl})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    };

                    return (
                      <div
                        key={index}
                        className={`p-5 text-center flex flex-shrink-0 w-full h-full items-center justify-center flex-col rounded-lg ${
                          currentSlide === index ? "visible" : "hidden"
                        }`}
                        style={divStyle}
                      >
                        <h1 className="text-white font-body font-bold text-3xl mb-10">
                          {title}
                        </h1>
                        <p className="text-white font-body">{description}</p>
                      </div>
                    );
                  }
                )}
              </div>
              <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center">
                {HealthSlidesData.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full mx-1 cursor-pointer ${
                      currentSlide === index ? "bg-[#1F6115] w-10" : "bg-gray-300 w-2"
                    }`}
                    onClick={() => handleSlideChange(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
