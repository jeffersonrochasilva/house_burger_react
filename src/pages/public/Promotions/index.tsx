/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRecoilState } from "recoil";
import { countState } from "../../../store/state";

const Promotions = () => {
  const [shoppingCart, setShoppingCart] = useRecoilState(countState);

  const increment = () => {
    setShoppingCart(shoppingCart);
  };

  return (
    <div>
      <h1>Promocoes</h1>
      {/* <p>Contagem: {shoppingCart}</p> */}
      <button onClick={increment}>Incrementar</button>
    </div>
  );
};

export default Promotions;
