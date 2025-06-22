import Navbar from "../../components/Navbar"
import "./style.css";

const FAQPage = () => {
  return (
    <>
      <Navbar />
      <div className="gradio-container">
        <gradio-app src="https://amaurycodes-rc-chatbot.hf.space"></gradio-app>
      </div>
    </>
  )
}

export default FAQPage