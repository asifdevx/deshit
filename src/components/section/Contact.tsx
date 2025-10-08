import React, { useState } from "react";
import Input from "../ui/Input";
import AnimatedBorder from "../ui/moving-border";
import ContactMe from "../HelperCom/ContactMe";



const Contact = () => {
  const [inputData, setinputData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const { name, value } = e.target;

    setinputData((pre) => ({ ...pre, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      setResponseMessage("Form submitted successfully!");
      console.log(inputData);
    } catch (error: any) {
      console.error("Error submitting form", error);
      setResponseMessage("Failed to submit form");
    } finally {
      setLoading(false);
      setinputData({ email: "", name: "", phone: "", message: "" });
    }
  }

  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center justify-center gap-4 bg-black py-14 "
    >
      <h1 className="text-center text-[#EDE5DB] font-bold">LET'S CONNECT</h1>
      <div className="max-screen  flex flex-col md:flex-row items-center gap-10">
        {/* Input section  */}
        <div className="p-5 w-full md:w-1/2 bg-[#212025] flex flex-col justify-start items-center blue-glassmorphism">
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto p-4 space-y-4"
          >
            <Input
              placeholder="User Name"
              name="name"
              type=""
              value={inputData.name}
              handleChange={handleChange}
            />
            <Input
              placeholder="Email address"
              name="email"
              value={inputData.email}
              type="text"
              handleChange={handleChange}
              othercss="tracking-[2px]"
            />
            <Input
              placeholder="Phone"
              name="phone"
              type=""
              value={inputData.phone}
              handleChange={handleChange}
            />
            <textarea
              name="Please type your message here..."
              value={inputData.message}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-4 py-2 bg-[#27262B] text-white placeholder:text-[#8E8B8B] outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#27262B]"
            />
            <div className="w-full flex-center ">
              <AnimatedBorder
                title={loading ? "Sending..." : "Send message"}
                arrow="&rarr;"
                borderRadius="300px"
                type="submit"
              />
            </div>
          </form>
        </div>
        {/* contact section  */}
      <ContactMe/>
      </div>
    </section>
  );
};

export default Contact;
