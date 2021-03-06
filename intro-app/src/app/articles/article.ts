export interface IArticleResponse {
  status: string;
  totalResults: number;
  articles: IArticle[];
}

export interface IArticleResponseError {
  status?: number;
  message?: string;
  friendlyMessage?: string; 
}




export interface IArticle {
  source: IArticleSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface IArticleSource {
  id: string;
  name: string;
}