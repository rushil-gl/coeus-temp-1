import { useQuery } from "@tanstack/react-query";
import { IDocumentResponse } from "../../types/documents.types";

function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const getDocuments = async (params: any): Promise<IDocumentResponse[]> => {
  await wait(1000);
  return [
    {
      name: "test1.png",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      size: 1234,
    },
    {
      name: "test2.png",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      size: 12345,
    },
  ];
}

export const useDocumentsQuey = (
  params: { search?: string },
) => {
  const {
    data: documentsData,
    error,
    isLoading,
    isFetching,
  } = useQuery<IDocumentResponse[], Error>({
    queryKey: ["documents", params],
    queryFn: () => getDocuments(params),
  });

  return {
    documentsData,
    documentsError: error,
    documentsIsLoading: isLoading || isFetching,
  };
}