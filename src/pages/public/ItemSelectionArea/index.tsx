import { useSetRecoilState } from "recoil";
import { useLocation } from "react-router-dom";
import { api } from "../../../utils/api";

// Components
import { CardSelect } from "../../../components/Commom/CardSelect";

// Store
import { values } from "../../../store/state";

const ItemSelectionArea = () => {
  const setSelectItem = useSetRecoilState(values);
  const { search } = useLocation();

  const query = search?.split("=");

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
  //@ts-ignore
  const listItem = api[query[1]].map((item: any) => {
    return (
      <div key={item.id}>
        <CardSelect
          onpress={getItem}
          item={item}
          Ingredients="Pão australiano, 2 hamburguer 150 gr, bacon, cheddar, mussarela, molho..."
        />
      </div>
    );
  });

  return (
    <div>
      <div>{listItem}</div>
    </div>
  );
};

export default ItemSelectionArea;
