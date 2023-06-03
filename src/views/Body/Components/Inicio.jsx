// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import logo from "../../../assets/Logo.png";

const Inicio = () => {
  const navigate = useNavigate()

  useEffect(() => {
    function zoomOutLogo() {

      const logoElement = document.getElementById('logoZoom');

      let scale = 1;
      const scaleStep = 0.01;

      function animate() {
        scale -= scaleStep;
        logoElement.style.transform = `scale(${scale})`;

        if (scale <= 0) {
          logoElement.style.display = 'none';

          // Cambiar la ruta a '/home' después de un retraso de 2 segundos
          setTimeout(() => {
            navigate('/home')
          }, 0);

          return;
        }

        requestAnimationFrame(animate);
      }

      animate();
    }

    zoomOutLogo();
  }, [navigate]);

  return (
    <div>
      <img src={logo} alt="logo" className='m-auto w-2/5 h-2/5' id='logoZoom' />
    </div>
  );
};

export default Inicio;