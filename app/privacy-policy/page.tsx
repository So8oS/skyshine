import { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalList, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SkyShine collects, uses, and protects the personal information you share with us when you request a quote or browse our website.",
  alternates: {
    canonical: "https://www.skyshine.ae/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This Privacy Policy explains what information SkyShine collects when you visit our website or request a quote, how we use it, and the choices you have."
      lastUpdated="27 October 2026"
    >
      <LegalSection heading="1. Who we are">
        <p>
          SkyShine (&quot;SkyShine&quot;, &quot;we&quot;, &quot;us&quot; or
          &quot;our&quot;) provides drone-based cleaning and maintenance
          services for building facades, windows, roofs and solar panels in the
          United Arab Emirates. SkyShine is operated by DataBridge and is
          responsible for the personal information processed through
          www.skyshine.ae.
        </p>
        <p>
          If you have any questions about this policy, contact us at{" "}
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
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection heading="2. Information we collect">
        <p>
          <span className="text-white">Information you give us.</span> When you
          submit our &quot;Request a Quote&quot; form, we collect the details
          you enter:
        </p>
        <LegalList
          items={[
            "Company name",
            "Email address",
            "Phone number",
            "City",
            "Number of floors and facade material of the building",
            "Any additional details you choose to include",
          ]}
        />
        <p>
          We also collect whatever information you share with us directly by
          email, phone or through our social media profiles.
        </p>
        <p>
          <span className="text-white">Information collected
          automatically.</span> When you browse the website, our hosting and
          analytics providers record technical information such as the pages you
          visit, the date and time of your visit, the referring page, your
          approximate location derived from your IP address, and your device,
          browser and operating system type. We use this information in
          aggregate to understand how the site is used.
        </p>
        <p>
          We do not ask for and do not knowingly collect payment card details,
          identification documents or other sensitive personal data through this
          website.
        </p>
      </LegalSection>

      <LegalSection heading="3. How we use your information">
        <LegalList
          items={[
            "To prepare and send you a quote and to respond to your enquiries",
            "To contact you about a project, assessment, scheduling or follow-up",
            "To provide, operate and improve our services and this website",
            "To keep records of our business dealings and quotes issued",
            "To comply with applicable laws, regulations and lawful requests from authorities",
          ]}
        />
        <p>
          We do not sell your personal information, and we do not use the
          details you submit for advertising by third parties.
        </p>
      </LegalSection>

      <LegalSection heading="4. Our basis for processing">
        <p>
          We process your information because you have asked us to respond to
          your enquiry or provide a quote (your consent and the steps leading to
          a contract with you), because it is necessary for our legitimate
          business interests in operating and improving our services, or because
          we are required to do so by law. Where we rely on your consent, you may
          withdraw it at any time by contacting us.
        </p>
      </LegalSection>

      <LegalSection heading="5. Who we share information with">
        <p>
          We share personal information only as needed to run our business, and
          only with parties who are required to protect it:
        </p>
        <LegalList
          items={[
            "Service providers that host this website, deliver our form submissions by email and provide website analytics",
            "Our affiliates, employees and subcontractors who need the information to assess your building, prepare a quote or carry out the work",
            "Professional advisers, insurers and auditors where reasonably necessary",
            "Government, regulatory or law enforcement authorities where required by law, including aviation authorities in connection with flight approvals",
          ]}
        />
        <p>
          Some of these providers operate servers outside the United Arab
          Emirates, which means your information may be transferred to and
          processed in other countries. Where that happens we take reasonable
          steps to ensure the information remains protected to a standard
          consistent with this policy and applicable UAE data protection law.
        </p>
      </LegalSection>

      <LegalSection heading="6. Cookies and similar technologies">
        <p>
          This website does not use cookies for advertising or cross-site
          tracking. Our hosting and analytics providers may set limited cookies
          or use similar technologies that are necessary to serve the site
          securely and to measure traffic in aggregate. You can block or delete
          cookies through your browser settings; the website will continue to
          work, though some features may behave differently.
        </p>
      </LegalSection>

      <LegalSection heading="7. How long we keep your information">
        <p>
          We keep quote requests and related correspondence for as long as
          needed to deal with your enquiry and, where a project goes ahead, for
          as long as we are required to retain business records under UAE law.
          Analytics data is retained in aggregate form by our analytics
          provider. When information is no longer needed, we delete it or
          anonymise it.
        </p>
      </LegalSection>

      <LegalSection heading="8. Security">
        <p>
          We use reasonable technical and organisational measures to protect your
          information against loss, misuse and unauthorised access, including
          encrypted connections to this website and access controls on the
          mailboxes and systems that receive your enquiries. No method of
          transmission or storage is completely secure, so we cannot guarantee
          absolute security.
        </p>
      </LegalSection>

      <LegalSection heading="9. Your rights">
        <p>
          Subject to applicable law, including UAE Federal Decree-Law No. 45 of
          2021 on the Protection of Personal Data, you may ask us to:
        </p>
        <LegalList
          items={[
            "Confirm what personal information we hold about you and provide a copy of it",
            "Correct information that is inaccurate or incomplete",
            "Delete information we no longer need to keep",
            "Restrict or object to certain processing of your information",
            "Withdraw a consent you previously gave",
          ]}
        />
        <p>
          To make a request, email{" "}
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
          </Link>
          . We may need to verify your identity before acting on it, and we will
          respond within the time required by applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="10. Children">
        <p>
          Our services are offered to businesses and property owners. This
          website is not directed at children, and we do not knowingly collect
          personal information from anyone under 18. If you believe a child has
          provided us with information, contact us and we will delete it.
        </p>
      </LegalSection>

      <LegalSection heading="11. Links to other websites">
        <p>
          Our website links to third-party sites and social media profiles. We
          are not responsible for the privacy practices or content of those
          sites, and we encourage you to read their privacy policies.
        </p>
      </LegalSection>

      <LegalSection heading="12. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. The &quot;Last
          updated&quot; date above shows when the current version took effect,
          and any material change will be posted on this page.
        </p>
      </LegalSection>

      <LegalSection heading="13. Contact us">
        <p>
          SkyShine
          <br />
          Email:{" "}
          {/* <Link
            href="mailto:info@skyshine.ae"
            className="text-white hover:underline"
          >
            info@skyshine.ae
          </Link>{" "}
          or{" "} */}
          <Link
            href="mailto:info@databridge.ae"
            className="text-white hover:underline"
          >
            info@databridge.ae
          </Link>
          <br />
          Phone:{" "}
          <Link href="tel:800DATA" className="text-white hover:underline">
            800 DATA
          </Link>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
