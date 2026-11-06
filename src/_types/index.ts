export interface Product {
  id: string;
  slug: string;
  title: string;
  title_bn: string;
  category: string;
  brand: string;
  price: number;
  regularPrice: number;
  stock: number;
  rating: number;
  reviewsCount: number;
  image: string;
  images: string[];
  featured?: boolean;
  hotDeal?: boolean;
  warranty: string;
  shortDesc: string;
  shortDesc_bn: string;
  description: string[];
  specs: Record<string, string>;
  tags: string[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  title_bn: string;
  iconName: string;
  tagline: string;
  description: string;
  estimatedTime: string;
  startingPrice: number;
  warrantyDays: number;
  features: string[];
  commonIssues: string[];
  popularDevices: string[];
  image: string;
}

export interface Category {
  id: string;
  name: string;
  name_bn: string;
  slug: string;
  icon: string;
  itemCount: number;
  image: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderDetails {
  orderId: string;
  customerName: string;
  phone: string;
  altPhone?: string;
  address: string;
  district: string;
  deliveryType: 'store_pickup' | 'local_hili' | 'courier_cod';
  paymentMethod: 'cod' | 'bkash' | 'store_pay';
  notes?: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  createdAt: string;
  status: 'Pending' | 'Confirmed' | 'In Repair / Processing' | 'Shipped' | 'Delivered';
}

export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase?: boolean;
  serviceOrProduct: string;
}

