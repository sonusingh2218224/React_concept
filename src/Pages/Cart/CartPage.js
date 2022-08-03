import React, { useContext, useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { CartContext } from "../../App";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import swal from "sweetalert2";
import Helper from "../../Helper";

function Cart() {
  const [products, SetProducts] = useState();

  const fetchData = () => {
    fetch(`${Helper.Environment.BASE_API_URL_ECOMMERCE}products`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        SetProducts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { cart, setCart } = useContext(CartContext, products);
  const list = products;

  const subTotal = cart.items
    ?.reduce((acc, el) => acc + el.price * el.qty, 0)
    .toFixed(2);
  const discount = ((15 / 100) * subTotal).toFixed(2);
  const grandTotal = (subTotal - discount).toFixed(2);

  // console.log(subTotal, discount, grandTotal);

  const updateCart = (id, action) => {
    const newCartItems = { ...cart };
    const index = newCartItems.items.findIndex((el) => el.id === id);
    if (action === "inc") newCartItems.items[index].qty++;
    else if (action === "dec") newCartItems.items[index].qty--;

    setCart(newCartItems);
  };

  const handleRemove = (id) => {
    const newList = list.filter((item) => item.id !== id);
     SetProducts(newList);
     
     
  };

  const createTransaction = () => {
    fetch
      .post(`${Helper.Environment.BASE_API_URL_ECOMMERCE}products`, {
        products: cart.items,
        subTotal,
        discount,
        grandTotal,
      })
      .then((res) => {
        if (res.status === 201) {
          swal.fire("Success", "Transaction successfull", "success");
        }
      })
      .catch((err) => {
        swal.fire("Oops", "something went wrong", "error");
      });
  };

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Action</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.items?.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <RemoveIcon
                  onClick={() => {
                    updateCart(item.id, "dec");
                  }}
                />
                <span>{item.qty}</span>
                <AddIcon
                  onClick={() => {
                    updateCart(item.id, "inc");
                  }}
                />
                <button type="button" id={item.id} onClick ={()=>handleRemove(item.id)} >
                  Remove
                </button>
              </td>
              <td align="right">{(item.price * item.qty).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td>Sub Total</td>
            <td align="right" colSpan={3}>
              {subTotal}
            </td>
          </tr>
          <tr>
            <td>Discount</td>
            <td align="right" colSpan={3}>
              {discount}
            </td>
          </tr>
          <tr>
            <td>Grand Total</td>
            <td align="right" colSpan={3}>
              {grandTotal}
            </td>
          </tr>
        </tbody>
      </Table>
      <Button
        onClick={createTransaction}
        className="m-2 "
        size="lg"
        disabled={cart.items.length === 0}
      >
        Place Order
      </Button>
    </div>
  );
}

export default Cart;
