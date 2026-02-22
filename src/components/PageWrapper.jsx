const PageWrapper = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-lg 
                      rounded-3xl shadow-2xl p-10 border border-yellow-200">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
