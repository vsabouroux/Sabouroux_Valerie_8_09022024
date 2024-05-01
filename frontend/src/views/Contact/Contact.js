
import Banner from "../../components/Banner/Banner";
import enteteImage from "../../assets/entete.webp";
import MyForm from "../../components/ContactForm/ContactForm";
import "./Contact.scss";


function Contact() {
  return (
    <div>
      <main>
        <Banner
          img={enteteImage}
          texte="Pour vous, des projets qui vous ressemblent"
        />
        <div className="Contact">
          <MyForm />
        </div>
      </main>
    </div>
  );
}
export default Contact;
