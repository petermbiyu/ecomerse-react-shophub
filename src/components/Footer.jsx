export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <span>&copy; {date} React Project</span>
    </div>
  );
};
