export class HttpError extends Error {
  constructor(status = 500, message = 'Error', details = null) {
    super(message);
    this.status = status;
    this.details = details;
  }
}
