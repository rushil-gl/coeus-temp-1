import { IDocumentResponse } from "../../types/documents.types";

interface IDocumentCardProps {
  data: IDocumentResponse
}

function DocumentCard(props: IDocumentCardProps) {
  return (
    <div className="m-4 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="p-4">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {props.data.name}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {props.data.description}
        </p>
      </div>
    </div>
  );
}

export default DocumentCard;
