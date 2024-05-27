import { Link } from "react-router-dom";
import { icons } from "../../utils/icons";

const { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } = icons;

const Footer = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="flex flex-col gap-4 md:flex-row ">
          <div className="w-full lg:w-1/4">
            <h2 className="text-xl font-bold">Support</h2>
            <ul className="flex flex-col gap-2 pt-3">
              <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4">
            <h2 className="text-sl font-bold">Account</h2>
            <ul className="flex flex-col gap-2 pt-3">
              <li>
                <Link to="/">My account</Link>
              </li>
              <li>
                <Link to="/">Login /Register</Link>
              </li>
              <li>
                <Link to="/">Cart</Link>
              </li>
              <li>
                <Link to="/">Wishlist</Link>
              </li>
              <li>
                <Link to="/">Shop</Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4">
            <h2 className="text-xl font-bold">Quick Link</h2>
            <ul className="flex flex-col gap-2 pt-3">
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms Of Use</Link>
              </li>
              <li>
                <Link>FAQ</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4">
            <h2 className="text-xl font-bold">Download App</h2>
            <div className="flex items-center gap-10 pt-3">
              <FaFacebookF size={20} />
              <FaXTwitter size={20} />
              <FaInstagram size={20} />
              <FaLinkedinIn size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
