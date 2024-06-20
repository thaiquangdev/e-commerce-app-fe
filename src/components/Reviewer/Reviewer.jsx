import React from "react";
import { formatDate } from "../../utils/helpers";
import { icons } from "../../utils/icons";

const { FaStar } = icons;

const Reviewer = ({ data }) => {
  return (
    <div>
      {data?.map((item) => {
        return (
          <div className="flex items-center gap-4" key={item?._id}>
            <span className="rounded-full bg-primary-color text-white w-8 h-8 flex items-center justify-center">
              {item?.userId?.username?.toUpperCase().split("")[0]}
            </span>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span>{item?.userId?.username}</span>
                <span>-</span>
                <span>{formatDate(item?.createdAt)}</span>
              </div>

              <div className="pt-1 flex items-center gap-2">
                <div className="flex items-center">
                  {Array.from({ length: item?.rating }, (_, index) => {
                    return <FaStar color="orange" key={index} />;
                  })}
                </div>
                <span>{item?.comment}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviewer;
