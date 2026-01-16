const withClickTracking = (WrappedComponent) => {
    return function EnhancedComponent(props) {
      const handleClick = () => {
        console.log("Click Tracked:", props.trackingInfo);
      };
  
      return <WrappedComponent {...props} onClick={handleClick} />;
    };
  };
  
  export default withClickTracking;
  