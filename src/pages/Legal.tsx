import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const Legal = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Legal Information
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-3xl">
            Privacy Policy and Disclaimer for StorageBlue Growth Fund, LP
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Privacy Policy */}
          <Card className="mb-12" id="privacy">
            <CardContent className="p-8">
              <h2 className="text-3xl font-heading font-bold mb-6">Privacy Policy</h2>
              
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h3>
                  <p className="mb-3">
                    StorageBlue, LLC ("we," "us," or "our") collects information that you provide directly to us when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Request access to the investor portal</li>
                    <li>Submit an investor questionnaire</li>
                    <li>Create an account or log in</li>
                    <li>Contact us via email or other communication channels</li>
                    <li>Participate in any offering or investment opportunity</li>
                  </ul>
                  <p className="mt-3">
                    The information we collect may include your name, email address, phone number, company information, 
                    investment history, financial qualifications, accreditation status, and any other information you choose to provide.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h3>
                  <p className="mb-3">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Verify your accredited investor status and qualifications</li>
                    <li>Provide you with information about investment opportunities</li>
                    <li>Process and manage your investments</li>
                    <li>Communicate with you about our services and offerings</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Maintain the security and integrity of our platform</li>
                    <li>Improve our services and user experience</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3. Information Sharing and Disclosure</h3>
                  <p className="mb-3">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service providers who assist us in operating our business and serving our investors</li>
                    <li>Legal and financial advisors in connection with investment transactions</li>
                    <li>Regulatory authorities and government agencies as required by law</li>
                    <li>Third parties in connection with a merger, acquisition, or sale of assets, with your consent</li>
                  </ul>
                  <p className="mt-3">
                    All third parties with whom we share information are required to maintain the confidentiality and 
                    security of your information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">4. Data Security</h3>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                    over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">5. Data Retention</h3>
                  <p>
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this 
                    Privacy Policy, unless a longer retention period is required or permitted by law. This includes 
                    maintaining records for regulatory compliance and legal purposes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">6. Your Rights</h3>
                  <p className="mb-3">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access and receive a copy of your personal information</li>
                    <li>Request correction of inaccurate or incomplete information</li>
                    <li>Request deletion of your information, subject to legal and regulatory requirements</li>
                    <li>Object to or restrict certain processing of your information</li>
                    <li>Withdraw consent where processing is based on consent</li>
                  </ul>
                  <p className="mt-3">
                    To exercise these rights, please contact us at Investors@Storagebluecapital.com.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">7. Cookies and Tracking Technologies</h3>
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience on our platform, 
                    analyze usage patterns, and improve our services. You can control cookies through your browser settings, 
                    though this may affect the functionality of certain features.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">8. Changes to This Privacy Policy</h3>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by 
                    posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use 
                    of our services after any changes indicates your acceptance of the updated policy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">9. Contact Information</h3>
                  <p>
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                  </p>
                  <p className="mt-3">
                    <strong>StorageBlue, LLC</strong><br />
                    New Jersey<br />
                    Email: Investors@Storagebluecapital.com
                  </p>
                </div>

                <p className="text-sm italic pt-4 border-t border-border">
                  Last Updated: January 2025
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card id="disclaimer">
            <CardContent className="p-8">
              <h2 className="text-3xl font-heading font-bold mb-6">Disclaimer</h2>
              
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Important Investment Disclosure</h3>
                  <p className="font-semibold text-foreground">
                    THIS IS NOT AN OFFER TO SELL OR A SOLICITATION TO BUY SECURITIES. THIS MATERIAL IS CONFIDENTIAL 
                    AND PROPRIETARY AND IS FOR QUALIFIED INSTITUTIONAL AND ACCREDITED INVESTORS ONLY.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">1. No Offer or Solicitation</h3>
                  <p>
                    The information contained on this website and in any materials provided by StorageBlue, LLC does not 
                    constitute an offer to sell or a solicitation of an offer to buy any securities or investment products. 
                    Any such offer or solicitation will be made only by means of a confidential private placement memorandum 
                    and related subscription documents, which will be furnished to qualified investors on a confidential basis.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">2. Accredited Investors Only</h3>
                  <p>
                    Investment opportunities offered by StorageBlue Growth Fund, LP are available only to "accredited investors" 
                    as defined under Rule 501 of Regulation D of the Securities Act of 1933, as amended, or to "qualified purchasers" 
                    as defined under the Investment Company Act of 1940, as amended. Investors must meet certain financial 
                    qualifications and suitability standards to participate.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3. Risk Disclosure</h3>
                  <p className="mb-3">
                    An investment in StorageBlue Growth Fund, LP involves substantial risks, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Loss of Capital:</strong> You may lose some or all of your investment</li>
                    <li><strong>Illiquidity:</strong> Investments are illiquid and subject to substantial restrictions on transfer</li>
                    <li><strong>Market Risk:</strong> Real estate markets can decline, affecting property values and returns</li>
                    <li><strong>Operational Risk:</strong> Self-storage facilities face operational challenges and competition</li>
                    <li><strong>Leverage Risk:</strong> The use of leverage amplifies both gains and losses</li>
                    <li><strong>No Guarantee:</strong> There is no guarantee of achieving targeted returns or investment objectives</li>
                    <li><strong>Long-Term Commitment:</strong> Investments typically have a multi-year holding period</li>
                    <li><strong>Regulatory Risk:</strong> Changes in laws and regulations may adversely affect investments</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">4. No Investment Advice</h3>
                  <p>
                    The information provided on this website and in any materials is for informational purposes only and 
                    does not constitute investment, legal, tax, or financial advice. You should consult with your own 
                    advisors before making any investment decision. StorageBlue, LLC is not a registered investment advisor 
                    and does not provide personalized investment advice.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">5. Past Performance</h3>
                  <p>
                    Any references to past performance, including historical returns, track records, or case studies, are 
                    not indicative of future results. Past performance does not guarantee future returns, and actual results 
                    may differ materially. Historical information is provided for context only and should not be relied upon 
                    as a prediction of future performance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">6. Forward-Looking Statements</h3>
                  <p>
                    This website and related materials may contain forward-looking statements, including projections, 
                    targets, estimates, and business plans. These statements involve known and unknown risks, uncertainties, 
                    and other factors that may cause actual results to differ materially from those expressed or implied. 
                    Forward-looking statements are not guarantees of future performance and should not be relied upon as such.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">7. Due Diligence</h3>
                  <p>
                    Prospective investors are encouraged to conduct their own due diligence and investigation before making 
                    any investment decision. This includes reviewing the private placement memorandum, subscription documents, 
                    operating agreements, and conducting independent analysis of the investment opportunity.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">8. Confidentiality</h3>
                  <p>
                    All information provided is confidential and proprietary to StorageBlue, LLC and its affiliates. 
                    By accessing this information, you agree to maintain its confidentiality and not to disclose, copy, 
                    or distribute any information without prior written consent.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">9. No Registration</h3>
                  <p>
                    The securities offered by StorageBlue Growth Fund, LP have not been registered under the Securities 
                    Act of 1933, as amended, or any state securities laws, and are being offered in reliance on exemptions 
                    from the registration requirements. The Fund is not registered as an investment company under the 
                    Investment Company Act of 1940, as amended.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">10. Jurisdiction and Legal Compliance</h3>
                  <p>
                    The information on this website is directed only at persons in jurisdictions where the offer or sale 
                    of interests in StorageBlue Growth Fund, LP is permitted by law. It is your responsibility to ensure 
                    that your participation complies with all applicable laws and regulations in your jurisdiction.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">11. Website Accuracy</h3>
                  <p>
                    While we strive to provide accurate and up-to-date information, StorageBlue, LLC makes no warranties 
                    or representations regarding the accuracy, completeness, or timeliness of information on this website. 
                    Information may be changed or updated without notice. We are not responsible for any errors or omissions 
                    in the content.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">12. Limitation of Liability</h3>
                  <p>
                    To the fullest extent permitted by law, StorageBlue, LLC and its affiliates, officers, directors, 
                    employees, and agents shall not be liable for any direct, indirect, incidental, consequential, or 
                    punitive damages arising from your access to or use of this website or any investment made through 
                    the Fund.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">13. Contact for Questions</h3>
                  <p>
                    If you have any questions about this Disclaimer or require additional information, please contact us at:
                  </p>
                  <p className="mt-3">
                    <strong>StorageBlue, LLC</strong><br />
                    New Jersey<br />
                    Email: Investors@Storagebluecapital.com
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg border border-border mt-6">
                  <p className="font-semibold text-foreground mb-2">
                    IMPORTANT NOTICE:
                  </p>
                  <p className="text-sm">
                    By accessing this website and any related materials, you acknowledge that you have read, understood, 
                    and agree to be bound by this Disclaimer. If you do not agree with any part of this Disclaimer, you 
                    should not access or use this website or any information provided herein. Your continued use of this 
                    website constitutes acceptance of these terms.
                  </p>
                </div>

                <p className="text-sm italic pt-4 border-t border-border">
                  Last Updated: January 2025
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Legal;
