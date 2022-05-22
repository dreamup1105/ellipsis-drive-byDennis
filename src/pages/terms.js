import React from 'react'
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Terms of Service - The world's first Drive for spatial data!</title>
          <description>"Bridge the gap between your data and your audience the easy way. Go from computer to cloud in minutes!"</description>
          <link rel="canonical" href="https://ellipsis-drive.com/terms" />
        </Helmet>
      </div>
    )
  }
}


const Terms = () => {
  return (
    <Layout contentClassName="bg-F9FAFB">
      <section className="section__container pb-14">
        <div className="relative z-10 max-w-760 mx-auto">
          <h4 className="uppercase text-1976D2 text-base font-semibold text-center mb-8">
          Terms of Service
          </h4>
          
          <p className="mb-5">
          Please read these Terms of Service and Privacy Policy. Together these two (2) artifacts form a unified agreement ( “Agreement”) that applies to all users of Our Software and represent the general provisions of Ellipsis Drive for providing its services. This Agreement is between Ellipsis Drive (legal name Ellipsis Earth Intelligence B.V.) (“Ellipsis”, “We”, “Our” or “Us”) and the natural or legal person agreeing to it (“Customer”, “You” or “Your”) and contains important information about Your use of Our Site and / or Software.
          </p>
          
          <p className="mb-5">
          By signing up for Ellipsis’s Software, You agree that You have read, understood and are bound by this Agreement. Unfortunately, if You do not agree to this Agreement, We are unable to provide Our Software to You.
          </p>
          
          <h5 className="text-333333 text-base font-semibold">
          Article 1. - Definitions
          </h5>
          <p className="mb-5">
          In addition to the terms otherwise defined in this Agreement, the following terms have the definitions below:
          <br></br>1. User: the natural or legal person who currently uses, or has signed up to use, Ellipsis’s services, whether this is in the form of a pay-per-use-, subscription, collaboration-, or subcontracting agreement;
          <br></br>2. Account: an account with Ellipsis Drive to use its Software as a registered user;
          <br></br> 3. Data: shall mean anything that You share with us, including Drive Content, Personal Data and Confidential Information, and any data which is publicly available;
          <br></br>4. Drive Content: Data hosted on Ellipsis Drive that is made available via any of the four Ellipsis Drive endpoints including API, Python, OGC protocols, and Ellipsis web viewer/editor, both public and private;
          <br></br>5. Applicable Law: the laws to which Ellipsis is subject; 
          <br></br>6. Confidential Information: shall mean all information provided by You or Us, whether orally, in writing, or as Drive Content which information is designated as or is by its nature not intended to be public; 
          <br></br>7. Intellectual Property Rights: shall mean copyrights, rights to use, and trademarks, and all other industrial and intellectual property rights, in each case whether registered or unregistered, which currently subsist, or will subsist, now or in the future, in any part of the world;
          <br></br>8. Personal Data: shall mean any data that can be used to identify an individual (e.g. name, identification number, location data, an online identifier, etc.). This definition includes any equivalent definition in the Applicable Law;
          <br></br>9. Software: shall mean the software as a service (SaaS) offered by Ellipsis Drive consisting of a Software which makes it easy for Users to activate, share and sell spatial data across organisations, professionals groups, and teams.
          <br></br>10. Services: use of Our Software, Customer support, data delivery, and building customer-specific software.
          <br></br>11. “Site/s” shall mean ellipsis-drive.com, in addition to any sub-pages that are integrated within it;
          </p>

          <h5 className="text-333333 text-base font-semibold">
          Article 2. - Applicability
          </h5>
          <p className="mb-5">
          1. These Terms of Service apply to all offers and agreements regarding Our Software and Services, regardless of the residence or place of business of the person involved in that agreement, and regardless of the place where that agreement has been concluded or is to be implemented.
          <br></br>2. Deviations from these Terms of Service are only valid if they have been explicitly agreed in writing and confirmed by a legal representative of Ellipsis. Deviations then only apply to the agreement under which the deviation has been agreed.
          <br></br>3. Once theTerms of Service apply, they also apply without further explanation to new agreements between the parties, unless expressly excluded in that case, and to all non-contractual relationships between the parties. If these Terms of Service are amended in due course, but their business content does not change overall, the new amended Terms of Service will then apply instead of these Terms of Service.
          </p>

          <h5 className="text-333333 text-base font-semibold">
          Article 3. - Account Registration, Access and Disclosure
          </h5>
          <p className="mb-5">
          1. To host Drive Content in Our Software, You must create an Account by providing Ellipsis Drive with all required information and accepting this Agreement. You agree to provide Ellipsis Drive with complete and accurate information upon registration. 
          <br></br>2. We reserve the right to access Your Account, the information that You have provided and the Data You have stored with Us for support, maintenance and servicing purposes or for any security-related, technical or billing reasons.
          <br></br>3. Each user of Your Account, and each user that has been appointed to represent Your Account, shall comply with this Agreement and You are responsible for acts or omissions by a user of Your Account in connection with their use of the Software.
          <br></br>4. It is Your responsibility to maintain the confidentiality of Your Account information and passwords and to protect the Data of Your end users when using the Software. You are also responsible for promptly notifying Ellipsis of any known or suspected unauthorized use of Your account, or breach of Your Account information. Ellipsis will not be liable for any losses or damages that You may incur as a result of someone else using Your username or password, either with or without Your knowledge, unless Ellipsis has caused such losses or damages intentionally or with gross negligence.
          <br></br>5. You must be 13 years or older to use the Services. By registering as a user or providing personal information on the site, you represent that you are at least 13 years old.
          <br></br>6. If you are entering into this agreement on behalf of your company or another legal entity, you represent that you have the authority to bind that entity to these Terms, in which case "You" will mean the entity you represent.
          </p>

          <h5 className="text-333333 text-base font-semibold">
          Article 4. - Service delivery
          </h5>
          <p className="mb-5">
          1. We offer several account types for Our Software (the “Account Type”). Information about Our Account Types can be found on Our Site. For additional information on Account Types, please Contact Us. You may upgrade or downgrade Account Type at any time, upon which We will apply the respective fees on a pro-rata basis.
          <br></br>2. Trial Period: At the end of the Trial Period, You will be prompted to enter Your payment details and preferences. You will be directed to make a direct payment or You are charged through invoice in accordance with your billing method of choice. Your payment term will be communicated accordingly. In the Balance section of Your Account you can find a history of all of Your Account’s transactions.
          <br></br>3. Continuous use: When using Our Software on a pay-per-use basis your content becomes blocked when Your Account balance reaches zero or its predefined maximum negative. To avoid being blocked, up your balance through your preferred payment method. When using Our Software on a subscription basis You will be enrolled into an automatic renewing cycle for the same term at the conclusion of the Subscription Term (the “Renewal Term”). This applies to all Subscription Plans involving payment including monthly and annual renewals.
          </p>

          <h5 className="text-333333 text-base font-semibold">
          Article 5. - Changes to services or terms
          </h5>
          <p className="mb-5">
          1. We may modify these Terms and other terms related to your use of the Services (like our privacy policy) from time to time, by posting the changed terms on the site. All changes will be effective immediately upon posting to the site unless they specify a later date. Changes will not apply retroactively. Please check these Terms periodically for changes - your continued use of the Services after new terms become effective constitutes Your binding acceptance of the new terms.
          <br></br>2. We may change the features and functions of the Services, including API, Python package and OGC protocols. It is your responsibility to ensure that calls or requests you make to the Services are compatible with our then-current Services. We attempt to avoid changes that are not backwards compatible, but such changes may occasionally be required. If that happens, we will use reasonable efforts to notify You prior to deploying the changes.
          </p>

          <h5 className="text-333333 text-base font-semibold">
          Article 6. - Payment
          </h5>
          <p className="mb-5">
          1. You agree to pay all fees owed for your use of Our Services (your “Order”), as calculated by our records based on our publicly available pricing, currently located at https://app.ellipsis-drive.com/pricing. All charges are non-refundable unless expressly prohibited by applicable law. We may charge your credit card on a recurring basis for any amounts that You owe Us, some of which may require advance payments.
          <br></br>2. Unless specific conditions have been agreed upon in writing, You will pay the owed amount within 30 (thirty) days after the invoice date.
          <br></br>3. If Ellipsis has not received the amount due within the agreed term, the customer will owe interest on the outstanding amount at a percentage of 1.5% (one and a half percent) per month or part of a month, without any notice of default being required, which is added to the receivable at the beginning of the following month. If, after notice of default, the customer continues to fail to pay the claim, the claim can be relinquished, in which case, in addition to the total amount owed, the customer will also be obliged to pay full compensation for extrajudicial and / or judicial costs, including all costs calculated by external experts in addition to the costs determined in court, in connection with the collection of this claim or the exercise of law in any other way.
          <br></br>4. We are not responsible for any bank fees, interest charges, finance charges, overdraft charges, or other fees resulting from charges billed by Ellipsis. Currency exchange settlements will be based on agreements between You and the provider of Your credit card.
          <br></br>5. Our listed fees do not include taxes, and you agree to pay all sales/use, gross receipts, value-added, GST, personal property or other tax (including any interest and penalties) with respect to the transactions and payments under these Terms, other than taxes based on our net income, employees or real property. 
          </p>

          <h5 className="text-333333 text-base font-semibold">
          Article 7. - Data Hosting liability
          </h5>
          <p className="mb-5">
          1. By using Our Software, You may host information that qualifies as Classified Data, Personal Data, or protected information by Your organization, your business partners, your end users/customers or the laws applicable to You. You shall be solely and exclusively responsible for the lawfulness of hosting such Classified Data, Personal Data, or protected information for your chosen audience. This includes obtaining any consent that You may be legally or contractually required to obtain from Your organization, your business partners, your end users/customers
          <br></br>2. You and Ellipsis agree that You are the Controller of all Drive Content hosted in your account and the accounts you represent. You are solely responsible for ensuring it is used in accordance with the laws, licenses or any other restrictions that You, and the data hosted, may be subject to. 
          <br></br>3. You shall comply with all laws applicable to the Processing of Classified Data, Personal Data, or protected information by You in connection with the use of Our Software. For clarity, this includes any processing You carry out after exporting or downloading Drive Content from the Software and subsequently using it for Your business purposes. Failure to comply may result in the termination of Your Account.
          </p>

          <h5 className="text-333333 text-base font-semibold">
          Article 8. - Indemnification
          </h5>
          <p className="mb-5">
          1. You agree to indemnify and hold harmless Ellipsis and its subsidiaries, affiliates, officers, agents, partners, and employees from any claim or demand, including reasonable attorneys' fees, arising out of:
          a. Your use of the Services;
          b. Your violation of these Terms;
          c. Your End Users’ use of the Services in or through an application or service you provide;
          d. Content you or your End Users submit, post to, extracts from, or transmit through the Services.
          </p>

          <h5 className="text-333333 text-base font-semibold">
          Article 9. - Ownership
          </h5>
          <p className="mb-5">
          1. Your content
          <br></br>a. You retain ownership of all content that you host in Ellipsis Drive, excluding any content that you receive from third parties ("Your Content").
          <br></br>b. Limited to the purpose of hosting Your Content so that we can provide the Services to you, you hereby grant Ellipsis a non-exclusive, worldwide, royalty-free, fully paid-up, transferable and sublicensable right and license to (and to engage service providers to) use, copy, cache, publish, display, distribute, modify, create derivative works, and store Your Content. This right and license enables Ellipsis to host and mirror your content on its distributed platform. You warrant, represent, and agree that you have the right to grant Ellipsis these rights.
          <br></br>c. On termination of your account, Ellipsis will make reasonable efforts to promptly remove from the site and cease use of Your Content; however, you recognize and agree that caching of or references to the content may not be immediately removed.‍
          <br></br>2. Our content and third party content
          <br></br>a. Other than Your Content, all content displayed on the site or accessible through the Services, including text, images, Drive Content, software or source code, are the property of Ellipsis and/or third party users and are protected by Dutch, European Union,  and other international intellectual property laws. Logos and product names appearing on or in connection with the Services are proprietary to Ellipsis, third party users or our licensors. You may not remove any proprietary notices or product identification labels from the Services.
          <br></br>3. Feedback
          <br></br>a. You agree that we may freely exploit and make available any and all feedback, suggestions, ideas, enhancement requests, recommendations or other information you provide to us relating to the Services.
          </p>

          <h5 className="text-333333 text-base font-semibold">
          Article 10. - Technical and Organizational Measures
          </h5>
          <p className="mb-5">
          a. Ellipsis establishes data security in accordance with the Applicable Laws. The measures to be taken must be designed to guarantee a protection level appropriate to the risk concerning confidentiality, integrity, availability, and resilience of the systems. The state of the art, implementation costs, the nature, scope and purposes of processing, as well as the probability of occurrence and the severity of the risk to the rights and freedoms of natural persons, must also be taken into account.
          <br></br>b. Ellipsis has set out a number of security measures and may implement alternative adequate measures from time to time, provided such measures will not materially reduce Ellipsis’s security level. 
          <br></br>c. Ellipsis shall provide You, upon reasonable request, with adequate proof of compliance with its Data Processing obligations under this Agreement.
          </p>

          <h5 className="text-333333 text-base font-semibold">
          Article 11. - Publicity
          </h5>
          <p className="mb-5">
          1. We're proud to have you as a customer. During the term of this agreement, you hereby grant us a worldwide, non-exclusive, royalty-free, fully paid-up, transferable and sublicensable license to use your trademarks, service marks, and logos for the purpose of identifying you as a Ellipsis customer to promote and market our services. But if you prefer we not use your logo or name in a particular way, just let us know, and we will respect that.
          </p>

          <h5 className="text-333333 text-base font-semibold">
          Article 12. - Termination
          </h5>
          <p className="mb-5">
          1. Either You or Ellipsis may terminate this Agreement for cause as a result of a material breach by the other party of this Agreement if the defaulting party fails to cure such material breach within fifteen (15) calendar days of its receipt of written notice of the breach from the non-defaulting party. In addition, We may immediately terminate this Agreement if You do not pay the fees when due in accordance with Your Subscription Plan. 
          <br></br>2. In the event this Agreement is terminated for cause by You due to Our a material breach which remains uncured, You shall be entitled to a pro-rata refund of all fees previously advanced to Us from the date of the termination through the end of the Subscription Term.
          <br></br>3. Ellipsis may suspend and/or terminate Your right to use the Site and/or Software with or without cause at any time. Ellipsis shall notify You via email to Your registered email account if We terminate Your Account. 
          <br></br>4. Your obligation to pay accrued charges and fees accrued up to the date of termination shall survive any termination of this Agreement. In the event of any termination of this Agreement, the limitations on Your use of the Software outlined in this Agreement shall survive such termination.
          </p>

          <h5 className="text-333333 text-base font-semibold">
          Article 13. - Warranties
          </h5>
          <p className="mb-5">
          1. Each party represents and warrants to the other party that it has all necessary rights and authority to enter into the Agreement.
          <br></br>2. Ellipsis warrants and represents to You that:
          <br></br>the Intellectual Property Rights in any material provided by Ellipsis as part of the Site and/or the Software do not, to the best of Our’s knowledge, infringe any Third Party Intellectual Property Rights when used by You in accordance with this Agreement; and
          <br></br>Ellipsis will only use Your Data in accordance with this Agreement and Applicable Law.
          <br></br>3. You represent and warrant that You will comply with all applicable laws and regulations applicable to You (including export and re-export control laws and sanctions) when using Our Software, to sell you Drive Content or otherwise. 
          <br></br>4. You agree to provide and maintain a legally adequate privacy policy that accurately discloses Your practices with respect to the collection, use, and disclosure of Classified Data, Personal Data, or protected information including Classified Data, Personal Data, or protected information collected through Your use of Our Software.
          <br></br>5. You are responsible for determining whether You are subject to any sector-specific privacy laws, regulations or any law concerning the privacy of any collected Personal Data or other laws as may be applicable to You, and for determining whether Our Software is suitable for You to use in light of the application or potential application of any such laws or regulations. If You are subject to specific laws or regulations, You represent and warrant that Your use of Our Software will be in accordance with such laws or regulations. Ellipsis will not be held liable for Your failure to comply with any such laws or regulations.
          <br></br>6. If You are located in a jurisdiction with privacy and data protection laws or have any end users that use Your Drive Content from such jurisdictions, You represent and warrant that You use the Software in accordance with the laws applicable to You. You further represent and warrant that You agree to indemnify and hold Us harmless from any losses, including attorney fees and costs, that result from Your breach of any part of these warranties.
          </p>

          <h5 className="text-333333 text-base font-semibold">
          Article 14. - Assumption of Risk
          </h5>
          <p className="mb-5">
          1. You use the Internet, Our Site and Software solely at Your own risk and subject to all applicable laws and regulations. Since Our Site and Software are online and accessible from anywhere in the world, You declare that You are aware that access to Drive Content that you are hosting may not be legal to access by certain persons or in certain jurisdictions. 
          <br></br>2. While Ellipsis is committed to creating secure and reliable Site and Software, Ellipsis is not responsible for the security of any information outside of its control. Ellipsis shall have no liability for interruptions or omissions in internet, network or hosting services.
          </p>

          <h5 className="text-333333 text-base font-semibold">
          Article 15. - Links
          </h5>
          <p className="mb-5">
          1. Ellipsis’s Site and/or Software may include links to certain websites, materials, or content developed by Third Parties. Use of any such linked material is at Your own risk.
          </p>

          <h5 className="text-333333 text-base font-semibold">
          Article 16. - Enforcing Security
          </h5>
          <p className="mb-5">
          1. Actual or attempted unauthorized use of any of Our Site and/or Software may result in the institution by Us of criminal and/or civil prosecution. For Your protection, We reserve the right to view, monitor, and record activity on Our Site and/or Software without notice or further permission from You, as permitted by the Applicable Law and this Agreement. This right extends to Our review of tracking activity and details pertaining to claimed violations by You. Any information obtained is subject to review by law enforcement organizations in connection with the investigation or prosecution of possible criminal activity on any of Our Site and/or Software.
          </p>

          <h5 className="text-333333 text-base font-semibold">
          Article 17. - Governing Law and Dispute Resolution
          </h5>
          <p className="mb-5">
          1. This Agreement is governed by and construed in accordance with the laws of The Netherlands. The parties agree that any dispute or claim arising out of or in connection with this Agreement or its subject-matter shall be settled in the court of Arnhem, The Netherlands. Ellipsis shall retain the right, at its option and for its exclusive benefit, to institute proceedings regarding or relating to Your use of Our Site and Software in the courts of law of the country in which You reside.
          </p>

          <h5 className="text-333333 text-base font-semibold">
          DISCLAIMER
          </h5>
          <p className="mb-5">
          THE MATERIALS CONTAINED ON AND IN THE ELLIPSIS SITE AND SOFTWARE ARE PROVIDED “AS IS”. OTHER THAN FOR THE EXPRESS WARRANTIES OF THIS AGREEMENT, ELLIPSIS HEREBY MAKES NO FURTHER WARRANTIES, WHETHER EXPRESSED OR IMPLIED, AND HEREBY DISCLAIMS AND NEGATES ALL OTHER WARRANTIES, INCLUDING WITHOUT LIMITATION, IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR OTHER VIOLATION OF RIGHTS. FURTHER, ELLIPSIS DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS CONCERNING THE ACCURACY, LIKELY RESULTS, OR RELIABILITY OF THE USE OF THE CONTENT ON ITS SITE OR SOFTWARE, OR OTHERWISE RELATING TO SUCH CONTENT OR MATERIALS ON ANY THIRD PARTY SITES OR SOFTWARE LINKED TO WITHIN OUR SITE OR SOFTWARE OR THAT THE SOFTWARE WILL BE ERROR-FREE OR PROVIDE CERTAIN RESULTS.
          </p>

          <h5 className="text-333333 text-base font-semibold">
          Disclaimers
          </h5>
          <p className="mb-5">
          1. “As is," "as available" and "with all faults." YOU EXPRESSLY AGREE THAT THE USE OF THE SERVICES IS AT YOUR SOLE RISK. THE SITE AND ITS SOFTWARE, SERVICES, AND DRIVE CONTENT, INCLUDING ANY THIRD-PARTY CONTENT, SOFTWARE, SERVICES, MEDIA, OR OTHER MADE AVAILABLE IN CONJUNCTION WITH OR THROUGH THE SITE, ARE PROVIDED ON AN "AS IS", "AS AVAILABLE", "WITH ALL FAULTS" BASIS AND WITHOUT WARRANTIES OR REPRESENTATIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED.
          <br></br>2. No warranties. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, ELLIPSIS DISCLAIMS ALL WARRANTIES, STATUTORY, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT OF PROPRIETARY RIGHTS. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM ELLIPSIS OR THROUGH THE SITE, WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED HEREIN.
          <br></br>3. Website operation. ELLIPSIS DOES NOT WARRANT THAT THE SERVICES, INCLUDING ANY SOFTWARE, SERVICES, OR DRIVE CONTENT OFFERED ON OR THROUGH THE SITE OR ANY THIRD PARTY SITES REFERRED TO ON OR BY THE SITE WILL BE UNINTERRUPTED, OR FREE OF ERRORS, VIRUSES, OR OTHER HARMFUL COMPONENTS AND DOES NOT WARRANT THAT ANY OF THE FOREGOING WILL BE CORRECTED.
          <br></br>4. Non-Ellipsis content. WHEN USING THE SERVICES YOU MAY BE EXPOSED TO USER SUBMISSIONS AND OTHER THIRD PARTY CONTENT ("NON-ELLIPSIS OWNED DRIVE CONTENT"), AND SOME OF THIS CONTENT MAY BE INACCURATE, OFFENSIVE, INDECENT, OR OTHERWISE OBJECTIONABLE. WE DO NOT ENDORSE ANY NON-ELLIPSIS CONTENT. UNDER NO CIRCUMSTANCES WILL ELLIPSIS BE LIABLE FOR OR IN CONNECTION WITH THE NON-ELLIPSIS CONTENT, INCLUDING FOR ANY INACCURACIES, ERRORS, OR OMISSIONS IN ANY NON-ELLIPSIS CONTENT, ANY INTELLECTUAL PROPERTY INFRINGEMENT WITH REGARD TO ANY NON-ELLIPSIS CONTENT, OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY NON-ELLIPSIS CONTENT.
          <br></br>5. Accuracy. ELLIPSIS DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF THE USE OF THE SERVICES OR ANY THIRD PARTY SITES REFERRED TO ON OR BY THE SITE IN TERMS OF CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE.
          <br></br>6. Harm to your computer. YOU UNDERSTAND AND AGREE THAT YOU USE, ACCESS, DOWNLOAD, OR OTHERWISE OBTAIN SOFTWARE, SERVICES, OR DRIVE CONTENT THROUGH THE SITE OR ANY THIRD PARTY SITES REFERRED TO ON OR BY THE SITE AT YOUR OWN DISCRETION AND RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR PROPERTY (INCLUDING YOUR COMPUTER SYSTEM) OR LOSS OF DATA THAT RESULTS FROM SUCH DOWNLOAD OR USE.
          <br></br>7. Jurisdiction. CERTAIN JURISDICTIONS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF YOU RESIDE IN SUCH A JURISDICTION, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS, OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS. THE LIMITATIONS OR EXCLUSIONS OF WARRANTIES, REMEDIES, OR LIABILITY CONTAINED IN THESE TERMS APPLY TO YOU TO THE FULLEST EXTENT SUCH LIMITATIONS OR EXCLUSIONS ARE PERMITTED UNDER THE LAWS OF THE JURISDICTION IN WHICH YOU ARE LOCATED.
          </p>

          <h5 className="text-333333 text-base font-semibold">
          Limitation of liability
          </h5>
          <p className="mb-5">
          1. Limitation of liability. UNDER NO CIRCUMSTANCES, AND UNDER NO LEGAL THEORY, INCLUDING NEGLIGENCE, SHALL ELLIPSIS OR ITS AFFILIATES, CONTRACTORS, EMPLOYEES, AGENTS, OR THIRD PARTY PARTNERS OR SUPPLIERS, BE LIABLE FOR ANY SPECIAL, INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES (INCLUDING LOSS OF PROFITS, DATA, OR USE OR COST OF COVER) ARISING OUT OF OR RELATING TO THESE TERMS OR THAT RESULT FROM YOUR USE OR THE INABILITY TO USE THE SERVICES OR THE SITE, INCLUDING SOFTWARE, SERVICES. DRIVE CONTENT, USER SUBMISSIONS, OR ANY THIRD PARTY SITES REFERRED TO ON OR BY THE SITE, EVEN IF ELLIPSIS OR A ELLIPSIS AUTHORIZED REPRESENTATIVE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          <br></br>2. Limitation of damages. IN NO EVENT SHALL THE TOTAL LIABILITY OF ELLIPSIS OR ITS AFFILIATES, CONTRACTORS, EMPLOYEES, AGENTS, OR THIRD PARTY PARTNERS, LICENSORS, OR SUPPLIERS TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION ARISING OUT OF OR RELATING TO THESE TERMS THE SERVICES OR YOUR USE OF THE SITE (WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), WARRANTY, OR OTHERWISE) EXCEED THE GREATER OF ONE HUNDRED EUROS (100 EUR) OR FEES PAID OR PAYABLE TO ELLIPSIS IN THE TWELVE MONTHS PERIOD PRIOR TO THE DATE ON WHICH THE DAMAGE OCCURRED.
          <br></br>3. Claim period. YOU AND ELLIPSIS AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF THESE TERMS OR RELATED TO ELLIPSIS MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED.
          </p>

          <h5 className="text-333333 text-base font-semibold">
          Digital Millennium Copyright Act compliance
          </h5>
          <p className="mb-5">
          1. If you are a copyright owner or an agent thereof, and believe that any user submission or other Ellipsis Drive content infringes upon your copyrights, you may submit a notification pursuant to the Digital Millennium Copyright Act ("DMCA") by providing our copyright agent with the following information in writing (see 17 U.S.C § 512(c)(3) for further detail):
          <br></br>2. A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works on Ellipsis are covered by a single notification, a representative list of such works from Ellipsis;
          <br></br>3. Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit Ellipsis to locate the material;
          <br></br>4. Information reasonably sufficient to permit Ellipsis to contact the complaining party, such as an address, telephone number, and an electronic mail address;
          <br></br>5. A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and
          <br></br>6. A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
          <br></br>7. Please email your notification to Us at info@ellipsis-drive.com
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Terms
