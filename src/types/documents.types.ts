export interface IDocumentParams {
  search: string;
}

export interface IDocumentDetail {
  fileId: string;
  documentTitle: string;
  description: string;
  isBookMarked: boolean;
  tagName?: string;
}

export interface IDocumentResponse {
  tagName: string;
  documents: IDocumentDetail[];
}