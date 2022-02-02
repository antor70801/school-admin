import React, { useEffect, useState } from 'react';
import Navigations from '../Shareds/Navigations';
import Datatable from './Datatable';

const Tearchers = () => {

    const [data, setData] = useState([]);
    const [q, setQ] = useState('');
    const [searchColumns, setSearchColumns] = useState([
        'name',
        'birth_year',
    ]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then((response) => response.json())
            .then((json) => setData(json.results));
    }, []);

    function search(rows) {
        return rows.filter((row) =>
            searchColumns.some(
                (column) =>
                    row[column]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1,
            ),
        );
    }

    const columns = data[0] && Object.keys(data[0]);
    return (
        <div >
            <Navigations></Navigations>
            <main className="mt-5 pt-5">
                <div className='container mx-4 px-4'>
                    <input
                        type='text'
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />
                    {columns &&
                        columns.map((column) => (
                            <label>
                                <input
                                    type='checkbox'
                                    checked={searchColumns.includes(column)}
                                    onChange={(e) => {
                                        const checked = searchColumns.includes(column);
                                        setSearchColumns((prev) =>
                                            checked
                                                ? prev.filter((sc) => sc !== column)
                                                : [...prev, column],
                                        );
                                    }}
                                />
                                {column}
                            </label>
                        ))}
                </div>
                <div>
                    <Datatable data={search(data)} />
                </div>
            </main>
        </div>
    );
};

export default Tearchers;