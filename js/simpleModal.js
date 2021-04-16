/**
 * SimpleModal.js
 * @description "The simple javascrpit library for rendering modal windows"
 * @author "Михаил Хрусталев [Full stack web deveoper]"
 * @contacts "Telegram: @m_hrustalev"
 * @Git_repository "..."
 * @Github_profile "..."
 */

class SimpleModal {

   #modal;
   #targetBtn;

   constructor(data = "") {
      this.#modal = data.id;
      this.#targetBtn = `.open-modal[data-target="#${data.id}"]`;
      this.#init(data);
      this.#actionFactory();
   }

   /**
    * @description "The function of initialization"
    * @status "#Private"
    */

   #init(data) {
      try {
         if (this.#modal === null) {
            throw new Error("Modal not found")
         }
         this.#modal = document.getElementById(data.id);
         this.#targetBtn = document.querySelectorAll(this.#targetBtn);
      } catch (error) {
         console.warn(error);
      }
   }

   /**
    * @description "The function of events"
    * @status "#Private"
    */

   #actionFactory() {
      this.#modal.addEventListener("click", (e) => {
         if (e.target.closest("[data-close]")) {
            this.hide();
         }
         if (e.target.className === "modal-content") {
            this.hide();
         }
      });
      for (let i = 0; i < this.#targetBtn.length; i++) {
         this.#targetBtn[i].addEventListener("click", (e) => {
            this.show();
         });
      }
   }

   /**
    * @description "The function for show a modal window"
    * @status "#Public"
    */

   show() {
      try {
         if (this.#modal === null) {
            throw new Error("Modal not found")
         }
         const body = document.querySelector("body");
         const modals_container = document.querySelector(".modals_container")

         if (modals_container === null) {
            const m_c = document.createElement("div");
            m_c.classList.add("modals_container");
            m_c.appendChild(this.#modal);
            const theFirstChild = body.firstChild;
            body.insertBefore(m_c, theFirstChild);
         } else {
            modals_container.appendChild(this.#modal);
         }

         this.#modal.style = "display: block";
      } catch (error) {
         console.warn(error);
      }
   }

   /**
    * @description "The function for hide a modal window"
    * @status "#Public"
    */

   hide() {
      try {
         if (this.#modal === null) {
            throw new Error("Modal not found")
         }
         this.#modal.style = "display: none";
      } catch (error) {
         console.warn(error);
      }
   }

   /**
    * @description "Modal window getter"
    * @status "#Public"
    */

   getModal() {
      return this.#modal;
   }

   /**
    * @description "Modal window setter"
    * @status "#Public"
    */

   setModal(modal) {
      this.#modal = modal;
   }

}
