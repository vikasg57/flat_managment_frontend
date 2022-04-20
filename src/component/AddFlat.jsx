import React, { useState, useEffect } from "react";


import { Link, useNavigate } from "react-router-dom";
export const AddFlat = () => {


  const data = useSelector((store) => store);

  useEffect(() => {
    if (data.Success) {
      alert("login success");

      navigate("/");
    }
  }, [data]);

  const [form, setform] = useState({
    first_name: "",
    password: "",
    email: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;

    setform({
      ...form,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    console.log("vikas");
  };
  return (
    <div className="form_div">
      <h2>ADD FLAT</h2>
      <form action="" onSubmit={handlesubmit}>
        <input
          className="input_tag form_input "
          type="text"
          onChange={handlechange}
          name="type"
          placeholder="enter type teanant/owner"
        />
        <br />
        <input
          className="input_tag form_input "
          type="email"
          name="block"
          onChange={handlechange}
          placeholder="enter block number"
        />
        <br />
        <input
          className="input_tag form_input "
          type="password"
          name="flat"
          onChange={handlechange}
          placeholder="enter flat number"
        />
        <br />
        <input
          className="input_tag form_input "
          type="password"
          name="image"
          onChange={handlechange}
          placeholder="enter image"
        />

        <br />
        <input
          type="submit"
          className="button-18"
          value="SUBMIT "
          name=""
          id=""
        />
      </form>
    </div>
  );
};
