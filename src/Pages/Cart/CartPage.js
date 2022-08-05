import React, { useContext } from "react";
import { Table, Button } from "react-bootstrap";
import { CartContext } from "../../App";
import { AiFillDelete } from "react-icons/ai";
import { IoIosAddCircle, IoMdRemoveCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  
  const navigate =useNavigate();

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
    localStorage.setItem("newCartItems", JSON.stringify(newCartItems));
    setCart(newCartItems);
    if (action === "remove") {
      let cartData = newCartItems;
      let DeleteItem = cartData.items.findIndex((del) => del.id === id);
      cartData.items.splice(DeleteItem, 1);
      console.log(cartData);
      localStorage.setItem("newCartItems", JSON.stringify(cartData));

      setCart(cartData);
    }
  };

  const AddtoCheckOut = () => {
    navigate("/checkout")
    
    
  };

  return (
    <div className="container ">
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
          {cart.items?.map((item, id) => (
            <tr key={id} >
              <td><img src={item.image} alt="" style={{width:"40px"}}/></td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <IoMdRemoveCircle
                  onClick={() => {
                    updateCart(item.id, "dec");
                  }}
                ></IoMdRemoveCircle>
                <span>{item.qty}</span>

                <IoIosAddCircle
                  onClick={() => {
                    updateCart(item.id, "inc");
                  }}
                ></IoIosAddCircle>
              </td>

              <td>
                {" "}
                <AiFillDelete
                  type="button"
                  onClick={() => updateCart(item.id, "remove")}
                ></AiFillDelete>
              </td>

              <td align="right">{(item.price * item.qty).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td>Sub Total</td>
            <td align="right" colSpan={6}>
              {subTotal}
            </td>
          </tr>
          <tr>
            <td>Discount</td>
            <td align="right" colSpan={6}>
              {discount}
            </td>
          </tr>
          <tr>
            <td>Grand Total</td>
            <td align="right" colSpan={6}>
              {grandTotal}
            </td>
          </tr>
        </tbody>
      </Table>
      <Button
        onClick={AddtoCheckOut}
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
