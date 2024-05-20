export interface MenuItem {
  name: string;
  url: string;
  icon: string;
}

export const MENU_DATA: MenuItem[] = [
  {
    icon: "radix-icons:dashboard",
    name: "Dashboard",
    url: "/",
  },
  {
    icon: "carbon:product",
    name: "Products",
    url: "/products",
  },
  {
    icon: "uiw:pay",
    name: "Payments",
    url: "/payments",
  },
  {
    icon: "lets-icons:order",
    name: "Orders",
    url: "/orders",
  },
  {
    icon: "carbon:customer-service",
    name: "Customers",
    url: "/customers",
  },
  {
    icon: "uil:feedback",
    name: "Feedback",
    url: "/feedback",
  },
  {
    icon: "ion:settings-outline",
    name: "Settings",
    url: "/settings",
  },
  {
    icon: "material-symbols:help-outline",
    name: "Help",
    url: "/help",
  },
  {
    icon: "material-symbols:help-outline",
    name: "Login",
    url: "/login",
  },
];
