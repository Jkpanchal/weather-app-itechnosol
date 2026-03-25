import React, { useState } from 'react'
import { Form } from '../Styledcomponent/Form'
import { Input } from '../Styledcomponent/Input'
import { Button } from '../Styledcomponent/Button';
import { MapPin } from 'lucide-react';
import { SearchButton } from '../Styledcomponent/SearchButton';
import { Search } from 'lucide-react';
import { useWeatherContext } from '../../context/weatherContext';

function SearchBar() {

    const [query, setQuery] = useState();
    const { searchCity, isLoading } = useWeatherContext()

    const handleFormSubmit = (event) => {
        event.preventDefault()
        if (query.trim()) {
            searchCity(query);
            setQuery('');
        }
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Input type='text'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a city..."
                disabled={isLoading}
            />
            <SearchButton type='submit' onClick={handleFormSubmit} disabled={isLoading}>
                <Search />
            </SearchButton>
        </Form>
    )
}

export default SearchBar