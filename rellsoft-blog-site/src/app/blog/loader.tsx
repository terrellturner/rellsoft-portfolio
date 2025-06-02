import React from "react";

const BlogLoader = () => {
  return (
    <div className="p-6 space-y-4 w-1/2">
      <div className="h-6 bg-gray-300 rounded animate-pulse w-1/2"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-40 bg-gray-200 rounded animate-pulse" />
        ))}
      </div>
    </div>
  );
};

export default BlogLoader;
