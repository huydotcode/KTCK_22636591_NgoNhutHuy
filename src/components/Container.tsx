import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="relative w-full min-h-screen body-background p-4">
      {children}
    </div>
  );
};

export default Container;
