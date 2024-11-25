
import React from "react";
import "~/helpers/textStyles.css";

type TextProps = {
  children: React.ReactNode;
  style?: string;
  className?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  [key: string]: any;
};

const Text: React.FC<TextProps> = ({
  children,
  style = "",
  className = "",
  textAlign = "text-left",
  variant = "p",
  ...props
}) => {
  const Tag = variant;

  return (
    <Tag className={`${style} ${className} ${textAlign}`} {...props}>
      {children}
    </Tag>
  );
};

export default Text;
