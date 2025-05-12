const ProgressBar = () => {
  return (
    <div className="w-full bg-gray-200 h-4 rounded-full">
      <progress
        value={50}
        max={100}
        className="w-full h-full appearance-none rounded-full"
        style={{ backgroundColor: 'transparent', color: '#f59e0b' }}
      >
        50%
      </progress>
    </div>
  );
};

export default ProgressBar;
