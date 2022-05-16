// theme.js (you can call it whatever you want)
export const ButtonType = {
  primary: 'bg-cyan-500   shadow-cyan-500/50 hover:bg-cyan-700 ',
  secondary: 'bg-pink-500   shadow-pink-500/50 hover:bg-pink-700 ',
  basic:
    'bg-white  border border-slate-800  hover:bg-gray-700 hover:border-none hover:text-white text-gray-700 ',
  delete: 'bg-red-700  hover:bg-red-800  shadow-red-500/50 ',
  disabled:
    'bg-gray-500 shadow-gray-500/50 text-black cursor-not-allowed focus:outline-none disabled:opacity-75 disabled:hover:transform:none',
};

export const ButtonSize = {
  sm: 'py-2 px-4 text-xs',
  md: 'py-2 px-4 text-sm',
  lg: 'py-3 px-6 text-md',
};
