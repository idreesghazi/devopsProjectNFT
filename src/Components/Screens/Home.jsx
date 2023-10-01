import { useState, useEffect } from "react";
import "../../App.css";
import Navbar from "../Navbar";
import Card from "../Card";
import img1 from "../../assets/Harrypotter.png";
import img2 from "../../assets/Heisenberg.png";
import img3 from "../../assets/Hippo.png";
import img4 from "../../assets/Wolverine2.png";
import img5 from "../../assets/1.png";
import img6 from "../../assets/45.png";
import img7 from "../../assets/47.png";
import img8 from "../../assets/60.png";
import img9 from "../../assets/Harrypotter.png";
import img10 from "../../assets/Heisenberg.png";
import img11 from "../../assets/Hippo.png";
import img12 from "../../assets/Wolverine2.png";
import img13 from "../../assets/1.png";
import img14 from "../../assets/45.png";
import img15 from "../../assets/47.png";
import img16 from "../../assets/60.png";

import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  const [index, setIndex] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const text = "TR1TON SHIELD EDITION";
  // Function to add items to the cart

  const addToCart = (item) => {
    console.log("Adding item to cart", item);
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };
  
  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 250); // Adjust the delay for typing speed

      // Clear timeout if the component is unmounted
      return () => clearTimeout(timer);
    }
  }, [index]);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 150); // Adjust the delay for typing speed

      // Clear timeout if the component is unmounted
      return () => clearTimeout(timer);
    }
  }, [index]);

  const cardsData = [
    {
      id: 0,
      image: img1,
      name: "Clan",
      minCost: "Free",
      maxSupply: 50,
    },
    {
      id: 1,
      image: img2,
      name: "Ted",
      minCost: "Free",
      maxSupply: 50,
    },
    {
      id: 2,
      image: img3,
      name: "Rooted",
      minCost: "Free",
      maxSupply: 50,
    },
    {
      id: 3,
      image: img4,
      name: "Leader",
      minCost: "Free",
      maxSupply: 50,
    },
    {
      id: 4,
      image: img5,
      name: "Breath",
      minCost: "Free",
      maxSupply: 50,
    },
    {
      id: 5,
      image: img6,
      name: "Grounded",
      minCost: "Free",
      maxSupply: 1,
    },
    {
      id: 6,
      image: img7,
      name: "Alive",
      minCost: "Free",
      maxSupply: 50,
    },
    {
      id: 7,
      image: img8,
      name: "Be Bold",
      minCost: "Free",
      maxSupply: 25,
    },
    {
      id: 8,
      image: img9,
      name: "Thunder",
      minCost: "Free",
      maxSupply: 25,
    },
    {
      id: 9,
      image: img10,
      name: "Royal Lion",
      minCost: "Free",
      maxSupply: 25,
    },
    {
      id: 10,
      image: img11,
      name: "Fight",
      minCost: "Free",
      maxSupply: 25,
    },
    {
      id: 11,
      image: img12,
      name: "Hell",
      minCost: "Free",
      maxSupply: 25,
    },
    {
      id: 12,
      image: img13,
      name: "Silence",
      minCost: "Free",
      maxSupply: 1,
    },
    {
      id: 13,
      image: img14,
      name: "Flame",
      minCost: "Free",
      maxSupply: 1,
    },
    {
      id: 14,
      image: img15,
      name: "Wing of Freedom",
      minCost: "Free",
      maxSupply: 20,
    },
    {
      id: 15,
      image: img16,
      name: "Sting",
      minCost: "Free",
      maxSupply: 10,
    },
  ];

  return (
    <div className="min-h-screen h-auto bg-[#FFFBFA]">
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <div
        id="home"
        className="flex flex-col items-center justify-center h-auto min-h-screen text-center border border-gray-200 bg-gradient"
      >
        <h1 className="text-6xl font-bold lg:text-9xl font-poppins">
          {text.substring(0, index)}
        </h1>
        <h1
          className="p-12 text-2xl font-semibold lg:text-4xl font-poppins"
          data-aos="fade-up"
          data-aos-delay={3000}
        >
          Minting Dreams, Making History!
        </h1>
      </div>
      <div
        id="mint"
        className="container grid grid-cols-1 mx-auto sm:grid-cols-4 lg:mt-10 "
      >
        {cardsData.map((card, index) => (
          <Card
            key={index}
            index={index}
            id={card.id}
            image={card.image}
            name={card.name}
            minCost={card.minCost}
            maxSupply={card.maxSupply}
            onMint={(item) => addToCart(item)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
