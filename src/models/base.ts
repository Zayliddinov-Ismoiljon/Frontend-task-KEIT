export type I_meta = {
    currentPage: number;
    pageCount: number;
    perPage: number;
    totalCount: number;
  };
  
  export type I_links = {
    first: { href: string };
    last: { href: string };
    self: { href: string };
  };

export type InformerDRDT<T = any> = {
    items: Array<T>;
    _meta: I_meta;
    _links: I_links;
  };


  export type InformerById<T = any> = {
    data: T;
    message: string;
    status: number;
  };