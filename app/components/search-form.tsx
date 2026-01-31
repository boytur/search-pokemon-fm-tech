import React from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Search } from 'lucide-react';
import Input from './ui/input';

interface SearchFormProps {
    className?: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ className }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    /**
     * Handle search debounced callback
     * @param term - search term (name)
     * @returns void
     */
    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('name', term);
        } else {
            params.delete('name');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 500);

    return (
        <div className={`w-full max-w-sm mx-auto space-y-2 ${className}`}>
            <div className="relative">
                <Input
                    className='w-full'
                    placeholder="Search Pokémon..."
                    defaultValue={searchParams.get('name')?.toString()}
                    onChange={(e) => handleSearch(e.target.value)}
                    startIcon={<Search className="h-4 w-4" />}
                />
            </div>
            <p className="text-[0.8rem] text-gray-500 dark:text-gray-400 font-medium text-center">
                Try "Bulbasaur", "Eevee", or "Snorlax"
            </p>
        </div>
    );
};

export default SearchForm;
