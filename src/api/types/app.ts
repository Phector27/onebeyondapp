export namespace DataResponse {
  export interface Response {
    inputFields: InputField[]
  }

  export interface InputField {
    id: string
    label: string
    placeholder: string
    type: string
    maxLength?: number
  }

  export interface Sumbmission {
    Email: string
    Password: string
    Name?: string
  }

  export interface LoginResults {
    error: string | undefined
    data: Data
    isAdmin: boolean
  }

  export interface Data {
    token: string
  }

  export interface PhoneResults {
    active?: boolean
    _id: string
    id?: number
    name: string
    manufacturer: string
    description: string
    color: string
    price: number
    imageFileName: string
    screen: string
    processor: string
    ram: number
    createdAt?: string
    message?: string | undefined
  }

  export interface AddNewPhoneResult {
    id: number;
    name: string;
    manufacturer: string;
    description: string;
    color: string;
    price: number;
    imageFileName: string;
    screen: string;
    processor: string;
    ram: number;
    active: boolean;
    _id: string;
    createdAt: string;
    __v: number;
  }

  export interface AddPhoneRequest {
    id: number | string;
    name: string;
    manufacturer: string;
    description: string;
    color: string;
    price: number;
    screen: string;
    processor: string;
    ram: number;
  }

  export interface RegisterResults {
    error: null
    data: RegisterData
    message?: string
  }
  
  export interface RegisterData {
    name: string
    email: string
    password: string
    _id: string
    date: string
  }

  export interface DeletePhoneResults {
    message: string
    id: string
  }

  export interface EditResults {
    active?: boolean
    _id?: string
    id: number
    name: string
    manufacturer: string
    description: string
    color: string
    price: number
    imageFileName?: string
    screen: string
    processor: string
    ram: number
  }
}
