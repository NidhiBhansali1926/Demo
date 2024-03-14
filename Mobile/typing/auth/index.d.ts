declare namespace AuthApiTypes {
  interface ApiResponse<T> {
    message: string;
    result: T;
    status: boolean;
  }

  interface UserData {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
  }

  type UserDataResponse = UserData;
}
