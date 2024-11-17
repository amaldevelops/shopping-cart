function ShopItems() {
  let itemName = "Fake Item 1";
  let itemPrice = "$10";
  let itemDescription = "Awesome Item";
  let quantity = 2;
  return (
    <div>
      <h1>{itemName}</h1>
      <p>{itemPrice}</p>
      <p>{itemDescription}</p>

      {/* <label htmlFor="quantity">Quantity</label>
      <input type="number" id="quantity" name="quantity" value={quantity}>
        Quantity
      </input> */}
    </div>
  );
}

export default ShopItems;
