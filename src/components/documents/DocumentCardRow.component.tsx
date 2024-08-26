import { IDocumentResponse } from "../../types/documents.types";
import AccountSelectionDropdown from "../account/AccountSelectionDropdown.component";
import DocumentCard from "./DocumentCard.component";

interface IDocumentCardRowProps {
  documentsData: IDocumentResponse[];
}

function DocumentCardRow({ documentsData }: IDocumentCardRowProps) {
  return (
    <>
      {documentsData?.map((item) => (
        <div key={item.tagName}>
          <section className="flex mx-5 mb-5">
            <div className="flex-grow-0 flex-shrink-0 basis-1/4">
              <p className="text-2xl text-blue-400 dark:text-gray-400">
                {item.tagName}
              </p>
            </div>
            <div className="flex-grow-0 flex-shrink-0 basis-1/5">
              <AccountSelectionDropdown />
            </div>
            <div className="flex-grow-0 flex-shrink-0 basis-1/8 ml-auto">
              <p className="text-xl text-blue-400 dark:text-lime-400 cursor-pointer">
                {"View More ->"}
              </p>
            </div>
          </section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 p-6">
            {item.documents.map((document, i) =>
              i < 4 ? (
                <DocumentCard data={document} key={document.fileId} />
              ) : null
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default DocumentCardRow;
