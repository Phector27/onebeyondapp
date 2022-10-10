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
  }

  export interface Data {
    token: string
  }

  export interface PhoneResults {
    active: boolean
    _id: string
    id: number
    name: string
    manufacturer: string
    description: string
    color: string
    price: number
    imageFileName: string
    screen: string
    processor: string
    ram: number
    createdAt: string
  }

  export interface RegisterResults {
    error: null
    data:  RegisterData
  }
  
  export interface RegisterData {
    name: string
    email: string
    password: string
    _id: string
    date: string
  }
}
