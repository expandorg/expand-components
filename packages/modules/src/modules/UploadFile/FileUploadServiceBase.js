// @flow

export const UploadState = {
  Initial: 'Initial',
  Uploading: 'Uploading',
  Uploaded: 'Uploaded',
  UploadError: 'UploadError',
};

export class FileUploadTask {
  file: File;
  onProgress: Function;

  constructor(file: File, onProgress: Function) {
    this.file = file;
    this.onProgress = onProgress;
  }

  async upload() {
    return { fileUrl: null };
  }

  abort() {}

  cancel() {}
}

export default class FileUploadServiceBase {
  UploadTask: Function;

  constructor(UploadTask: Function) {
    this.UploadTask = UploadTask;
  }

  getTask = (file: File, onProgress: Function): FileUploadTask =>
    new this.UploadTask(file, onProgress);
}
