import Sliders from "@/components/slider/slider";

const items = [
  {
    title: "Delicious Pizza",
    description: "Try our mouthwatering pizza!",
    href: "/fooddetailview/pizza", // Specify the href for the pizza item
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
  },
  {
    title: "Fresh Sushi",
    description: "Explore our sushi selection.",
    href: "/fooddetailview/sushi", // Specify the href for the sushi item
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  // Add href for other items as needed
];

export default function FoodItem() {
  return (
    <div className="m-3 px-5">
      <h1 className="text-center font-bold">What's on your mind</h1>
      <Sliders items={items} />
    </div>
  );
}
