"use client";
import React, { useRef, useState, ChangeEvent, DragEvent } from "react";
import { CustomHeader, Sidebar } from "@/components";
import { LocalFlorist } from "@mui/icons-material";
import Image from "next/image";

interface ImageData {
  name: string;
  url: string;
}

const Health = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isDragging, setIsDragging] = useState(false);
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
          />
        </div>
        <div className=" w-full h-[90%] lg:flex">
          <div className=" card lg:w-1/2 ">
            <div
              className="drag-area h-[150px] lg:h-[500px] "
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
            >
              {isDragging ? (
                <span className="select">Drop images here</span>
              ) : (
                <>
                  <span className="select">Upload an Image </span> or
                  <span className="select" role="button" onClick={selectFiles}>
                    {" "}
                    Browse
                  </span>
                </>
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
            <button type="button" onClick={selectFiles}>
              Upload
            </button>
          </div>
          <div className="w-full p-2 h-[500px] lg:w-1/2 mt-10">
            <div className="bg-[url('/svg.svg')] p-2 text-center h-full flex items-center justify-center flex-col">
              <h1 className="text-white font-body font-bold text-3xl mb-5">
                Plant life matters too
              </h1>
              <p className="text-white font-body">
                Walk your farm daily, checking fences, crops, and livestock for
                any signs of damage or distress. Early detection allows for
                timely intervention and prevents small issues from becoming
                major problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
