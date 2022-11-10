import React from "react";
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const AddServices = () => {
  useTitle("Add Services");
  const handleServicesAdd = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const img = form.img.value;
    const description = form.description.value;

    const services = {
      name,
      price,
      rating,
      img,
      description,
    };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          toast.success("New Service Added Successfully");
        }
      })
      .catch((error) => toast.error(`${error}`));
  };
  return (
    <div className="container mx-auto w-1/2 bg-sky-100 mt-10 rounded-lg shadow-xl">
      <form onSubmit={handleServicesAdd} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Service Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="text"
            name="rating"
            placeholder="Rating(1-5)"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            name="img"
            placeholder="Photo URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="textarea textarea-primary"
            name="description"
            placeholder="Description"
            required
          ></textarea>
        </div>

        <div className="form-control mt-6 w-24 mx-auto ">
          <input className="btn btn-primary" type="submit" value="Add New" />
        </div>
      </form>
    </div>
  );
};

export default AddServices;
