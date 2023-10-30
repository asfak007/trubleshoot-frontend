type LocationProps = {
    href?: any;
    protocol?: any;
    host?: any;
    hostname?: any;
    port?: any;
    pathname?: any;
    search?: any;
    hash?: any;
};

type GridPatternProps = {
    width: number;
    height: number;
    x?: number | string;
    y?: number | string;
    squares?: any[];
    className?: string;
};

type ProseProps = {
    children: React.ReactNode;
    className?: string;
    as?: any;
    enable?: boolean;
};

interface LanguageMappings {
    [key: string]: string;
}
interface PreferredLanguageState {
    preferredLanguages: any[];
    addPreferredLanguage: (language: any) => void;
}

type HeadingProps = {
    level: string | number;
    children?: any;
    id?: any;
    tag?: any;
    label?: any;
    anchor?: boolean;
    className?: string;
};

interface PageProps {
    children?: React.ReactNode | null;
    modal?: React.ReactNode | null;
    auth?: any;
}

interface AlertModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    loading: boolean;
}

interface LayoutProps {
    children?: React.ReactNode | null;
    auth?: any;
}

type TopLevelNavItemProps = {
    href: string;
    children: React.ReactNode;
};

interface MobileNavigationState {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

type GroupPathProps = {
    pathname?: string;
    group?: any;
    className?: any;
};

type NavLinkProps = {
    href: string;
    isAnchorLink?: boolean;
    children: React.ReactNode;
    tag?: any;
    active?: boolean;
};

type TopLevelNavItemProps = {
    href: string;
    children: React.ReactNode;
};

type Skill = {
    name: string;
    description: string;
    level: number;
    icon: any;
    technology?: string | undefined | null;
    type?: string[];
};

interface Project {
    name: string;
    description: string;
    link?: {
        href: string;
        label: string;
    };
    logo?: any;
    role?: string[];
    type?: string;
    year?: number | string;
    tags?: string[];
}

interface Testimonial {
    name: string;
    username?: string;
    description: string;
    country: string;
    date: any;
}
type PutData = [any, any, any, any];

interface AxiosResponse {
    [x: string]: any;
    success: boolean;
    status: number;
    message: string;
    data: Data;
}
interface ServiceData {
    services: Service[];
}

interface Service {
    id: number;
    name: String;
    subcategory_id: number;
    category_id: number;
    provider_id: number;
    zone_id: number;
    price: string;
    type: "fixed" | "hourly";
    duration: String;
    image: string;
    discount: number;
    status: number;
    short_description: string;
    long_description: string;
    tax: number;
    order_count: number;
    rating_count: number;
    avg_rating: number;
    is_featured: number;
    by_admin: number;
    created_at: Date;
    updated_at: Date;
}

interface Category {
    id: number;
    parent_id: number;
    name: string;
    image: string;
    position: number;
    zone_id: number;
    is_active: number;
    is_featured: number;
    subcategories?: Category[];
}

interface Service {
    id: number;
    customer: {};
    status: string;
    service: {
        id: number;
        price: string;
        short_description: string;
        updated_at: string;
        image: string;
        status: number;
    };
}

interface Profile {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    image: string;

    address: {
        apartment_name: string;
        zip: string;
    };
}
