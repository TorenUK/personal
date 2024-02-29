const NavigationContainer = ({ children }: any): React.ReactElement => {
  return (
    <div className='fixed top-0 left-0 h-16 w-full flex items-center bg-slate-500'>
      {children}
    </div>
  );
};

export default NavigationContainer;
