"use client"
import { Footer } from "@/components/footer/footer";
import Header from "@/components/header/header";
import Image from "next/image";
import FoodItem from "./foodItems/foodItem";
import { getSession } from "next-auth/react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import FoodDetailedView from "./fooddetailview/_components/fooddetailedView";
import Carousel from "@/components/caurosel/caurosel";
import Layout from "./Layout/_component/layout";

const images = [
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
];

function Home() {
  return (
    <Layout>
      <Carousel images={images} autoPlayInterval={3000} />
      <FoodItem />
    </Layout>
  );
}

export default Home;
