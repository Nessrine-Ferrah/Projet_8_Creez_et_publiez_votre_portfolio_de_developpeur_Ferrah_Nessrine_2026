import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button";

const ContactSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  sujet: z.string().min(2, "Le sujet est obligatoire"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

function ContactForm () {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const {register, handleSubmit, formState: { errors, isValid }, reset,} = useForm({
        resolver: zodResolver(ContactSchema),
        mode: "onChange", // validation en temps réel
    });

  // Fonction d’envoi EmailJS
  const sendEmail = (data) => {
    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess(true);
        reset();
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  return (
    <form
      onSubmit={handleSubmit(sendEmail)}
      className="flex flex-col gap-5 bg-background p-8 w-full rounded-lg"
    >
      {/* Nom et Email */}
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex flex-col sm:max-w-1/2 w-full">
          <label htmlFor="nom" className="text-sm font-semibold font-body text-heading">
            Nom
          </label>
          <input
            {...register("nom")}
            id="nom"
            placeholder="Votre nom"
            onFocus={() => setSuccess(false)} 
            className={`bg-surface h-[45px] px-3.5 py-3 border rounded-md mt-2 text-sm ${
              errors.nom ? "border-red-500" : "border-input-border"
            }`}
          />
          {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom.message}</p>}
        </div>

        <div className="flex flex-col sm:max-w-1/2 w-full">
          <label htmlFor="email" className="text-sm font-semibold font-body text-heading">
            E-mail
          </label>
          <input
            {...register("email")}
            id="email"
            placeholder="vous@exemple.fr"
            className={`bg-surface h-[45px] px-3.5 py-3 border rounded-md mt-2 text-sm ${
              errors.email ? "border-red-500" : "border-input-border"
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      {/* Sujet */}
      <div className="flex flex-col w-full">
        <label htmlFor="sujet" className="text-sm font-semibold font-body text-heading">
          Sujet
        </label>
        <input
          {...register("sujet")}
          id="sujet"
          placeholder="Objet de votre message"
          className={`bg-surface h-[45px] px-3.5 py-3 border rounded-md mt-2 text-sm ${
            errors.sujet ? "border-red-500" : "border-input-border"
          }`}
        />
        {errors.sujet && <p className="text-red-500 text-xs mt-1">{errors.sujet.message}</p>}
      </div>

      {/* Message */}
      <div className="flex flex-col w-full">
        <label htmlFor="message" className="text-sm font-semibold font-body text-heading">
          Message
        </label>
        <textarea
          {...register("message")}
          id="message"
          placeholder="Votre message..."
          className={`bg-surface px-3.5 py-3 border rounded-md mt-2 text-sm ${
            errors.message ? "border-red-500" : "border-input-border"
          }`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      {/* Bouton + messages */}
      <div className="flex gap-4 items-center">
        <Button
          icon={!loading && <Send size={16} />}
          variant="dark"
          size="md"
          type="submit"
          disabled={loading || !isValid}
        >
          {loading ? "Envoi..." : "Envoyer le message"}
        </Button>

        {success && <p className="text-strong text-sm sm:text-base">Votre message a bien été envoyé.</p>}
        {error && <p className="text-red-500 text-sm sm:text-base">Une erreur est survenue, veuillez réessayer.</p>}
      </div>
    </form>
  );
}

export default ContactForm;