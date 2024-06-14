export interface input {
  placeholder: string;
  searchInput: any;
}

export interface State {
  date: any[];
  search: string;
  empty: boolean;
  notFound: boolean;
}

export interface Action {
  type: any;
  payload: any;
}
