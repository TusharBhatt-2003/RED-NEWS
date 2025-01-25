import React from "react";

interface SearchFormProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  fromDate: string;
  setFromDate: (value: string) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  searchQuery,
  setSearchQuery,
  fromDate,
  setFromDate,
  onSearch,
}) => {
  return (
    <form onSubmit={onSearch} className="flex flex-col sm:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search topic (e.g., Tesla)"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-1 p-2 border rounded-md"
      />
      <input
        type="date"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
        className="p-2 font-bold rounded-md select-none red"
      />
      <button
        type="submit"
        className="px-4 py-2 font-bold red text-white rounded-md hover:red/10"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
