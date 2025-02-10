import './styles.css'
const LoadingComponent = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-circle">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png" alt="Loading" className="loading-image" />
      </div>
    </div>
  );
};

export default LoadingComponent;
