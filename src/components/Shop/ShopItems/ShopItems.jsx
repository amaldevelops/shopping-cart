import { useState, useEffect } from "react";

function ShopItems({ itemSearchTerm }) {
  const [itemInfo, setItemInfo] = useState({
    itemName: "Fake Item",
    itemImage: "",
    itemDescription: "Awesome Item",
    itemPrice: "$0",
    quantity: 0,
  });

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemSearchTerm}`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((json) => {
        setItemInfo({
          ...itemInfo,
          itemName: json.title,
          itemImage: json.image,
          itemDescription: json.description,
          itemPrice: json.price,
        });
        console.dir(json);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>{itemInfo.itemName}</h2>
      <img src={itemInfo.itemImage} alt="Item Image" width="200" height="150" />

      <p>{itemInfo.itemDescription}</p>
      <p>
        <span>Price: $</span>
        {itemInfo.itemPrice}
      </p>
      <label htmlFor="quantity">Quantity</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="0"
        max="10"
        value={itemInfo.quantity}
        onChange={(changeQuantity) =>
          setItemInfo({ ...itemInfo, quantity: changeQuantity.target.value })
        }
      />
    </div>
  );
}

export default ShopItems;
