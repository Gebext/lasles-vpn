import Image from "next/image";
import Logo from "../../../../public/assets/Vector-logo.svg";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <section className="bg-gray-200 flex flex-col md:flex-row justify-between p-8">
      <div className="mb-8 md:mb-0">
        <div className="flex items-center mb-4">
          <Image src={Logo} alt="logo" width={50} height={50} />
          <h1 className="md:text-lg font-medium ml-2">
            <span className="font-bold">Lasles</span>VPN
          </h1>
        </div>
        <p className="text-sm text-gray-600 mb-4 md:w-1/2">
          LaslesVPN is a private virtual network that has unique features and
          high security.
        </p>
        <div className="flex">
          <SocialIcon icon={<FaFacebookF />} />
          <SocialIcon icon={<FaTwitter />} />
          <SocialIcon icon={<BiLogoInstagramAlt />} />
        </div>
        <p className="font-semibold text-sm text-gray-600 mt-4">
          &copy;2020 LaslesVPN
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <FooterSection
          title="Product"
          items={[
            "Download",
            "Pricing",
            "Location",
            "Server",
            "Countries",
            "Blog",
          ]}
        />
        <FooterSection
          title="Engage"
          items={[
            "LaslesVPN?",
            "FAQ",
            "Tutorials",
            "About Us",
            "Privacy Policy",
            "Terms of Service",
          ]}
        />
        <FooterSection
          title="Earn Money"
          items={["Affiliate", "Become Partner"]}
        />
      </div>
    </section>
  );
};

const FooterSection = ({ title, items }) => (
  <div className="md:ml-8">
    <h1 className="font-medium text-sm mb-2">{title}</h1>
    <ul className="text-sm text-gray-600 space-y-2">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ icon }) => (
  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
    {icon}
  </div>
);

export default Footer;
