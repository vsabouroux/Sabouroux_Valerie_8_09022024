import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import enteteImage from "../../assets/entete.webp";
import MyForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
// import "./Contact.scss";

function Contact() {
  return (
    <div>
      <Header />
      <main>
        <Banner
          img={enteteImage}
          texte="Pour vous, des projets qui vous ressemblent"
        />
        <div className="Contact">
          <MyForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Contact;
