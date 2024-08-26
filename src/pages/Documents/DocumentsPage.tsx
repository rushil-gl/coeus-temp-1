import { WidgetContainer } from "../../components/common/WidgetContainer.component";
import DocumentCardRow from "../../components/documents/DocumentCardRow.component";
import DocumentSearch from "../../components/documents/DocumentSearch.component";
import { validateEmptyData } from "../../utils/helper";
import { useDocumentsPage } from "./useDocumentsPage";

function DocumentsPage() {
  const { search, setSearch, documentsData, documentsIsLoading } =
    useDocumentsPage();

  return (
    <div className="justify-center items-center h-full">
      <section className="mt-5">
        <DocumentSearch search={search} setSearch={setSearch} />
      </section>

      <section className="mx-20 my-10">
        <WidgetContainer
          loading={documentsIsLoading}
          isEmptyData={validateEmptyData(documentsData)}
        >
          <DocumentCardRow documentsData={documentsData} />
        </WidgetContainer>
      </section>
    </div>
  );
}

export default DocumentsPage;
