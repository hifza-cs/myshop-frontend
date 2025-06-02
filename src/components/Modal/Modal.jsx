import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { AppContext } from "../../context/AuthContext";
import axios from "axios";

const ModalForm = ({ show, onHide, edit = false, defaults = {} }) => {
  const user = AppContext()?.user;
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    try {
      if (edit === true) {
        const res = await axios.put(`/edit-product`, form, {
          params: { id: defaults._id },
        });
        if (res.status === 200) {
          window.location.reload();
        }
      } else {
        form.append("owner", user?._id);
        const res = await axios.post("/add-product", form);
        if (res.status === 200) {
          window.location.reload();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header
        style={{ backgroundColor: "black", color: "white" }}
        closeButton
      >
        <Modal.Title>{edit ? "Edit Product" : "Add Product"}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
        <Form onSubmit={handleAddProduct}>
          <Form.Group className="mb-3">
            <Form.Label>Product Name:</Form.Label>
            <Form.Control
              type="text"
              name="productName"
              defaultValue={defaults.productName}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              defaultValue={defaults.description}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price : </Form.Label>
            <Form.Control
              type="number"
              name="price"
              placeholder="12345"
              defaultValue={defaults.price}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Image:</Form.Label>
            <Form.Control type="file" name="image" />
          </Form.Group>
          <Modal.Footer>
            <Button
              style={{ backgroundColor: "white", color: "black" }}
              type="submit"
            >
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalForm;
