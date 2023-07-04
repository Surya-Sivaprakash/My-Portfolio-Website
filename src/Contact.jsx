import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, message };
    // Send the form data to the server or perform other actions
    // You can add your logic here
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    }).then(() => {});

    console.log({ name, email, message });
    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="mt-52">
      <div className="mx-auto text-center opacity-25 mb-16">
        <div className="text-white text-[4.5rem]">Contact</div>
      </div>
      <div className="flex justify-center items-center p-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-#121212 p-6 rounded shadow-md "
        >
          {/* <h2 className="text-2xl text-white font-bold mb-4">Contact Us</h2> */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-white text-2xl mb-2">
              Name*
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[39rem] ss:w-[20rem] p-2 border text-white text-xl bg-[#121212] rounded mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-2xl mb-1 mt-7"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[39rem] ss:w-[20rem] p-2 border text-white text-xl bg-[#121212] rounded mt-5"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-white text-2xl mb-2 mt-7"
            >
              Message*
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-[39rem] ss:w-[20rem] p-2 border text-white text-xl bg-[#121212] rounded mt-5"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="py-2 px-4 bg-white text-black font-semibold rounded hover:bg-black hover:text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
