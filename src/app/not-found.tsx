import Link from 'next/link';
import { Container } from '@/_components/layout/Container';
import { Button } from '@/_ui/button';
import { Home, ShoppingBag } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="page-shell flex items-center">
      <Container>
        <div className="surface-panel mx-auto max-w-lg space-y-4 p-8 text-center shadow-sm sm:p-12">
          <span className="block text-6xl font-bold tracking-tight text-primary">404</span>
          <h1 className="text-lg font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Page Not Found!
          </h1>
          <p className="text-base leading-7 text-muted-foreground">
            The page you are looking for may have been moved, renamed, or deleted.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" size="md">
              <Link href="/" className="flex items-center gap-1.5">
                <Home className="w-4 h-4" />
                <span>Return to Home</span>
              </Link>
            </Button>
            <Button variant="outline" size="md">
              <Link href="/shop" className="flex items-center gap-1.5">
                <ShoppingBag className="w-4 h-4" />
                <span>Browse Shop</span>
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
