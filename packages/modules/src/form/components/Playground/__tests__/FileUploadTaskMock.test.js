import FileUploadServiceMock from '../FileUploadServiceMock';

describe('FileUploadTaskMock', () => {
  it('should run', async () => {
    const service = new FileUploadServiceMock();
    let result = 0;
    const handleProgres = (progress) => {
      result = progress;
      console.log(progress);
    };

    const task = service.getTask(Object(), handleProgres);
    await task.upload();
    expect(result).toEqual(100);
  });
});
