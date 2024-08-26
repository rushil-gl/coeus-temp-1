import { IDocumentDetail } from "../../types/documents.types";
import { ReactComponent as Download } from "../../assets/download.svg";
import { ReactComponent as EmptyBookmark } from "../../assets/empty-bookmark.svg";
import { ReactComponent as Bookmark } from "../../assets/bookmark.svg";
import { ReactComponent as Folder } from "../../assets/folder.svg";
import { ReactComponent as Share } from "../../assets/share.svg";
import { ReactComponent as Message } from "../../assets/message.svg";

interface IDocumentCardProps {
  data: IDocumentDetail;
}

function DocumentCard(props: IDocumentCardProps) {
  return (
    <div className="border border-slate-500 rounded-xl text-gray-600 dark:text-gray-200">
      <div className="p-4">
        <div className="m-1">
          <p className="mb-4 text-md capitalize overflow-hidden whitespace-nowrap">
            <Folder width="25" height="25" className="float-left mr-4" />
            {props.data.documentTitle}
          </p>
        </div>
        <div className="m-1 max-h-28 min-h-28 overflow-hidden">
          <p className="text-sm overflow-hidden overflow-ellipsis">
            {props.data.description}
          </p>
        </div>
        <hr className="h-px my-4 bg-slate-500 border-0" />
        <div>
          <Download className="float-left mx-1 mb-4" />
          {props.data.isBookMarked ? (
            <Bookmark className="float-left mx-1 mb-4" />
          ) : (
            <EmptyBookmark className="float-left mx-1 mb-4" />
          )}
          <Share className="float-left mx-1 mb-4" />
          <Message className="float-right mx-1 mb-4" />
        </div>
      </div>
    </div>
  );
}

export default DocumentCard;
