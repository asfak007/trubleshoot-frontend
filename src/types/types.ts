export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}
export type StaticImageData = { src: string; height: number; width: number; blurDataURL?: string; }

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
    icon?: string | StaticImageData
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

// export type UserRole = z.infer<typeof userPrivateMetadataSchema.shape.role>;

export type Option = {
  label: string;
  value: string;
};

// export type FileWithPreview = FileWithPath & {
//   preview: string;
// };

export type StoredFile = {
  id: string;
  name: string;
  url: string;
};

// export type CartItem = z.infer<typeof cartItemSchema>;

// export type CheckoutItem = z.infer<typeof checkoutItemSchema>;

// export interface CartLineItem
//   extends Pick<
//     Product,
//     | "id"
//     | "name"
//     | "images"
//     | "category"
//     | "subcategory"
//     | "price"
//     | "inventory"
//     | "storeId"
//   > {
//   quantity?: number;
//   storeName: string | null;
// }

export type SubscriptionPlan = {
  id: "basic" | "standard" | "pro";
  name: string;
  description: string;
  features: string[];
  stripePriceId: string;
  price: number;
  isCanceled?: boolean;
};

export type categoryItemType = {
  title: string;
  description: string;
  icon: string;
  type: string;
};

export interface LoginApiResponse {
  user: {
    role: string;
    isEmailVerified: boolean;
    name: string;
    email: string;
    id: string;
  };
  token: {
    access: {
      token: string;
      expires: string;
    };
    refresh: {
      token: string;
      expires: string;
    };
  };
}

export interface IAuthUser {
  otp: {
    value: string;
    expires: string;
  };
  role: string;
  isEmailVerified: boolean;
  name: string;
  email: string;
  phoneNumber: string;
  id: string;
}

export interface IAuthTokens {
  access: {
    token: string;
    expires: string;
  };
  refresh: {
    token: string;
    expires: string;
  };
}

export interface IAuthUserData {
  user: IAuthUser;
  tokens: IAuthTokens;
}
