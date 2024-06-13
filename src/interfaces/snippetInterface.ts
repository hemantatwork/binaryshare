export interface ISnippet {
  snippet: string;
  snippet_type: string;
  expiry_time: string;
  __v?: number;
  _id?: string;
}

export interface ISaveSnippetResponse {
  success: boolean;
  data: ISnippet;
  message: string;
}
