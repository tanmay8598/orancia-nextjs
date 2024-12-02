import React from "react";

const page = () => {
  return (
    <div className="bg-gray-50 py-10 px-6 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">
          Privacy Policy
        </h1>

        {/* Introduction */}
        <p className="text-gray-700 mb-6">
          PinakinShine Ecom Pvt. Ltd. respects individual privacy and is
          committed to protecting it. Our data collection and management
          practices are outlined in our privacy policy.
        </p>
        <p className="text-gray-700 mb-6">
          We collect information from our website when an individual visits the
          platform and registers voluntarily. This information is used for
          offers, deals of the day, analysis of the site, and drafting marketing
          strategies. You can order products, get information about different
          products, sign up for newsletters, receive special deals, reach out to
          customer service, or participate in surveys provided by the company.
        </p>

        {/* Section: What Personal Information Do We Collect */}
        <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
          What Personal Information Do We Collect?
        </h2>
        <p className="text-gray-700 mb-4">
          The company only gathers information essential to providing accurate
          services, processing orders, issuing refunds, and enhancing products
          and services. The data we collect includes:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
          <li>
            Your name, email, mailing address, phone number(s), and country
          </li>
          <li>Birth date, preferred language, and location</li>
          <li>
            Public data and records, including information accessible on the
            internet
          </li>
          <li>
            Information regarding purchases, such as names, addresses, telephone
            numbers, and IP addresses
          </li>
          <li>Purchase history and website usage data</li>
          <li>
            Information about product interests and specific requirements based
            on opinions and preferences
          </li>
          <li>
            Financial details like bank account, credit card, or debit card
            information for transactions
          </li>
          <li>
            Technical data such as device details, operating system, and
            applications for software updates and support
          </li>
        </ul>

        {/* Section: Purpose of Collecting Personal Information */}
        <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
          Purpose of Collecting Personal Information
        </h2>
        <p className="text-gray-700 mb-4">
          The company may use your personal details for the following purposes:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
          <li>To confirm your identity</li>
          <li>
            To process product purchases and transactions, ensuring timely
            deliveries
          </li>
          <li>To keep you informed about your account and interactions</li>
          <li>
            Register for our newsletter or engage with marketing communication
          </li>
          <li>To respond to reviews, comments, and feedback</li>
          <li>
            Analyze customer behavior and feedback to optimize our offerings
          </li>
          <li>To request feedback and evaluations of the products</li>
          <li>Provide updates on order status, promotions, and notices</li>
          <li>
            Examine patterns, monitor browsing behavior, and enhance shopping
            experiences
          </li>
          <li>
            Identify and prevent criminal activities, fraud, and other illegal
            activities
          </li>
        </ul>

        {/* Section: Data Security */}
        <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
          Data Security
        </h2>
        <p className="text-gray-700 mb-8">
          We implement security measures to protect your personal information
          from unauthorized access, disclosure, alteration, or destruction. We
          handle your personal information with care and in accordance with
          applicable data protection laws.
        </p>

        {/* Section: Changes to the Privacy Policy */}
        <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
          Changes to the Privacy Policy
        </h2>
        <p className="text-gray-700">
          The website and our business may be subject to changes periodically.
          We may update this Privacy Policy periodically to reflect changes in
          our practices or for other operational, legal, or regulatory reasons.
          1 We encourage you to review this Privacy Policy 2 regularly for any
          updates. If you use our site or provide us with information after we
          have updated our privacy policy, or notified you, you are agreeing to
          the privacy policy and the practices mentioned in it.
        </p>
      </div>
    </div>
  );
};

export default page;
