import { useEffect, useState } from "react";
import { useDocumentsQuery } from "../../hooks/queries/documents/useDoumentsQuery";
import {
  IDocumentDetail,
  IDocumentResponse,
} from "../../types/documents.types";

export const useDocumentsPage = () => {
  const [search, setSearch] = useState("");
  const [filteredDocumentsData, setFilteredDocumentsData] = useState<IDocumentResponse[]>([]);
  const { documentsData, documentsError, documentsIsLoading } =
    useDocumentsQuery({ search });

  // ToDo:// May be we can avoid this hook, Let's see !!
  useEffect(() => {
    if (!documentsIsLoading && documentsData) {
      const documents: IDocumentDetail[] = [];
      documentsData.forEach((item) => {
        const tagName = item.tagName;
        item.documents.forEach((document) => {
          documents.push({ ...document, tagName });
        });
      });

      if (search) {
        const filtered: IDocumentResponse[] = [];
        documentsData.forEach((item) => {
          const documents = item.documents.filter(
            (document) =>
              document.documentTitle.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
              document.description.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          );
          if (documents.length) {
            filtered.push({ ...item, documents });
          }
        });
        setFilteredDocumentsData(filtered);
      } else {
        setFilteredDocumentsData(documentsData);
      }
    }
  }, [documentsData, documentsIsLoading, search]);

  return {
    // Data
    documentsData: filteredDocumentsData,
    documentsError,
    documentsIsLoading,

    // Variables
    search,
    setSearch,
  };
};
