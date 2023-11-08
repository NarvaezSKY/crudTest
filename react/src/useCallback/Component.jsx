import React, { useCallback } from "react";

const Button = ({ onClick }) => {
  console.log("Button renderizado");
  return <button onClick={onClick}>Haz clic</button>;
};

export const Callback = () => {
  const handleClick = useCallback(() => {
    console.log("Botón clicado");
  }, [Callback]);

  return (
    <div>
      <h1>Ejemplo de useCallback</h1>
      <Button onClick={handleClick} />
    </div>
  );
};

