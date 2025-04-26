import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="@container relative w-full min-h-screen body-background p-4 mx-auto max-w-[1400px]">
      {children}
    </div>
  );
};

export default Container;
