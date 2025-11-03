import React from "react";
import "./PrivacyPage.css";

export default function PrivacyPage() {
  return (
    <div className="privacy-page">
      <h2>Privacy Notice</h2>
      <p>
        Shri Ram Janmbhoomi Teerth Kshetra (“SRJBTK” or “we”) operates
        https://online.srjbtkshetra.org (the “Site”). Shri Ram Janmbhoomi Teerth
        Kshetra is committed to ensure that your privacy is protected. This privacy
        policy helps users understand what information we collect and how we process
        it.
      </p>
      <p>
        By visiting/using the Site, you agree to this Privacy Notice. Shri Ram
        Janmbhoomi Teerth Kshetra shall not use the Users’ information in any manner
        except as provided under this Privacy Notice.
      </p>

      <h3>Collection of Personal Information</h3>
      <p>
        We may collect Personally Identifiable Information (PII) that users provide
        while registering, booking services, or raising requests on this website.
        Personal data may include but is not limited to:
      </p>
      <ul>
        <li>Name, Age, Gender</li>
        <li>Identity proof type and details</li>
        <li>Email address and Indian Mobile number</li>
        <li>Demographic and contact information including address and postal code</li>
        <li>Password chosen by the user in encrypted form</li>
        <li>
          Payment details like bank name, account number, PAN card details, and UTR
          number (only for support or verification)
        </li>
      </ul>

      <h3>Cookies Notice</h3>
      <p>
        Cookies are small text files sent by the website you’re visiting to your
        browser. These cookies help remember preferences and analyse website traffic.
        We, as the first party, do not deploy cookies directly; however, third-party
        analytics tools (like Google Analytics) may use cookies to improve user
        experience.
      </p>
      <ul>
        <li>
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noreferrer"
          >
            Google Analytics Opt-out Add-on
          </a>
        </li>
        <li>
          <a href="chrome://settings/cookies">Cookie settings in Chrome</a>
        </li>
        <li>
          <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">
            Cookie settings in Firefox
          </a>
        </li>
      </ul>

      <h3>Use of Your Personal Information</h3>
      <ul>
        <li>To facilitate booking, donation requests, and verification</li>
        <li>To send confirmations via SMS and Email</li>
        <li>
          To share necessary details with authorized third parties (like SMS or
          Payment Gateway Providers)
        </li>
      </ul>

      <h3>Disclosure of Information</h3>
      <p>
        Shri Ram Janmbhoomi Teerth Kshetra will not disclose any personal information
        unless required under law or for legitimate purposes such as fraud prevention
        or security enforcement.
      </p>

      <h3>Protection of Information</h3>
      <p>
        We take utmost care and follow industry-standard security policies to protect
        user data from unauthorized access or misuse. However, we shall not be held
        responsible for breaches beyond reasonable control such as hacking or
        technical failures.
      </p>

      <h3>Changes to Privacy Notice</h3>
      <p>
        The Trust reserves the right to update this Privacy Notice anytime. Continued
        use of the Site after updates signifies your acceptance of the modified terms.
      </p>

      <h3>Contact</h3>
      <p>
        For queries and clarifications regarding this Privacy Notice, please write to
        us at: <strong>contact[at]srjbtkshetra[dot]org</strong>
      </p>
    </div>
  );
}
