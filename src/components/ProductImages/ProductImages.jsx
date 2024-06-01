import React, { useState } from "react";

const ProductImages = ({ variants }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    variants && variants.length > 0 ? variants[0] : null
  );
  const [image, setImage] = useState(0);

  const selectVariant = (variant) => {
    setSelectedVariant(variant);
  };

  const nextImage = () => {
    if (image < selectedVariant?.images?.length - 1) {
      setImage(image + 1);
    } else {
      setImage(0);
    }
  };

  const prevImage = () => {
    if (image > 0) {
      setImage(image - 1);
    } else {
      setImage(selectedVariant?.images?.length - 1);
    }
  };

  const uniqueVariants = variants?.reduce((acc, curr) => {
    const found = acc.some((v) => v.color === curr.color);
    if (!found) acc.push(curr);
    return acc;
  }, []);
  return (
    <div>
      <div className="h-[500px] relative">
        <button onClick={prevImage}>Previous</button>
        <img
          src={selectedVariant?.images[image]}
          alt=""
          className="object-cover rounded-md"
          sizes="50vw"
        />
        <button onClick={nextImage}>Next</button>
      </div>
      <div className="flex justify-between gap-4">
        {uniqueVariants &&
          uniqueVariants?.map((item) => {
            return (
              <div className="w-1/4 h-32 relative gap-4 " key={item?._id}>
                <img
                  src={item?.thumb}
                  alt=""
                  className="object-cover rounded-md cursor-pointer w-[100px]"
                  onClick={() => selectVariant(item)}
                />
                <p className="text-center mt-3">{item?.color}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductImages;
