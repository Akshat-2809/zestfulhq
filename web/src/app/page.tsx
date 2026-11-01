import { Footer } from "@/components/Footer";
import { Isnt } from "@/components/Isnt";
import { Join } from "@/components/Join";
import { Nav } from "@/components/Nav";
import { Poll } from "@/components/Poll";
import { Principles } from "@/components/Principles";
import { Return } from "@/components/Return";
import { Room } from "@/components/Room";
import { Story } from "@/components/Story";
import { COMPANY_LINKEDIN, CONTACT_EMAIL, FOUNDER_LINKEDIN, FOUNDER_NAME, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  email: CONTACT_EMAIL,
  description: SITE_DESCRIPTION,
  slogan: "A private space to process your thoughts.",
  foundingDate: "2024",
  sameAs: [COMPANY_LINKEDIN],
  founder: { "@type": "Person", name: FOUNDER_NAME, jobTitle: "Founder", sameAs: [FOUNDER_LINKEDIN] },
  address: { "@type": "PostalAddress", addressLocality: "Gurugram", addressCountry: "IN" },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Nav />
      <main>
        <Room />
        <Poll />
        <Isnt />
        <Return />
        <Principles />
        <Story />
        <Join />
      </main>
      <Footer />
    </>
  );
}
