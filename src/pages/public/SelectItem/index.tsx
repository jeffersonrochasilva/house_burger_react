/* eslint-disable jsx-a11y/alt-text */

// Style
import {
  Itempage,
  Container,
  Image,
  Description,
  Textarea,
  Button,
} from "./style";

// State
import { useRecoilState } from "recoil";
import { values } from "../../../store/state";

const SelectItem = () => {
  const [value, setValue] = useRecoilState(values);

  const getItem = () => {
    const obj = {
      title: value?.title,
      options: value?.options,
      description: value?.description,
    };
    console.log("obj", obj);
  };

  return (
    <Itempage>
      <Container>
        <Image src={value?.image} />
        <h1>{value?.title}</h1>

        {value?.options.length ? (
          <span>
            {value?.options &&
              value?.options.map((item: any) => (
                <Description key={item.id}>
                  <span>{item.title}</span>
                  <input
                    value={item.id}
                    onChange={(event) => null}
                    type="checkbox"
                    color="red"
                  />
                </Description>
              ))}
          </span>
        ) : null}
      </Container>
      <Textarea
        placeholder="Digite sua observação"
        value={value?.description}
        onChange={(description) =>
          setValue((val: any) => ({ ...val, description }))
        }
      />
      <Button onClick={getItem}>ADICIONAR</Button>
    </Itempage>
  );
};
export default SelectItem;
