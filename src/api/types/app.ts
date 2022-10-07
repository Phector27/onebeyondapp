export namespace DataResponse {
  export interface Response {
    inputFields: InputField[];
  }

  export interface InputField {
    id: string;
    label: string;
    placeholder: string;
    type: string;
    maxLength?: number;
  }

  export interface Sumbmission {
    Email: string
    Password: string
  }

  export interface LoginResults {
    error: string | undefined;
    data:  Data;
  }
  
  export interface Data {
    token: string;
  }
}
