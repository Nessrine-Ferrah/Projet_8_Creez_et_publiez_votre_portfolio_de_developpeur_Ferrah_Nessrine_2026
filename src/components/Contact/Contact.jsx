import ContactForm from "./ContactForm"

function Contact () {
    return (
        <div id="contact" className="flex flex-col gap-12  lg:flex-row lg:justify-between lg:items-start lg:gap-12 bg-strong px-section-x py-section-y border-b border-section-border ">
            <div className="lg:max-w-[467px] w-full ">
                <p className="text-accent font-body text-body-xs font-semibold">05 · CONTACT</p>
                <h2 className="text-4xl sm:text-h2 text-surface font-bold font-heading mt-4 leading-none">Parlons de votre projet.</h2>
                <p className="max-w-md text-primary font-body text-body-base pt-5 leading-7">Une opportunité, une question ou simplement envie d'échanger ? Écrivez-moi ici.</p>
            </div>
            <ContactForm/>
        </div>
    )
}
export default Contact