import type { Metadata } from "next";
import { ContactPageForm } from "@/components/ContactPageForm";

export const metadata: Metadata = {
  title: "Contact | Adwolf",
  description: "Send Adwolf a brief or book a 20-minute call about AI video, animation, CGI or software.",
};

export default function ContactPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="wrap two-col">
          <div>
            <h1 className="huge cond" style={{ fontSize: "clamp(4.5rem,11vw,11rem)" }}>
              Got a brief?
            </h1>
            <p className="lede">
              Tell us what you&apos;re making. You&apos;ll hear back within one working day.
            </p>
            <ul className="contact-list">
              <li>
                <span>Email</span>
                <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>
              </li>
              <li>
                <span>Prefer to talk</span>
                <a href="https://calendly.com/your-link" target="_blank" rel="noopener">
                  Book a 20-minute call
                </a>
              </li>
              <li>
                <span>WhatsApp</span>
                <a href="https://wa.me/000000000000">Add your WhatsApp number</a>
              </li>
              <li>
                <span>Studio</span>
                <b style={{ fontSize: "1.35rem" }}>Karachi, Pakistan</b>
              </li>
            </ul>
          </div>
          <div className="form-panel">
            <ContactPageForm />
          </div>
        </div>
      </section>
    </main>
  );
}