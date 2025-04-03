import './styles.css'
import Logo from '../../assets/images/logo.png'
const LoadingComponent = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-circle">
        <img src={Logo} alt="Loading" className="loading-image" />
      </div>
    </div>
  );
};

export default LoadingComponent;
