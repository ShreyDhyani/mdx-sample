import React from "react";

const CodePreview: React.FC<any> = ({ children }) => {
  console.log("TypeScript Child is>>", children[0]);
  console.log("Bash Child is>>", children[1]);

  return <div>{children}</div>;
};

export default CodePreview;
