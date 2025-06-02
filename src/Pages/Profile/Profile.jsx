import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./Profile.css";
import { AppContext } from "../../context/AuthContext.jsx";

import axios from "axios";
import ModalForm from "../../components/Modal/Modal.jsx";
const Profile = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [show, setShow] = useState(false);
  const [productEditShow, setProductEditShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const user = AppContext()?.user;

  useEffect(() => {
    setProducts(user?.products);
  }, [user]);

  const handleDelete = async (id) => {
    const res = await axios.delete("/del-product", { params: { id } });
    if (res.status === 200) {
      window.location.reload();
    }
  };
  const handleEdit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    form.append("id", user?._id);
    const res = await axios.put("/edit", form);
    if (res.status === 200) {
      window.location.reload();
    }
  };
  // Jab image pe click ho, modal open karo
  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };

  // Modal close karne ke liye
  const closeModal = () => {
    setSelectedProduct(null);
  };

  if (!user) return <div className="loading">Loading profile...</div>;

  return (
    <>
      <div className="profile-container">
        <div className="profile-header">
          <img src={user.imgUrl} alt="Avatar" className="profile-avatar" />
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <button
              style={{
                width: "5rem",
                height: "2.5rem",
                borderRadius: "10px",
                backgroundColor: "black",
                color: "white",
              }}
              onClick={() => setEditShow(true)}
            >
              Edit
            </button>
          </div>
          <button className="add-product-btn" onClick={() => setShow(true)}>
            + Add Product
          </button>
        </div>

        <h3 className="section-title">Products</h3>
        <div className="product-list">
          {products.length === 0 ? (
            <p className="no-products">
              This user has not listed any products yet.
            </p>
          ) : (
            products.map((product) => (
              <div className="product-card" key={product?._id}>
                <img
                  src={product?.imgUrl}
                  alt={product?.name}
                  className="product-image"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleImageClick(product)}
                />
                <div className="product-details">
                  <h4>{product?.productName}</h4>
                  <p>{product?.description}</p>
                  <p>
                    <strong>Price:</strong> {product?.price}
                  </p>
                </div>
                <div className="product-actions">
                  <button
                    onClick={() => setProductEditShow(true)}
                    className="action-btn edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product?._id)}
                    className="action-btn delete-btn"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href = `/cart/${product?._id}`)
                    }
                    className="action-btn view-btn"
                  >
                    View More
                  </button>
                </div>
                <ModalForm
                  show={productEditShow}
                  onHide={() => setProductEditShow(false)}
                  edit={true}
                  defaults={product}
                />
              </div>
            ))
          )}
        </div>

        {/* Modal for image */}
        {selectedProduct && (
          <div className="modal-overlay" onClick={closeModal}>
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <img
              src={selectedProduct?.imgUrl}
              alt={selectedProduct?.productName}
              className="modal-image"
              onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
            />
          </div>
        )}
      </div>
      <>
        <ModalForm show={show} onHide={() => setShow(false)} />
        <Modal show={editShow} onHide={() => setEditShow(false)} centered>
          <Modal.Header
            style={{ backgroundColor: "black", color: "white" }}
            closeButton
          >
            <Modal.Title>Edit Your Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
            <Form onSubmit={handleEdit}>
              <Form.Group className="mb-3">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  defaultValue={user?.name}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Image:</Form.Label>
                <Form.Control type="file" name="image" />
              </Form.Group>
              <Modal.Footer>
                <Button
                  style={{ backgroundColor: "black", color: "white" }}
                  type="submit"
                >
                  Add
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </>
  );
};

export default Profile;
