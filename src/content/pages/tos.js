import React, {useState} from 'react';
import styled from 'styled-components'
import Header from "../components/header";
import FeedBack from './feedback';

const PrivacyWrapper = styled.div`
    display: flex;
    padding: 0px 30px 10px 30px;
    flex-direction: column;
    align-items: center;
}
`

const Tos = ({}) => {
    const [isFeedBack, setIsFeedBack] = useState(false);
    return (
        <PrivacyWrapper>
            <Header callback={() => setIsFeedBack(true)} text={'Privacy Policy'}/>
            {isFeedBack ? <FeedBack callback={() => setIsFeedBack(false)}/> : null}
            <h1>Terms of service</h1>
            <div className="content-privacy">
                <br/>
                Please read these Terms of Use carefully before you download, install or use the App.
                <br/>
                <br/>
                1. By downloading, installing or using the App, you indicate that you accept these Terms of Use and that you agree to abide by them. Your download, installation or use of the App constitutes your acceptance of these Terms of Use which takes effect on the date on which you download, install or use the App. If you do not agree with these Terms of Use, you should cease downloading, installing or using the App immediately.
                <br/>
                <br/>
                2. The App is operated by Yana Shestakova.
                <br/>
                <br/>
                3. We reserve the right to change these Terms of Use at any time without notice to you by posting changes on http://toolsworkshop.ru or by updating the App to incorporate the new terms of use. You are responsible for regularly reviewing information posted online to obtain timely notice of such changes. Your continued use of the App after changes are posted constitutes your acceptance of the amended Terms of Use.
                <br/>
                <br/>
                4. To download, install, access or use the App, you must be 18 years of age or over. If you are under 18 and you wish to use download, install, access or use the App, you must get consent from your parent or guardian before doing so.
                <br/>
                <br/>
                5. By clicking “Accept”, you subscribe to regular update of the App on conditions below. The subscription is payable. There is a 1 month in the application. Monthly subscription fee is $9,99.  The price of subscription varies in different regions. The information on the current price for your region can be found inside the app or on its product page in the App Store. We may change the subscription fee by updating these Terms of Use in accordance with point 3. The fee will be automatically charged your credit card at the end of every period of the subscription. You may opt out of the subscription by clicking the “Opt out” button (menu “Settings” > “Accounts” > “Manage Subscriptions”).
                <br/>
                <br/>6. We provide you with a one-time free trial period for 1 month subscription during which you can try the App
                - One Month subscription for 3 days from the date you download or install it without prepaying in advance in for IOS;
                If you participate in a free trial period, you must remove the App by the end of the Free Trial Period to avoid incurring any charges. If do not remove the App before the Free Trial Period expires, you authorize us to charge your credit card the full cost of subscription. Your subscription will than automatically renew and continue period-to-period, unless and until you cancel your subscription or we terminate it. You will not receive a notice from us that your free trial period is about to and or has ended.
                <br/>
                <br/>7. You shall not in any way use the App or submit to us or to the App or to any user of the App anything which in any respect:
                <br/>a) is in breach of any law, statute, regulation or by law of any applicable jurisdiction;
                <br/>b) is fraudulent, criminal or unlawful;
                <br/>c) is inaccurate or out-of-date;
                <br/>d) may be obscene, indecent, pornographic, vulgar, profane, racist, sexist, discriminatory, offensive, derogatory, harmful, harassing, threatening, embarrassing, malicious, abusive, hateful, menacing, defamatory, untrue or political;
                <br/>e) impersonates any other person or body or misrepresents a relationship with any person or body;
                <br/>f) may infringe or breach the copyright or any intellectual property rights (including without limitation copyright, trademark rights and broadcasting rights) or privacy or other rights of us or any third party;
                <br/>g) may be contrary to our interests;
                <br/>h) is contrary to any specific rule or requirement that we stipulate on the App in relation to a particular part of the App or the App generally; or
                <br/>i) involves your use, delivery or transmission of any viruses, unsolicited emails, trojan horses, trap doors, back doors, easter eggs, worms, time bombs, cancelbots or computer programming routines that are intended to damage, detrimentally interfere with, surreptitiously intercept or expropriate any system, data or personal information.
                You shall use the App for lawful purposes only.
                <br/><br/>8. You agree not to reproduce, duplicate, copy or re-sell the App or any part of the App save as may be permitted by these Terms of Use.
                <br/><br/>9. You agree not to access without authority, interfere with, damage or disrupt:
                <br/>a) any part of the App;
                <br/>b) any equipment or network on which the App is stored;
                <br/>c) any software used in the provision of the App; or
                <br/>d) any equipment or network or software owned or used by any third party.
                You agree to comply at all times with any instructions for use of the App which we can make from time to time.
                <br/><br/>10.You must not without our permission:
                <br/>a) use or copy any material from the App, including, but not limited to, onto other websites or in other mobile applications; or
                <br/>b) frame any of the App onto your own or another person’s website or mobile application.
                <br/><br/>11. We make no warranty that your access to the App will be uninterrupted, timely or error-free. In addition, we may occasionally need to carry out repairs, maintenance or introduce new facilities and functions.
                <br/><br/>12.We do not warrant that the App will be compatible with all hardware and software which you may use. We shall not be liable for damage to, or viruses or other code that may affect, any equipment (including but not limited to your mobile device), software, data or other property as a result of your download, installation, access to or use of the App or your obtaining any material from, or as a result of using, the App. We shall also not be liable for the actions of third parties.
                <br/><br/>13. We may change or update the App and anything described in it without notice to you.
                The license granted to you for the App is limited to a non-transferable license to use the App on a mobile device that you own or control and as permitted by these Terms of Use.
                We are solely responsible for providing any maintenance and support services with respect to the App as required under applicable law.
                <br/><br/>14.You must comply with any applicable third party terms of agreement when using the App (e.g. you must ensure that your use of the App is not in violation of your mobile device agreement or any wireless data service agreement).
                <br/><br/>15. You hereby release Yana Shestakova, its officers, directors, agents, and employees from all claims, demands, and damages (actual and consequential) of any kind and nature, known and unknown, suspected and unsuspected, disclosed and undisclosed, arising out of, or in any way, connected with any disputes arising between you and any suppliers, or between you and other App or Website users.
                <br/><br/>16.You represent and warrant that your use of the App will be in strict accordance with this Agreement and with all applicable laws and regulations.
                <br/><br/>17.You agree to indemnify and hold Yana Shestakova and each of our affiliates, successors and assigns, and their respective officers, directors, employees, agents, representatives, licensors, advertisers, suppliers, and operational service providers harmless from and against any and all losses, expenses, damages, costs and expenses (including attorneys’ fees), resulting from your use of the App and/or any violation of the terms of this Agreement. We reserve the right to assume the exclusive defense and control of any demand, claim or action arising hereunder or in connection with the App and all negotiations for settlement or compromise. You agree to fully cooperate with us in the defense of any such demand, claim, action, settlement or compromise negotiations, as requested by us.
                <br/><br/>18. As between you and us, we are the sole and exclusive owner or the licensee of all intellectual property rights in the App, and in the material published on it. Those works are protected by copyright and trademark laws and treaties around the world. All such rights are reserved.
                <br/><br/>19. You must not use any part of the materials on the App for commercial purposes without obtaining a licence to do so from us or our licensors.
                <br/><br/>20. We process information about you in accordance with our Privacy Policy, which is available on our website at http://toolsworkshop.ru/#/privacy By using the App, you consent to such processing and you warrant that all data provided by you is accurate.
                <br/><br/>21. THE APP, ITS CONTENT, INCLUDING TEXT, GRAPHICS, IMAGES OR OTHER COMPONENTS IS PROVIDED “AS IS” WITH ALL ERRORS, WITHOUT WARRANTIES OF ANY KIND, TECHNICAL CHARACTERISTICS SUPPORT AND YOU AGREE TO USE THEREOF AT YOUR OWN RISK. YANA SHESTAKOVA DOES NOT WARRANT THE ACCURACY, ADEQUACY OR COMPLETENESS OF THIS INFORMATION AND MATERIALS, SATISFACTORY QUALITY AND PRODUCTIVITY, CONTINUOUS USE, FITNESS FOR A PARTICULAR PURPOSE AND EXPRESSLY DISCLAIMS LIABILITY FOR ERRORS OR OMISSIONS IN INFORMATION, MATERIALS AND CORRECTION THEREOF. YANA SHESTAKOVA PERFORMS NO WARRANTY TO YOUR SATISFACTION BY CONTENT OF THIS WEBSITE, ITS COMPLIANCE WITH YOUR NEEDS, NO WARRANTY OF ANY KIND, IMPLIED, EXPRESSED OR STATUTORY INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF NON-INFRINGEMENT OF THIRD PARTY RIGHTS, TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE.
                <br/><br/>22. Any personal information that we may have on you can be collected in accordance with our Privacy Policy.
                <br/><br/>23. These terms are governed by and construed in accordance with the laws of the Russian Federation without giving effect to any conflict of law principles.
                These Terms of Use were most recently updated on 10.04.2020.
            </div>
        </PrivacyWrapper>
    );
}

export default Tos;