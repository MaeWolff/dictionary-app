import React from "react";

export default function LoadingWithThreeDots() {
  const dots = new Array(3);

  return (
    <div className="flex gap-2" role="status">
      {[...dots].map((_, index) => {
        return <Dot key={index} index={index} />;
      })}
    </div>
  );
}

const Dot = ({ index }: { index: number }) => {
  return (
    <div
      className="w-3 h-3 bg-violet-500 rounded-lg animate-loading-scale"
      style={{
        animationDelay: `${0.25 * index}s`,
      }}
    ></div>
  );
};
