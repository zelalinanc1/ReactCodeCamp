import React from "react";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import Categories from "./Categories";
import Navi from "./Navi";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import { Route, Router, Routes } from "react-router-dom";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <GridRow>
          <GridColumn  width={4}>
            <Categories />
          </GridColumn>
          <GridColumn width={12}>
            <Routes>
            <Route exact path="/" element={<ProductList/>}/>
            <Route exact path="/products" element={<ProductList/>}/>
            <Route path="/products/:name" element={<ProductDetail/>}/>
            <Route  path="/cart" element={<CartDetail/>}/>
            </Routes>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
