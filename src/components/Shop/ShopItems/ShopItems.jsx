import { useState, useEffect } from "react";
import styled from "styled-components";

const DivStyles = styled.div`
  border: 2px solid #bf4f74;
  margin: 2rem;
  padding: 2rem;
  background-color:#4fcfb3;
`;

function ShopItems({ itemSearchTerm }) {
  const [itemInfo, setItemInfo] = useState({
    itemName: "Item Name",
    itemImage: "",
    itemDescription: "Item Description",
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
      <DivStyles>
        <h2>{itemInfo.itemName}</h2>
        <img
          src={itemInfo.itemImage}
          alt="Item Image"
          width="200"
          height="150"
        />

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
      </DivStyles>
    </div>
  );
}

export default ShopItems;
