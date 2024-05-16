import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import { ethers } from "ethers";
import { money } from "../assets";
import Custombuttom from "../components/Custom_Buttom";
import { checkIfImage } from "../utils";
import Formfield from "../components/Formfield";
import Loader from "../components/Loader";
import axios from "axios";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setform] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
    contact: "",
    proof: "",
    proofCampaign: "",
  });

  const handleFormfieldchange = (fieldName, e) => {
    setform({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    checkIfImage(form.image, async (exists) => {
      if (exists) {
        setisLoading(true);
        await createCampaign({
          ...form,
          target: ethers.utils.parseUnits(form.target, 18),
        });
        setisLoading(false);
        navigate("/");
        axios
          .post("http://localhost:8081/test", form)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      } else {
        alert("Provide valid image URL");
        setform({ ...form, image: "" });
      }
    });
  };

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4  ">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epologue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white ">
          Start a Campaign
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className=" w-full mt-[65px] flex flex-col gap-[30px] "
      >
        <div className="flex flex-wrap gap-[40px]">
          <Formfield
            LabelName="Your Name"
            placeholder="Gautam Jha"
            inputType="text"
            Value_={form.name}
            handleChange={(e) => handleFormfieldchange("name", e)}
          />
          <Formfield
            LabelName="Campaign Title"
            placeholder="Write Campaign Title"
            inputType="text"
            Value_={form.title}
            handleChange={(e) => handleFormfieldchange("title", e)}
          />
        </div>
        <Formfield
          LabelName="Story"
          placeholder="Write Your Story"
          isTextArea={true}
          Value_={form.description}
          handleChange={(e) => handleFormfieldchange("description", e)}
        />
        <div className=" w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px] ">
          <img
            src={money}
            alt="money"
            className=" w-[40px] h-[40px] object-contain "
          />
          <h4 className=" font-epil0gue font-bold text-white ml-[20px]  ">
            You will get 100% of the raised Money
          </h4>
        </div>
        <div className="flex flex-wrap gap-[40px]">
          <Formfield
            LabelName="Goal"
            placeholder="ETH 0.50"
            inputType="text"
            Value_={form.target}
            handleChange={(e) => handleFormfieldchange("target", e)}
          />
          <Formfield
            LabelName="End Date"
            placeholder="End Date"
            inputType="date"
            Value_={form.deadline}
            handleChange={(e) => handleFormfieldchange("deadline", e)}
          />
        </div>
        <Formfield
          LabelName="Campaign Image"
          placeholder="Place Image URL of your campaign "
          inputType="text"
          Value_={form.image}
          handleChange={(e) => handleFormfieldchange("image", e)}
        />
        <Formfield
          LabelName="Contact No"
          placeholder="Type your Number"
          inputType="number"
          Value_={form.contact}
          handleChange={(e) => handleFormfieldchange("contact", e)}
        />
        <Formfield
          LabelName="Identification Proof"
          placeholder="Place file URL of your identification proof "
          inputType="text"
          Value_={form.proof}
          handleChange={(e) => handleFormfieldchange("proof", e)}
        />
        <Formfield
          LabelName="Proof for Campaign"
          placeholder="Place file URL for Your Campaign Verification "
          inputType="text"
          Value_={form.proofCampaign}
          handleChange={(e) => handleFormfieldchange("proofCampaign", e)}
        />

        <div className=" flex justify-center items-center mt-[40px]  ">
          <Custombuttom
            btntype="submit"
            title="Submit new Campaign"
            styles="bg-[#1dc071]"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
