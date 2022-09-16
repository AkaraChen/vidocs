export interface config {
  nav: Array<page>;
  name: string;
  sidebar: Array<menuItem>;
  text: text;
}

export type page = {
  name: string;
  link: string;
};

export type menuItem = page | innerSidebar;

export type innerSidebar = {
  name: string;
  list: Array<page>;
};

export interface text {
  toTop: string;
  menu: string;
}
