import { useEffect, useState } from "react";
import { useDocumentsQuey } from "../../hooks/queries/useDoumentsQuery";
import { IDocumentResponse } from "../../types/documents.types";

export const useDocumentsPage = () => {
  const [search, setSearch] = useState("");
  const [filteredDocumentsData, setFilteredDocumentsData] = useState<IDocumentResponse[]>();
  const {
    documentsData, documentsError, documentsIsLoading,
  } = useDocumentsQuey({ search });

  useEffect(() => {
    if (documentsData) {
      if (!search) {
        setFilteredDocumentsData(documentsData);
      } else {
        setFilteredDocumentsData(documentsData.filter((document) => document.name.includes(search)));
      }
    }
  }, [search, documentsData]);

  return {
    // Data
    documentsData: filteredDocumentsData,
    documentsError,
    documentsIsLoading,

    // Variables
    search,
    setSearch,
  }
};

