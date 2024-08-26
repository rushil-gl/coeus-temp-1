import { useQuery } from "@tanstack/react-query";
import { IDocumentParams, IDocumentResponse } from "../../../types/documents.types";
import { IApiGenericResponse } from "../../../types/common.types";
import fakeData from "./fakeData.json";

function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const getDocuments = async (
  params: IDocumentParams
): Promise<IApiGenericResponse<IDocumentResponse[]>> => {
  await wait(1000);
  return fakeData;
};

export const useDocumentsQuery = (
  params: IDocumentParams,
) => {
  const {
    data: documentsData,
    error,
    isLoading,
    isFetching,
  } = useQuery<IApiGenericResponse<IDocumentResponse[]>, Error>({
    queryKey: ["documents", params],
    queryFn: () => getDocuments(params),
  });

  return {
    documentsData: documentsData?.data,
    documentsError: error || documentsData?.errorMessage,
    documentsIsLoading: isLoading || isFetching,
  };
}