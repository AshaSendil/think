"use client"
import Carousel from "@/components/caurosel/caurosel";
import React from "react";
import FoodDetailedView from "./_components/fooddetailedView";
import Layout from "../Layout/_component/layout";
import Tabs from "./_components/tab";

export default function fooddetail(){
    return(
        <Layout>
        <FoodDetailedView/>
        <Tabs/>
        </Layout>
    )
}