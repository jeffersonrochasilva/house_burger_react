import { useSetRecoilState } from "recoil";

import { api } from "../../../utils/api";

// Components
import { CardsBurguers } from "../../../components/Commom/CardsBurguers";

// Store
import { values } from "../../../store/state";

const Hamburger = () => {
  const setSelectItem = useSetRecoilState(values);

  const getItem = (item: any) => {
    setSelectItem((val: any) => ({
      ...val,
      title: item.title,
      options: item.options,
      image: item.image,
      id: item.id,
      value: item.value,
    }));
  };

  const listItem = api.borger.map((item) => {
    return (
      <div key={item.id}>
        <CardsBurguers
          onpress={getItem}
          item={item}
          Ingredients="Pão australiano, 2 hamburguer 150 gr, bacon, cheddar, mussarela, molho..."
        />
      </div>
    );
  });

  return (
    <div>
      <h1>Hambúrguers</h1>
      <div>{listItem}</div>
    </div>
  );
};

export default Hamburger;
