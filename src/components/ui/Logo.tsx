const Logo = ({
  className = "block w-[80px] h-[16.699px]",
}: {
  className?: string;
}) => {
  return (
    <img src="/checkmate-logo.svg" className={className} alt="Checkmate Logo" />
  );
};

export default Logo;
