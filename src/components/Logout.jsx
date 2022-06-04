import React from 'react';
import { useNavigate } from "react-router-dom";
function LoginLayout() {
  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `newPath`; 
    navigate(path);
  }
  
  return (
     <div className="app flex-row align-items-center">
      <Container>
      ...          
          <Button color="primary" className="px-4"
            onClick={routeChange}
              >
              Login
            </Button>
      ...
       </Container>
    </div>
  );
  }
export default