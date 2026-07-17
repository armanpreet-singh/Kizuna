import { ThemeProvider } from "../providers/ThemeProvider";

const PublicLayout = ({ children }) => {
  return (
    <ThemeProvider>
  
      <div className="min-h-screen bg-surface-bg text-typography-primary font-sans transition-colors duration-300 ease-in-out antialiased">
        <main>{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default PublicLayout;
