import {ReactNode} from 'react';
import {Link, useLocation} from 'react-router-dom';
import { Home, PieChart,ListChecks, Settings } from 'lucide-react';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <div className="min-h-screen flex-col bg-background">
        <main className="flex-1 container max-w-md mx-auto p-4 mb-16">
            {children}
        </main>

        <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-around p-4">
        <div className="container max-w-md-auto">
            <div className="flex justify-around">
                <Link to="/" className={`flex flex-col items-center ${isActive('/') ? 'text-primary' : 'text-muted-foreground'}`}>
                    <Home className="w-6 h-6" />
                    <span className="text-sm">Home</span>
        </Link>
        <Link to="/expenses" className={`flex flex-col items-center ${isActive('/expenses') ? 'text-primary' : 'text-muted-foreground'}`}>
              <ListChecks size={24} />
              <span className="text-xs mt-1">Expenses</span>
            </Link>
            <Link to="/analytics" className={`flex flex-col items-center ${isActive('/analytics') ? 'text-primary' : 'text-muted-foreground'}`}>
              <PieChart size={24} />
              <span className="text-xs mt-1">Analytics</span>
            </Link>
            <Link to="/settings" className={`flex flex-col items-center ${isActive('/settings') ? 'text-primary' : 'text-muted-foreground'}`}>
              <Settings size={24} />
              <span className="text-xs mt-1">Settings</span>   
        </Link>
        <Link to="/profile" className={`flex flex-col items-centre ${isActive(`/profile`) ? 'text-primary' : 'text-muted-foreground'}`}>
         <Settings size={24} />
         <span className="text-xs mt-1">Profile</span>
         </Link>
            </div>
            </div>
            </nav>
            </div>
          
    );
};

export default Layout;