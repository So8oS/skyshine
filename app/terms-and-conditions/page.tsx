import { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalList, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that apply when you use the SkyShine website, request a quote, or engage our drone cleaning and building maintenance services.",
  alternates: {
    canonical: "https://www.skyshine.ae/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These Terms & Conditions govern your use of the SkyShine website and the quote requests you submit through it. Please read them before using the site or contacting us."
      lastUpdated="27 October 2026"
    >
      <LegalSection heading="1. Acceptance of these terms">
        <p>
          By accessing www.skyshine.ae or submitting a quote request, you agree
          to these Terms &amp; Conditions. If you do not agree with them, please
          do not use the website. &quot;SkyShine&quot;, &quot;we&quot;,
          &quot;us&quot; and &quot;our&quot; refer to SkyShine, operated by
          DataBridge in the United Arab Emirates. &quot;You&quot; refers to the
          person or organisation using the website or requesting a quote.
        </p>
      </LegalSection>

      <LegalSection heading="2. Use of the website">
        <p>
          You may use this website for lawful purposes connected with evaluating
          and requesting our services. You agree not to:
        </p>
        <LegalList
          items={[
            "Submit false, misleading or third-party information without authorisation",
            "Interfere with, overload or attempt to gain unauthorised access to the website or its underlying systems",
            "Copy, scrape, reproduce or redistribute the website's content, imagery, 3D models or videos without our written permission",
            "Use the website in any way that breaches applicable UAE law or the rights of others",
          ]}
        />
      </LegalSection>

      <LegalSection heading="3. Quote requests are not a binding contract">
        <p>
          Information on this website, including any indicative pricing,
          descriptions of our capabilities and results shown in our gallery, is
          provided for general information and does not constitute an offer.
          Submitting a quote request does not create a contract between us, and
          we may decline or qualify any request.
        </p>
        <p>
          Any quote we issue is based on the building details you provide, is
          valid for the period stated in the quote, and may be revised after a
          site assessment if the actual conditions differ from what was
          described. Work begins only once a quote, work order or service
          agreement has been accepted in writing by both parties.
        </p>
      </LegalSection>

      <LegalSection heading="4. Our services">
        <p>
          Where you engage us, the specific scope, schedule, price and payment
          terms are set out in the quote or service agreement for that project.
          If anything in those documents conflicts with these Terms, the quote
          or service agreement prevails for that project.
        </p>
      </LegalSection>

      <LegalSection heading="5. Your responsibilities as a client">
        <p>
          Drone operations depend on conditions at your site. Unless the quote
          says otherwise, you are responsible for:
        </p>
        <LegalList
          items={[
            "Providing accurate information about the building, its height, facade material and condition",
            "Holding the authority to instruct cleaning work on the property, or obtaining the owner's or building management's consent",
            "Obtaining any permissions required from the property owner, community management or local authorities for access and for work to take place",
            "Giving us safe access to take-off, landing and staging areas, and to water and power where the scope requires them",
            "Keeping the work area clear of people, vehicles and obstructions during operations, and notifying occupants to close windows where needed",
            "Telling us in advance of any hazards, fragile surfaces, prior damage or restrictions we should know about",
          ]}
        />
      </LegalSection>

      <LegalSection heading="6. Safety, weather and regulatory approvals">
        <p>
          All flights are carried out in accordance with applicable UAE
          regulations and the approvals required from the relevant civil
          aviation and local authorities. We may postpone, suspend or stop work
          without liability where wind, visibility, rain or other weather
          conditions make flying unsafe, where a required approval has not been
          granted or is withdrawn, where airspace restrictions apply, or where
          site conditions present a risk to people or property. Where this
          happens, we will work with you to reschedule at the earliest practical
          opportunity.
        </p>
      </LegalSection>

      <LegalSection heading="7. Pricing, invoicing and payment">
        <p>
          Prices are stated in UAE Dirhams and, unless noted otherwise, exclude
          VAT and any permit or third-party access charges. Invoices are payable
          within the period stated on the invoice. Additional work outside the
          agreed scope is quoted and agreed separately before it is carried out.
        </p>
      </LegalSection>

      <LegalSection heading="8. Cancellation and rescheduling">
        <p>
          If you need to cancel or reschedule confirmed work, let us know as
          early as possible. Cancellations made at short notice may incur
          charges for mobilisation, permits already obtained and crew time
          committed, as set out in the relevant quote or service agreement.
        </p>
      </LegalSection>

      <LegalSection heading="9. Intellectual property">
        <p>
          The website and its content, including text, graphics, logos, imagery,
          video, 3D models and software, are owned by SkyShine or our licensors
          and are protected by intellectual property laws. You may not use our
          name, logo or content without our prior written consent.
        </p>
        <p>
          We may capture photographs or video while carrying out work for
          quality, record and inspection purposes. If we would like to use that
          material to promote our services, we will seek your consent first
          unless the quote or service agreement already covers it.
        </p>
      </LegalSection>

      <LegalSection heading={'10. Website provided "as is"'}>
        <p>
          We aim to keep the website accurate and available, but we provide it on
          an &quot;as is&quot; and &quot;as available&quot; basis. We do not
          warrant that it will be uninterrupted or error-free, that the content
          is complete or current, or that results shown for past projects will be
          achieved on your building. Third-party links and embedded content are
          provided for convenience and are not under our control.
        </p>
      </LegalSection>

      <LegalSection heading="11. Limitation of liability">
        <p>
          To the fullest extent permitted by law, we are not liable for indirect,
          incidental, special or consequential loss, or for loss of profit,
          revenue, business or data, arising from your use of this website. Our
          total liability arising out of or in connection with your use of the
          website is limited to AED 1,000.
        </p>
        <p>
          Our liability in respect of services we actually perform for you is
          governed by the quote or service agreement for that project, and
          nothing in these Terms limits liability that cannot be limited under
          UAE law.
        </p>
      </LegalSection>

      <LegalSection heading="12. Indemnity">
        <p>
          You agree to indemnify us against claims, losses and expenses arising
          from your breach of these Terms, from information you submit that you
          were not authorised to provide, or from your failure to obtain a
          permission or consent that these Terms place on you.
        </p>
      </LegalSection>

      <LegalSection heading="13. Privacy">
        <p>
          Information you submit through this website is handled in accordance
          with our{" "}
          <Link
            href="/privacy-policy"
            className="text-white hover:underline"
          >
            Privacy Policy
          </Link>
          , which forms part of these Terms.
        </p>
      </LegalSection>

      <LegalSection heading="14. Changes to the website and these terms">
        <p>
          We may change, suspend or discontinue parts of the website, and we may
          update these Terms from time to time. The &quot;Last updated&quot; date
          above shows when the current version took effect. Continued use of the
          website after a change means you accept the updated Terms.
        </p>
      </LegalSection>

      <LegalSection heading="15. Governing law and jurisdiction">
        <p>
          These Terms are governed by the laws of the United Arab Emirates as
          applied in the Emirate of Dubai. The courts of Dubai have exclusive
          jurisdiction over any dispute arising out of or in connection with
          these Terms, without prejudice to any dispute resolution mechanism
          agreed in a project-specific service agreement.
        </p>
      </LegalSection>

      <LegalSection heading="16. General">
        <p>
          If any provision of these Terms is found unenforceable, the remaining
          provisions continue in effect. Our failure to enforce a provision is
          not a waiver of it. These Terms, together with any quote or service
          agreement, represent the entire agreement between us in relation to
          your use of this website.
        </p>
      </LegalSection>

      <LegalSection heading="17. Contact">
        <p>
          Questions about these Terms can be sent to{" "}
          {/* <Link
            href="mailto:info@skyshine.ae"
            className="text-white hover:underline"
          >
            info@skyshine.ae
          </Link> */}
          <Link
            href="mailto:info@databridge.ae"
            className="text-white hover:underline"
          >
            info@databridge.ae
          </Link>{" "}
          or{" "}
          <Link href="tel:800DATA" className="text-white hover:underline">
            800 DATA
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
