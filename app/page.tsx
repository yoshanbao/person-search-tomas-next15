import UserSearch from './components/user-search';
import { TechnicalOverview } from './components/technical-overview';
import { UserDialog } from './components/user-dialog';

export default async function Home({ searchParams }: { searchParams: Promise<{ userId?: string }> }) {
  return (
    <div className="w-full min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">User Search</h1>
        <UserSearch searchParams={searchParams} />
        <UserDialog />
        <TechnicalOverview />
      </div>
    </div>
  );
}
