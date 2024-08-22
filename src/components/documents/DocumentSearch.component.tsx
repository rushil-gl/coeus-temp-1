import { Dispatch, SetStateAction } from "react";

interface IDocumentSearchProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>
}

function DocumentSearch ({ search, setSearch }: IDocumentSearchProps) {
  return (
    <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-lg">
          <div className="mt-5 sm:flex sm:items-center">
            <input
              className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              placeholder="Keyword"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
  )
}

export default DocumentSearch;
