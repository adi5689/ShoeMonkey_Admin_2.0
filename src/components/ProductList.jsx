import React, { useState, useEffect } from "react";
import axios from "axios";
import { TbTrash } from "react-icons/tb";
import { RiEdit2Line } from "react-icons/ri";
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Empty from "../assets/empty-cart.jpg";
import Modal from "react-modal";
import api from "../api/api";




const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [productToDelete, setProductToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInfo = async () => {
      setShowLoader(true);  // Show loader when fetching data
      try {
        const response = await api.get("/allproducts");
        setAllProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setShowLoader(false); // Hide loader after fetching data
    };

    fetchInfo();
  }, []);

  const handleRemoveProduct = async (id) => {
    setProductToDelete(id); // Set the product ID to be deleted
    setIsModalOpen(true); 
  };

  const deleteProduct = async (id) => {
    setShowLoader(true); // Show loader when removing a product
    try {
      const response = await api.post("/removeproduct", {
        id,
      });
      if (response.data.success) {
        // Remove the product from the state
        setAllProducts(allProducts.filter((product) => product.id !== id));
        toast.success("Product removed successfully", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Zoom,
        });
      } else {
        toast.error("Error removing product", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Zoom,
        });
      }
    } catch (error) {
      console.error("Error removing product:", error);
    }
    setShowLoader(false);
    setIsModalOpen(false);
  }

  const handleEditProduct = (id) => {
    setShowLoader(true); // Show loader when navigating to edit product
    navigate(`/editproduct/${id}`);
    setShowLoader(false); // Hide loader after navigation
  };

  console.log(allProducts);

  return (
    <div className="text-white flex-col font-anta p-8 box-border bg-white/20 w-full md:max-w-[] lg:max-w-[100%] rounded-sm mt-4 lg:m-7">
      <h1 className="bold-22 font-anta text-center mb-5">PRODUCT LIST</h1>
      <div>
        {allProducts.length === 0 ? (
          <div className="flex flex-col justify-center items-center">
            <img src={Empty} className="rounded-full h-64" />
            <p className="font-anta text-white text-center mt-5">
              No Products to show
            </p>
          </div>
        ) : (
          <div className="max-h-[77vh] overflow-auto px-4 text-center">
            <table className="w-full mx-auto">
              <thead>
                <tr className="overflow-auto border-b-2 border-secondary">
                  <th className="p-2 uppercase">Products</th>
                  <th className="p-2 uppercase">Title</th>
                  <th className="p-2 uppercase">Old Price</th>
                  <th className="p-2 uppercase">New Price</th>
                  <th className="p-2 uppercase">Category</th>
                  <th className="p-2 uppercase">Remove/Edit</th>
                </tr>
              </thead>
              <tbody>
                {allProducts.map((product) => (
                  <tr key={product.id} className="border-b border-white/40 p-6 medium-14">
                    <td className="p-2">
                      <img src={product.images[0]} className="h-16 w-16" />
                    </td>
                    <td className="p-2">{product.name}</td>
                    <td className="p-2">&#8377;{product.old_price}</td>
                    <td className="p-2">&#8377;{product.new_price}</td>
                    <td className="p-2">{product.category}</td>
                    <td className="p-2 flex mt-6 gap-x-5 justify-center items-center">
                      <button
                        className="hover:text-secondary"
                        onClick={() => handleRemoveProduct(product.id)}
                      >
                        <TbTrash />
                      </button>
                      <button
                        className="hover:text-secondary"
                        onClick={() => handleEditProduct(product.id)}
                      >
                        <RiEdit2Line />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {showLoader && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="spinner"></div>
        </div>
      )}
      </div>

      <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      contentLabel="Delete Confirmation"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete this product?</p>
      <div className="flex gap-x-5 mt-3">
      <button onClick={() => setIsModalOpen(false)} className="btn_dark_rounded">Cancel</button>
      <button onClick={() => deleteProduct(productToDelete)} className="btn_dark_rounded hover:bg-red-600">Delete</button>
      </div>

    </Modal>
    </div>
  );
};

export default ProductList;
