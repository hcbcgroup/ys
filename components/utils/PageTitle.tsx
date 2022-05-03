import React from "react";

const PageTitle: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <React.Fragment>
      <h2 className="hero-title font-bold text-5xl lg:text-6xl 2xl:text-7xl text-center mb-4">
        {title}
      </h2>
      <p className="hero-secondary text-center lg:text-lg 2xl:text-xl">
        {description}
      </p>
    </React.Fragment>
  );
};

export default PageTitle;
