// images
import shop from "../../../assets/shop/shop.jpeg";

// Components
import CardsBurguers from "../../../components/Commom/CardsBurguers";
const Shop = () => {
  return (
    <div>
      <h1
        style={{
          marginTop: 0,
        }}
      >
        Shop
      </h1>
      <CardsBurguers
        value="10,00"
        description="shop heineken"
        image={shop}
        title="Shop Heineken"
      />
    </div>
  );
};
export default Shop;
