import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import storageBlueLogoImage from '@/assets/storageblue-logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set up auth state listener first
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
      if (session) {
        checkAdminStatus(session.user.id);
      } else {
        setIsAdmin(false);
      }
    });

    // Then check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (session) {
        checkAdminStatus(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminStatus = async (userId: string) => {
    const { data } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .eq('role', 'admin')
      .maybeSingle();
    
    setIsAdmin(!!data);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Strategy', href: '/strategy' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Market Insight', href: '/market' },
    { name: 'Innovation', href: '/innovation' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : isHomePage ? 'bg-gradient-to-b from-black/40 to-transparent' : 'bg-background/95 backdrop-blur-md shadow-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={storageBlueLogoImage} 
              alt="StorageBlue"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.href
                    ? isHomePage && !isScrolled
                      ? 'text-white bg-white/20'
                      : 'text-white bg-[hsl(220,90%,30%)]'
                    : isHomePage && !isScrolled
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : 'text-foreground hover:text-primary hover:bg-muted/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button + Auth */}
          <div className="hidden lg:flex items-center gap-3">
            {loading ? (
              <div className={`h-10 w-32 animate-pulse rounded-md ${
                isHomePage && !isScrolled ? 'bg-white/20' : 'bg-muted'
              }`}></div>
            ) : session ? (
              <>
                {isAdmin && (
                  <Button 
                    variant={isHomePage && !isScrolled ? "secondaryGold" : "outlineGold"}
                    size="sm" 
                    asChild
                    className={isHomePage && !isScrolled ? "bg-white text-foreground" : ""}
                  >
                    <Link to="/admin">
                      <User className="mr-2 h-4 w-4" />
                      Admin Dashboard
                    </Link>
                  </Button>
                )}
                <Button 
                  size="sm" 
                  asChild
                  className={isHomePage && !isScrolled ? "bg-white/20 text-white border-white/20 hover:bg-[hsl(43,48%,55%)]" : "bg-[hsl(43,48%,62%)] text-foreground hover:bg-[hsl(43,48%,55%)]"}
                >
                  <Link to="/investor-portal">
                    <User className="mr-2 h-4 w-4" />
                    Investor Portal
                  </Link>
                </Button>
                <Button 
                  variant={isHomePage && !isScrolled ? "secondaryGold" : "outlineGold"}
                  size="sm" 
                  onClick={handleSignOut}
                  className={isHomePage && !isScrolled ? "bg-white/20 text-white border-white/20" : ""}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  asChild 
                  variant="default"
                  size="sm"
                  className="bg-[hsl(220,90%,30%)] text-white hover:bg-[hsl(220,90%,25%)]"
                >
                  <Link to="/investor-questionnaire">Request Access</Link>
                </Button>
                <Button 
                  asChild 
                  variant="default"
                  size="sm" 
                  className="bg-[hsl(43,48%,62%)] text-foreground hover:bg-[hsl(43,48%,55%)]"
                >
                  <Link to="/auth">Login</Link>
                </Button>
              </>
            )}

          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isHomePage && !isScrolled ? 'text-white' : 'text-foreground'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden py-4 space-y-2 animate-fade-in ${
            isHomePage && !isScrolled ? 'bg-black/90' : 'bg-background'
          }`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.href
                    ? isHomePage && !isScrolled
                      ? 'text-white bg-white/20'
                      : 'text-white bg-[hsl(220,90%,30%)]'
                    : isHomePage && !isScrolled
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : 'text-foreground hover:text-primary hover:bg-muted/50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-2 space-y-2 border-t border-border mt-2">
              {session ? (
                <>
                  {isAdmin && (
                    <Button 
                      variant="outlineGold" 
                      size="sm" 
                      className={`w-full ${isHomePage && !isScrolled ? 'border-white text-white' : ''}`}
                      asChild
                    >
                      <Link to="/admin" onClick={() => setIsMobileMenuOpen(false)}>
                        <User className="mr-2 h-4 w-4" />
                        Admin Dashboard
                      </Link>
                    </Button>
                  )}
                  <Button 
                    size="sm" 
                    className={`w-full ${isHomePage && !isScrolled ? 'bg-white/20 border-white/20 text-white hover:bg-[hsl(43,48%,55%)]' : 'bg-[hsl(43,48%,62%)] text-foreground hover:bg-[hsl(43,48%,55%)]'}`}
                    asChild
                  >
                    <Link to="/investor-portal" onClick={() => setIsMobileMenuOpen(false)}>
                      <User className="mr-2 h-4 w-4" />
                      Investor Portal
                    </Link>
                  </Button>
                  <Button 
                    variant="outlineGold" 
                    size="sm" 
                    className={`w-full ${isHomePage && !isScrolled ? 'bg-white/20 border-white/20 text-white' : ''}`}
                    onClick={() => { handleSignOut(); setIsMobileMenuOpen(false); }}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild variant="default" size="sm" className="w-full bg-[hsl(220,90%,30%)] text-white hover:bg-[hsl(220,90%,25%)]">
                    <Link to="/investor-questionnaire" onClick={() => setIsMobileMenuOpen(false)}>Request Access</Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="default" 
                    size="sm" 
                    className="w-full bg-[hsl(43,48%,62%)] text-foreground hover:bg-[hsl(43,48%,55%)]"
                  >
                    <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
