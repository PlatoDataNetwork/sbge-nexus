import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-heading font-bold mb-4">StorageBlue Growth Fund, LP</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Institutional access to the future of self-storage. $350M growth fund with $1B buying power,
              backed by 35+ years of proven performance.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4">
            <h4 className="font-semibold mb-4 text-lg">Navigation</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Home
                  </Link>
                </li>
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
              </ul>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/market" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Market Insight
                  </Link>
                </li>
                <li>
                  <Link to="/innovation" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Innovation
                  </Link>
                </li>
                <li>
                  <Link to="/leadership" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Get Started & Contact */}
          <div className="md:col-span-4">
            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-lg">Get Started</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/investor-questionnaire" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Request Access
                  </Link>
                </li>
                <li>
                  <Link to="/auth" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-lg">Contact</h4>
              <p className="text-sm text-primary-foreground/80">StorageBlue, LLC</p>
              <p className="text-sm text-primary-foreground/80">New Jersey</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-primary-foreground/70">
            <p>© StorageBlue, LLC 2025. All rights reserved.</p>
            <p className="text-left md:text-right max-w-2xl">
              This is not an offer to sell or a solicitation to buy securities. This material is confidential and proprietary and for qualified institutional and accredited investors only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
