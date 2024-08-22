export const validateEmptyData = (data: any) =>
  data && ((Array.isArray(data) && data?.length === 0) || Object.entries(data).length === 0);