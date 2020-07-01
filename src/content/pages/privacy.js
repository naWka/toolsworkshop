import React, {useState} from 'react';
import styled from 'styled-components'
import FeedBack from './feedback';

const PrivacyWrapper = styled.div`
    display: flex;
    padding: 0px 30px 10px 30px;
    flex-direction: column;
    align-items: center;
}
`

const Privacy = ({}) => {
    const [isFeedBack, setIsFeedBack] = useState(false);
    return (
        <PrivacyWrapper>
            {isFeedBack ? <FeedBack callback={() => setIsFeedBack(false)}/> : null}
            <h1>Privacy Policy</h1>
            <div className="content-privacy">
                Publication Date: 10 April 2020
                <br/>
                <br/>

                Privacy Policy (hereinafter referred to as the "Policy") applies to information that either allows or does not
                allow the user to be identified (including personal data) in the applicable law (hereinafter referred to as
                "Personal Information"), which “Yana Shestakova” (hereinafter referred to as "Our Team") can receive about
                you when you use any programs and / or websites of Our Team (hereinafter referred to as the "Products"), as well
                as when Our Team performs the agreements and contracts signed by you, needed to use Our Products.
                You provide our Team with your Personal Data and give a full and unconditional consent for its processing,
                including cross-border transfer, solely under the following privacy policy.
                We can also transfer and receive your Personal Data from our partners (hereinafter referred to as "Partners"),
                programs, websites, products or services which are used (for example, from our advertisers). The transfer of
                Personal Data is possible only in cases established by the applicable law, and is carried out by virtue of the
                contracts between us and each of the Partners.
                <br />
                <br />


                1. Purpose of the Policy
                <br />
                The protection of your Personal Data and your Privacy is extremely important for Our Team. Therefore, when you
                use the Products of Our Team, we protect and process the Personal Data received from you in strict compliance
                with applicable laws.
                <br />
                <br />


                2. The List of collecting Personal Data
                <br />
                The Personal Data collected during the Products usage may differ depending on which Product of Our Product you
                use, and whether you use your account to access the Products or not (in cases when authorisation is provided).
                We do not check the Personal Data provided by you and do not know its reliability. We also do not know if you
                have sufficient legal capacity to provide us with your Personal Data. Nevertheless, Our Team assumes that you
                provide reliable and sufficient Personal Data, you have the right to provide it yourself or, if necessary, you
                have obtained the consent of your legal representative, and you update your information when needed.
                Our Team, depending on the Product, can collect the following categories of Personal Data about you:
                <br />
                (a) Personal Data provided by you yourself when using the Products: your surname, first name, patronymic, phone
                number, country of residence, address, age, expenses and revenues data, account balance, e-mail, Skype number;
                <br />
                (b) electronic data (IP address, cookies, browser ID information, hardware and software information, Product
                version, mobile operator name);
                <br />
                (c) the date and time of access to the Products (including the time zone);
                <br />
                (d) information on your activity during the use of the Products;
                <br />
                (e) information on geolocation;
                <br />
                (f) other information about you, as well as the Products used by you, necessary for processing in accordance
                with the conditions governing the use of specific Products of Our Team;
                <br />
                (g) the information about you that we receive from our Partners in accordance with the terms of agreements
                between you and our Partners and / or agreements between Us and our Partners.
                Our Team purposefully does not collect such Personal Data as race origins, political views, health information
                and biometric data, unless you yourself, in any way, indicate it in our Products.
                Our Team does not collect Personal Data to the extent it can materially affect your rights and freedoms.
                We also use cookie files to collect Personal Data and associate such information with your device and web
                browser. Our Products use cookie files, which makes our services more efficient, safe and convenient for the
                user. Most of the websites and applications use cookie files to improve their functionality. These files allow
                the Product to "remember" the user during the current visit or subsequent visits. The cookie files are used for
                a variety of purposes: for example, they allow to save the search settings, help you register in our services or
                are used to select the targeted advertisement.
                The user can restrict or prohibit the use of cookie files using the settings of his browser. The cookie files we
                store on the user's hardware neither harm nor contain viruses.
                <br />
                <br />


                3. Legal basis and purposes of Personal Data processing
                <br />
                Our Team does not have the right to process your Personal Data without sufficient legal grounds. In this regard,
                we process your Personal Data only in the following cases:
                (a) when processing is necessary to fulfil our Team's contractual obligations to you, including ensuring the
                operation of the Products;
                (b) when processing is necessary to comply with the obligations established by law;
                (c) when (provided by the applicable law) the processing is necessary to ensure the legitimate interests of our
                Team in case if such processing does not have a significant impact on your interests, rights and freedoms.
                (d) improving, changing, personalising, or otherwise enhancing the Products for the benefit of all users,
                understanding how you interact with them;
                (e) offering you other products of our Team or of other companies which, in our opinion, may be interesting to
                you (i.e. showing you advertising that takes into account your interests);
                (e) for specific purposes, we may request your special consent to the processing of your Personal Information.
                (g) giving you access to the Products;
                (h) providing access to your account (when it's needed for the Product usage);
                (i) contacting you to provide you with notifications, requests and information related to the operation of the
                Products, the implementation of agreements with you and the processing of your requests and applications;
                (j) facilitating the Products usage;
                (k) creating new Products;
                (m) protecting your rights and rights of Our Team;
                (n) collecting, processing and presenting statistics and other studies.
                Attention. If you refuse to grant us the right to process personal data, we will not be able to guarantee the
                full functionality of some of our Products.

                <br />
                <br />
                4. Protection of Personal Data
                <br />
                Our Team takes appropriate organisational and technical measures to protect personal information from
                unauthorised or accidental access to it, modification, loss or destruction. We constantly update the security
                measures, guided by the latest technological developments, as well as by applicable law.
                <br />
                <br />


                5. Third party access to Personal Data
                <br />
                Our Team can also transfer Personal Data to third parties, in order to implement the aims and objectives
                specified in this Policy. Such third parties may include:
                <br />
                (a) partners, such as website and application owners, advertising networks and other partners who provide us
                with services related to the placement and display of advertising on websites, programs, products or services
                owned or controlled by such partners;
                <br />
                (b) advertisers or other Partners who display advertisements for you in Our Products, as well as such Partners
                as information or analytical service providers or consultants.
                <br />
                (c) third parties for whom has been made an assignment of rights or obligations under the relevant agreement;
                <br />
                (d) any national and/or international regulator, law enforcement agencies, central or local executive
                authorities, other official or government authorities or courts which Our Team should provide with information
                according to the applicable law;
                <br />
                (e) third parties, if you have agreed to the transfer of your Personal Data or the transfer of Personal
                Information is required to provide you with the relevant Product or to perform a specific agreement or contract
                entered into with you;
                <br />
                f) any third party in order to provide legal protection to Our Team or third parties if you violate the User
                Agreement of Our Team services, this Policy or the terms governing the use of certain Services, or in situations
                with such a violation.
                <br />
                <br />


                6. Personal Data Storage
                <br />
                Our Team has taken measures to transfer and store your personal data according to the applicable law and the
                rules of personal data protection.
                <br />
                <br />


                7. The Personal Data storage period
                <br />
                Our Team will retain your Personal Data for the period necessary to fulfil the purposes outlined in this Privacy
                Policy unless a longer retention period is required or permitted by law. After the expiration of that period,
                the corresponding data is routinely deleted, as long as it is no longer needed.
                <br />
                <br />


                8. Your rights
                <br />
                You have the right to access your Personal Data which is processed by Our Team according to this Policy, if it
                is provided by the applicable law.
                If you admit that any information we store about you is incorrect or incomplete, you can correct and/or
                supplement your Personal Data (if it is provided by the Product) or contact us and request correction.
                In addition, you have the right to:
                <br />
                (a) require the partial or complete removal of your Personal Data;
                <br />
                (b) require restrictions on your Personal Data processing;
                <br />
                (c) take exception against your Personal Data processing.
                <br />
                Our Team will comply with these requests under the applicable law.
                In cases provided by applicable law, you can also have other rights, not specified above.
                Please note that most of the Personal Data about you that we hold can identify only a particular browser or
                device and cannot identify you. You will need to provide us with additional information so that we can identify
                your personal data that we hold, and to implement your request.
                To exercise the rights above, please contact Our Team (see clause 11).
                <br />
                <br />


                9. Updating this Policy
                <br />
                Our Team has the right to make changes to this Policy at its discretion. Therefore, we recommend you to
                periodically review this Policy.
                <br />
                <br />


                10. Feedback
                <br />
                If you have any questions regarding the protection of your personal information or about this Policy, please
                contact us using our support e-mail: support@toolsworkshop.ru
                You also can use our support e-mail to send requests on your personal data correction or complaints connected
                with illegality of its processing.
            </div>
        </PrivacyWrapper>
    );
}

export default Privacy;