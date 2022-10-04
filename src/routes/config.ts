interface RouteItem {
  label: string;
  to: string;
}

export const routes: RouteItem[] = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Movies',
    to: '/movies',
  },
  {
    label: 'TV',
    to: '/tv',
  },
];
