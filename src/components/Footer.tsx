import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">StorageBlue Growth Fund, LP</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Institutional access to the future of self-storage. $350M growth fund with $1B buying power,
              backed by 35+ years of proven performance.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/strategy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Strategy
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/market" className="text-muted-foreground hover:text-foreground transition-colors">
                  Market Insight
                </Link>
              </li>
              <li>
                <Link to="/innovation" className="text-muted-foreground hover:text-foreground transition-colors">
                  Innovation
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-muted-foreground hover:text-foreground transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Actions & Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/investor-questionnaire" className="text-muted-foreground hover:text-foreground transition-colors">
                  Request Access
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-muted-foreground hover:text-foreground transition-colors">
                  Login
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-sm text-muted-foreground">StorageBlue, LLC</p>
              <p className="text-sm text-muted-foreground">New Jersey</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-xs text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>© StorageBlue, LLC 2025. All rights reserved.</p>
            <div className="text-center md:text-right max-w-2xl">
              <p>This is not an offer to sell or a solicitation to buy securities. This material is confidential and proprietary and for</p>
              <p>qualified institutional and accredited investors only.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
