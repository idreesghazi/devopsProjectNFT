import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo_no_bg_b.png";
import axios from 'axios';
import {
  Link,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
library.add(faBars);

import CartItem from "./CartItem";

import item1 from "../assets/1.png";
import item2 from "../assets/45.png";
import item3 from "../assets/47.png";

function Navbar({ cartItems, setCartItems }) {
  const [account, setAccount] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false); // State to track cart sidebar
  const [userEmail, setUserEmail] = useState('');

  // Fetch the user ID from localStorage when the component mounts
  useEffect(() => {
    const storedUserEmail = localStorage.getItem('userEmail');
    if (storedUserEmail) {
      setUserEmail(storedUserEmail);
    }
  }, []);

  // Function to handle the checkout process
  const handleCheckout = async () => {
    try {
      // Make a POST request to your backend API with the cart items and user ID
      const response = await axios.post('http://localhost:3001/api/checkout', {
        cartItems,
        userEmail
      });

      // Handle the response from the server (e.g., display a success message)
      console.log('Checkout successful:', response.data);
      setCartItems([]); // Clear the cart items state
      // Optionally, you can redirect the user to a confirmation page or perform other actions.
    } catch (error) {
      console.error('Checkout error:', error.response?.data || error.message);
      // Handle the error (e.g., display an error message to the user)
    }
  };

  const handleCartToggle = () => {
    setCartOpen(!isCartOpen); // Toggle the cart sidebar state
  };

  const handleDeleteCartItem = (itemId) => {
    // Use the filter method to remove the item with the specified itemId
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems); // Update the cart items state
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    library.add(fab);
    library.add(fas);
  }, []);

  return (
    <>
      {/* bg-[#fffbfa] */}
      <nav className="flex flex-row items-center justify-between gap-2 pt-3 overflow-hidden  lg:gap-4 lg:p-4 lg:pt-2 lg:flex-row flex-col-3 shadow-md">
        <div className="w-[15rem]">
          <img src={logo} alt="logo" className="flex w-52 p-1 mt-0 lg:-mt-2 cursor-pointer transition-all transform duration-100 hover:scale-110 hover:-rotate-6" />
        </div>
        <div className="hidden lg:flex items-start lg:-ml-44 justify-start px-2 py-1 space-x-1 text-black font-bold font-poppins rounded-full lg:space-x-6">
          <ul className="flex gap-2 text-xs lg:text-lg lg:gap-10 lg:self-center">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <h1 className="hover:text-[#69e2f2] transition-transform transform duration-300 hover:scale-110">
                  Home
                </h1>
              </Link>
            </li>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <h1 className="hover:text-[#69e2f2] transition-transform transform duration-300 hover:scale-110">
                  About
                </h1>
              </Link>
            </li>
            <li>
              <Link
                to="mint"
                spy={true}
                smooth={true}
                duration={500}
              >
                <h1 className="hover:text-[#69e2f2] transition-transform transform duration-300 hover:scale-110">
                  Mint
                </h1>
              </Link>
            </li>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <h1 className="hover:text-[#69e2f2] transition-transform transform duration-300 hover:scale-110">
                  Roadmap
                </h1>
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <button
            onClick={handleMobileMenuToggle}
            type="button"
            className="p-2"
          >
            <FontAwesomeIcon icon="bars" size="lg" />
          </button>
        </div>
        <div className="hidden lg:block">
        <button
            onClick={handleCartToggle}
        >
            <FontAwesomeIcon icon={["fas", "cart-shopping"]} className="float lg:p-2 p-1 text-3xl hover:text-[#FF9233]" />
        </button>
          {/* <CustomConnectButton /> */}

        </div>
        {
        isCartOpen && (
          <div className="fixed z-10 right-0 top-0 bg-[#d6ccf6] h-screen shadow-xl w-96 ">
            {/* Add your cart content here */}
            <div className="flex p-3 space-x-5">
              <button
              className=""
              onClick={handleCartToggle}
              >
                  <FontAwesomeIcon icon={["fas", "cart-shopping"]} className="float lg:p-2 p-1 text-3xl hover:text-[#FF9233]" />
              </button>
              <h1 className="font-poppins text-3xl font-bold">
                My Cart
              </h1>
            </div>
            {cartItems.length === 0 ? (
              <p className="font-poppins font-bold text-xl p-3">Your cart is empty.</p>
            ) : (
              <div className="p-2 max-h-[500px] overflow-y-auto">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onDelete={handleDeleteCartItem}
                  />
                ))}
              </div>
            )}
            {cartItems.length === 0 ? null : (
            <div className="flex items-center justify-center">
              <button
                onClick={handleCheckout} 
               className="mt-72 bg-blue-300 p-3 font-poppins font-bold text-2xl w-64 hover:scale-110 rounded-full shadow-xl transform transition-all duration-200">
                Checkout
              </button>
            </div>
            
            )}
          </div>
        )
      }
      </nav>
      {
        isMobileMenuOpen && (
          <div className="lg:hidden bg-white w-full p-4">
            <ul className="gap-10 text-md lg:text-lg lg:gap-10 font-poppins">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={handleMobileMenuToggle}
                >
                  <h1 className="hover:text-[#69e2f2] transition-transform transform duration-300 hover:scale-110">
                    Home
                  </h1>
                </Link>
              </li>
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={handleMobileMenuToggle}
                >
                  <h1 className="hover:text-[#69e2f2] transition-transform transform duration-300 hover:scale-110">
                    About
                  </h1>
                </Link>
              </li>
              <li>
                <Link
                  to="mint"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={handleMobileMenuToggle}
                >
                  <h1 className="hover:text-[#69e2f2] transition-transform transform duration-300 hover:scale-110">
                    Mint
                  </h1>
                </Link>
              </li>
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={handleMobileMenuToggle}
                >
                  <h1 className="hover:text-[#69e2f2] transition-transform transform duration-300 hover:scale-110">
                    Roadmap
                  </h1>
                </Link>
              </li>
            </ul>

            <div className="flex items-center justify-center">
              {/* <CustomConnectButton /> */}
            </div>
          </div>

        )
      }
    </>
  );
}

export default Navbar;
