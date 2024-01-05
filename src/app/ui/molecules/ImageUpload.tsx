"use client";

import Image from "next/image";
import { useState } from "react";

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex gap-x-4">
      <Image
        src={(imageUrl as string) || "/img/profile.webp"}
        width={50}
        height={50}
        alt="upload-image"
        className="h-12 w-h-12 rounded-full"
        placeholder="blur"
        blurDataURL="/img/profile.webp"
      />
      <div className="space-y-2 flex-1">
        <h2 className="text-base text-twikkl-main">Upload Profile Photo</h2>
        <div
          className="flex justify-center items-center gap-x-1 rounded-2xl bg-white border border-twikkl-inactive font-light h-40"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <>
            <input
              type="file"
              className="hidden"
              id="img-upload"
              onChange={handleUpload}
              accept="image/*"
            />
            <label
              htmlFor="img-upload"
              className="text-twikkl-primary cursor-pointer"
            >
              Click to upload
            </label>
          </>
          <p className="text-twikkl-inactive pointer-events-none">
            or drag and drop SVG, PNG or JPG. Max 5MB
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
