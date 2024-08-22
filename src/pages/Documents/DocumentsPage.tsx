import { WidgetContainer } from "../../components/common/WidgetContainer.component";
import DocumentCard from "../../components/documents/DocumentCard.component";
import DocumentSearch from "../../components/documents/DocumentSearch.component";
import { validateEmptyData } from "../../utils/helper";
import { useDocumentsPage } from "./useDocumentsPage";

function DocumentsPage() {
  const {
    search,
    setSearch,
    documentsData,
    documentsIsLoading,
  } = useDocumentsPage();

  return (
    <div className="justify-center items-center h-full">
      <p className="text-2xl text-center text-blue-400 dark:text-gray-400">
        This is Documents page
      </p>

      <DocumentSearch search={search} setSearch={setSearch} />
      
      <WidgetContainer loading={documentsIsLoading} isEmptyData={validateEmptyData(documentsData)}>
        <div className="flex flex-1 items-center justify-center p-6">
          {documentsData?.map((document, i) => (
            <DocumentCard data={document} key={i} />
          ))}
        </div>
      </WidgetContainer>
    </div>
  );
}

export default DocumentsPage;
