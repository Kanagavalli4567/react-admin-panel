import { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";

function Products() {
  const {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
  } = useContext(AdminContext);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const openAdd = () => {
    setEditingProduct(null);

    setForm({
      name: "",
      category: "",
      price: "",
      stock: "",
    });

    setShowModal(true);
  };

  const openEdit = (product) => {
    setEditingProduct(product);

    setForm({
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
    });

    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingProduct) {
      updateProduct(editingProduct.id, form);
    } else {
      addProduct(form);
    }

    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this product?")) {
      deleteProduct(id);
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Products</h1>
          <p>Manage your products and inventory.</p>
        </div>

        <button className="primary-btn" onClick={openAdd}>
          + Add Product
        </button>
      </div>

      <div className="content-card">
        <div className="toolbar">
          <input
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                📦
              </div>

              <div className="product-content">
                <span className="category">
                  {product.category}
                </span>

                <h3>{product.name}</h3>

                <p className="price">
                  ₹{Number(product.price).toLocaleString()}
                </p>

                <p>
                  Stock:{" "}
                  <strong>{product.stock}</strong>
                </p>

                <div className="product-actions">
                  <button
                    className="edit-btn"
                    onClick={() => openEdit(product)}
                  >
                    ✏️ Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(product.id)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="empty-message">
            No products found.
          </p>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>
                {editingProduct
                  ? "Edit Product"
                  : "Add Product"}
              </h2>

              <button onClick={() => setShowModal(false)}>
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <label>Product Name</label>

              <input
                value={form.name}
                placeholder="Enter product name"
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                required
              />

              <label>Category</label>

              <input
                value={form.category}
                placeholder="Example: Electronics"
                onChange={(e) =>
                  setForm({
                    ...form,
                    category: e.target.value,
                  })
                }
                required
              />

              <label>Price</label>

              <input
                type="number"
                value={form.price}
                placeholder="Enter price"
                onChange={(e) =>
                  setForm({
                    ...form,
                    price: e.target.value,
                  })
                }
                required
              />

              <label>Stock</label>

              <input
                type="number"
                value={form.stock}
                placeholder="Enter stock"
                onChange={(e) =>
                  setForm({
                    ...form,
                    stock: e.target.value,
                  })
                }
                required
              />

              <button className="primary-btn">
                {editingProduct
                  ? "Update Product"
                  : "Add Product"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;