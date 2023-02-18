import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  Button,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Label,
} from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";

export default function CartSummary() {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    toast.success(`${product.productName} sepetten silindi!`);
  };

  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          {cartItems.map((cartItem) => (
            <Dropdown.Item key={cartItem.product.id}>
              {cartItem.product.productName}
              <Label>{cartItem.quantity}</Label>
              <Button onClick={() => handleRemoveFromCart(cartItem.product)}>Sil</Button>
            </Dropdown.Item>
            
          ))}

          <DropdownDivider />
          <DropdownItem as={NavLink} to="/cart">
            Sepete git
          </DropdownItem>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
