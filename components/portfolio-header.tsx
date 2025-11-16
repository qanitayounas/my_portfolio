import { Mail, Phone } from 'lucide-react';

    interface PortfolioHeaderProps {
      name: string;
      email: string;
      phone: string;
    }

    export function PortfolioHeader({ name, email, phone }: PortfolioHeaderProps) {
      return (
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold mb-2">{name}</h1>
          <div className="flex items-center justify-center gap-4 text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>{email}</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>{phone}</span>
            </div>
          </div>
        </header>
      );
    }
