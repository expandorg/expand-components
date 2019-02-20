// @flow

import {
  FileUploadServiceBase,
  FileUploadTask,
} from '../../../modules/UploadFile';

const delay = (timeout: number) =>
  new Promise(resolve => setTimeout(resolve, timeout));

class FileUploadTaskMock extends FileUploadTask {
  TIME = 5000;

  cancelled = false;

  async upload() {
    const timeout = Math.floor(this.TIME / 100);

    for (let i = 0; i < 1; i += 0.01) {
      // eslint-disable-next-line no-await-in-loop
      await delay(timeout);
      if (this.cancelled) {
        return null;
      }
      this.onProgress(i);
    }

    return { fileUrl: URL.createObjectURL(this.file) };
  }
  abort() {
    this.cancelled = true;
  }

  cancel() {
    this.cancelled = true;
  }
}

export default class FileUploadServiceMock extends FileUploadServiceBase {
  constructor() {
    super(FileUploadTaskMock);
  }
}
