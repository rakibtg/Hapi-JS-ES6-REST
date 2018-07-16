export const r = ( status, code, data ) => (
  {
    status: status == 1 ? 'success' : 'failed',
    code,
    data,
  }
)