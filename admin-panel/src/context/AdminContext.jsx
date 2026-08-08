import { createContext, useEffect, useState } from "react";

// Create Context
export const AdminContext = createContext();

function AdminContextProvider({ children }) {
  // -------------------------
  // USERS
  // -------------------------

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");

    return savedUsers
      ? JSON.parse(savedUsers)
      : [
          {
            id: 1,
            name: "Rahul Kumar",
            email: "rahul@gmail.com",
            role: "User",
            status: "Active",
          },
          {
            id: 2,
            name: "Priya Sharma",
            email: "priya@gmail.com",
            role: "Manager",
            status: "Active",
          },
          {
            id: 3,
            name: "Arun Kumar",
            email: "arun@gmail.com",
            role: "User",
            status: "Inactive",
          },
        ];
  });

  // -------------------------
  // PRODUCTS
  // -------------------------

  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");

    return savedProducts
      ? JSON.parse(savedProducts)
      : [
          {
            id: 1,
            name: "Laptop",
            category: "Electronics",
            price: 55000,
            stock: 20,
          },
          {
            id: 2,
            name: "Smart Phone",
            category: "Electronics",
            price: 25000,
            stock: 35,
          },
          {
            id: 3,
            name: "Headphones",
            category: "Accessories",
            price: 2500,
            stock: 50,
          },
          {
            id: 4,
            name: "Keyboard",
            category: "Accessories",
            price: 1500,
            stock: 15,
          },
        ];
  });

  // -------------------------
  // ORDERS
  // -------------------------

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");

    return savedOrders
      ? JSON.parse(savedOrders)
      : [
          {
            id: 1001,
            customer: "Rahul Kumar",
            date: "08 Aug 2026",
            amount: 55000,
            status: "Completed",
          },
          {
            id: 1002,
            customer: "Priya Sharma",
            date: "08 Aug 2026",
            amount: 25000,
            status: "Pending",
          },
          {
            id: 1003,
            customer: "Arun Kumar",
            date: "07 Aug 2026",
            amount: 2500,
            status: "Processing",
          },
        ];
  });

  // -------------------------
  // DARK MODE
  // -------------------------

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // -------------------------
  // SAVE DATA TO LOCAL STORAGE
  // -------------------------

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );
  }, [products]);

  useEffect(() => {
    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );
  }, [orders]);

  useEffect(() => {
    localStorage.setItem(
      "darkMode",
      darkMode
    );

    document.body.classList.toggle(
      "dark-mode",
      darkMode
    );
  }, [darkMode]);

  // ==================================================
  // USER FUNCTIONS
  // ==================================================

  // Add User
  const addUser = (newUser) => {
    const user = {
      id: Date.now(),
      ...newUser,
    };

    setUsers((previousUsers) => [
      ...previousUsers,
      user,
    ]);
  };

  // Update User
  const updateUser = (id, updatedUser) => {
    setUsers((previousUsers) =>
      previousUsers.map((user) =>
        user.id === id
          ? { ...user, ...updatedUser }
          : user
      )
    );
  };

  // Delete User
  const deleteUser = (id) => {
    setUsers((previousUsers) =>
      previousUsers.filter(
        (user) => user.id !== id
      )
    );
  };

  // ==================================================
  // PRODUCT FUNCTIONS
  // ==================================================

  // Add Product
  const addProduct = (newProduct) => {
    const product = {
      id: Date.now(),
      ...newProduct,
    };

    setProducts((previousProducts) => [
      ...previousProducts,
      product,
    ]);
  };

  // Update Product
  const updateProduct = (id, updatedProduct) => {
    setProducts((previousProducts) =>
      previousProducts.map((product) =>
        product.id === id
          ? { ...product, ...updatedProduct }
          : product
      )
    );
  };

  // Delete Product
  const deleteProduct = (id) => {
    setProducts((previousProducts) =>
      previousProducts.filter(
        (product) => product.id !== id
      )
    );
  };

  // ==================================================
  // ORDER FUNCTIONS
  // ==================================================

  // Update Order Status
  const updateOrderStatus = (id, newStatus) => {
    setOrders((previousOrders) =>
      previousOrders.map((order) =>
        order.id === id
          ? {
              ...order,
              status: newStatus,
            }
          : order
      )
    );
  };

  // ==================================================
  // PROVIDE DATA TO ALL COMPONENTS
  // ==================================================

  return (
    <AdminContext.Provider
      value={{
        users,
        products,
        orders,

        addUser,
        updateUser,
        deleteUser,

        addProduct,
        updateProduct,
        deleteProduct,

        updateOrderStatus,

        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export default AdminContextProvider;