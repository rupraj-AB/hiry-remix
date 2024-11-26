const Button = ({
  variant = "primary",
  children,
  onClick,
  icon,
  iconPosition = "left",
  disabled = false,
  type = "button",
  fullWidth = false,
  ...props
}: any) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-full fs-500-16 transition-all duration-200 ";

  const variants = {
    primary: `${baseStyles} bg-blue-surface text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-300`,
    secondary: `${baseStyles} bg-white text-neutral-black border border-neutral-primary hover:bg-gray-50 active:bg-gray-100 disabled:bg-gray-50 disabled:text-gray-400`,
  };

  const renderContent = () => {
    return (
      <>
        {icon && iconPosition === "left" && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="ml-2">{icon}</span>
        )}
      </>
    );
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        focus:outline-none
      
        
        disabled:cursor-not-allowed
      `}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

export default Button;