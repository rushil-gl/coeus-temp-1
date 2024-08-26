export interface IApiGenericResponse<T> {
  data: T,
  success: Boolean,
  errorMessage: any,
}
