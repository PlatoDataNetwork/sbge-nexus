import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">StorageBlue Growth Fund, LP</h3>
            <p className="text-sm text-primary-foreground/80 max-w-md">
              Institutional access to the future of self-storage. $350M growth fund with $1B buying power,
              backed by 35+ years of proven performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/strategy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Strategy
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Leadership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>StorageBlue, LLC</li>
              <li>New Jersey</li>
              <li>
                <Link to="/investor-questionnaire" className="hover:text-primary-foreground transition-colors">
                  Request Access
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-xs text-primary-foreground/60">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>© StorageBlue, LLC 2025. All rights reserved.</p>
            <p className="text-center md:text-right max-w-2xl">
              Not an offer to sell or a solicitation to buy securities. See Private Placement Memorandum (PPM) for full terms and risks. 
              This material is confidential and proprietary.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
