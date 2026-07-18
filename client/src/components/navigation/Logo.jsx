const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg rotate-3" />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-indigo-500 rounded-lg flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 3c1.03 0 2 .35 2.75.94L5.94 11.75A4.463 4.463 0 014.5 9c0-2.48 2.02-4.5 4.5-4.5zm0 9c-1.03 0-2-.35-2.75-.94l5.81-5.81c.59.75.94 1.72.94 2.75 0 2.48-2.02 4.5-4.5 4.5z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">Kizuna</span>
    </div>
  );
};

export default Logo;
