import { useMemo, useState } from "react";

export const PrintNumber = () => {
  let [numeraco, setNumeraco] = useState(0);


  const numeroMemo = useMemo(() => {
    let numero = 0;
    for (let i = 0; i < 10; i++) {
      numero++;
    }
    console.log("operacion ejecutada")
    return numero;
  }, []);


    // let numero = 0;
    // for (let i = 0; i < 10000000000; i++) {
    //   numero++;
    // }


  const handleSumarClick = () => {
    setNumeraco(numeraco + 1);
  };

  return (
    <>
      <div>
        <hr />
        <h3>useMemo</h3>
        <button onClick={handleSumarClick}>sumar</button>
        <h3>{numeraco}</h3>
        <h5>{numeroMemo}</h5>
      </div>
    </>
  );
};

