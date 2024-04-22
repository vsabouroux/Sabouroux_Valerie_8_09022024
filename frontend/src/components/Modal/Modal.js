import React from "react";
import "./Modal.scss";

function Modal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Mentions légales</h2>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-content">
          <p>Informations relatives à l'application de l'article 6 III de la loi 2004-275 pour la Confiance dans l'Economie Numérique
Valérie Sabouroux
1, place Louis XIV 14610 THAON
Téléphone : +33 (0)2 31 91 61 05
Directeur de la publication : Valérie Sabouroux 

Hébergement :
Administration, gestion et maintenance de l'hébergement: XXXX

Conception & réalisation, webmaster : Valérie Sabouroux

Propriété intellectuelle : les éléments figurant au sein du présent site, tels que sons, images, photographies, vidéos, écrits, animations, programmes, charte graphique, utilitaires, bases de données, logiciel, sont protégés par les dispositions du Code de la propriété intellectuelle et appartiennent à Valérie Sabouroux.

L'utilisateur s'interdit de porter atteinte aux droits de propriété intellectuelle afférents à ces éléments et notamment de les reproduire, représenter, modifier, adapter, traduire, d'en extraire et/ou réutiliser une partie qualitativement ou quantitativement substantielle, à l'exclusion des actes nécessaires à leur usage normal et conforme.

Cookies
Qu’est-ce qu’un cookie ?
Un cookie est un petit fichier texte déposé sur votre ordinateur lors de la visite d'un site ou de la consultation d'une publicité. Ils ont notamment pour but de collecter des informations relatives à votre navigation sur les sites et de vous adresser des services personnalisés. Dans votre ordinateur les cookies sont gérés par votre navigateur internet.

Vous pouvez à tout moment modifier les paramètres de votre navigateur afin d'accepter ou de refuser les cookies
Votre navigateur peut également être paramétré pour vous signaler les cookies qui sont déposés dans votre ordinateur et vous demander de les accepter ou non. Vous pouvez accepter ou refuser les cookies au cas par cas ou bien les refuser systématiquement une fois pour toutes.
Nous vous rappelons que le paramétrage est susceptible de modifier vos conditions d'accès à nos services nécessitant l'utilisation de cookies.

Données personnelles : l'utilisateur du présent site est informé que, lors de sa navigation sur le site www.laformationtoutaulongdelavie.fr, des données à caractère personnel le concernant sont collectées et traitées.

L'utilisateur du site est informé que ses données :
- sont collectées de manière loyale et licite,
- sont collectées pour des finalités déterminées, explicites et légitimes,
- ne seront pas traitées ultérieurement de manière incompatible avec ces finalités,
- sont adéquates, pertinentes et non excessives au regard des finalités pour lesquelles elles sont collectées et de leurs traitements ultérieurs,
- sont exactes et complètes,
- sont conservées sous une forme permettant l'identification des personnes concernées pendant une durée qui n'excède pas la durée nécessaire aux finalités pour lesquelles elles sont collectées et traitées.</p>      
        </div>
      </div>
    </div>
  );
}

export default Modal;