import React from 'react'
import { NavLink } from 'react-router-dom';
import {Dropdown, DropdownDivider, DropdownItem} from "semantic-ui-react";

export default function CartSummary() {
  return (
    <div>
     <Dropdown item text="Sepetiniz">
              <Dropdown.Menu>
                <Dropdown.Item>Laptop1</Dropdown.Item>
                <Dropdown.Item>Laptop2</Dropdown.Item>
                <Dropdown.Item>Laptop3</Dropdown.Item>
                <DropdownDivider/>
                <DropdownItem as={NavLink} to = "/cart">Sepete git</DropdownItem>
              </Dropdown.Menu>
            </Dropdown>
    </div>
  )
}

