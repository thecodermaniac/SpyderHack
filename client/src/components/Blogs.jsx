import React from "react";
import BlogCards from "./BlogCards";
import TrendingCards from "./TrendingCards";

const Blogs = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="flex flex-col w-screen">
          <div className="flex flex-row">
            <div className="display inline-block">Latest</div>
            <div className="display inline-block">Top</div>
          </div>
          <BlogCards />
          <BlogCards />
          <BlogCards />
        </div>
        <div className="flex flex-col w-1/3">
          <div className="flex flex-row">
            <div className="display inline-block">Latest</div>
          </div>
          <TrendingCards />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
